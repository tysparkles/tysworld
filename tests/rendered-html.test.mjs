import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders Ty's World homepage", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /TY&#x27;S WORLD|TY'S WORLD/i);
  assert.match(html, /To infini/i);
  assert.match(html, /Book Ty Time/i);
  assert.match(html, /Current World/i);
  assert.match(html, /Portfolio/i);
  assert.match(html, /Contacts/i);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/i);
});

test("server-renders core public routes", async () => {
  const routes = [
    ["/about", /Hi, I&#x27;m Ty|Hi, I'm Ty/i],
    ["/art", /Pet portraits/i],
    ["/graphic-design", /Brand identity/i],
    ["/3d-animation", /Storyboard/i],
    ["/digital-media", /Websites/i],
    ["/photography-film", /Contact sheet|Creative shoots/i],
    ["/book-ty-time", /Need a design, painting, website, shoot/i],
    ["/links", /Find me elsewhere/i],
    ["/work", /All the disciplines/i],
  ];

  for (const [path, pattern] of routes) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    assert.match(await response.text(), pattern, path);
  }
});
