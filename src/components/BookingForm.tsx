"use client";

import { useState } from "react";
import { bookingTypes } from "@/src/data/site";
import { tyLanguage } from "@/src/data/ty-language";

type FormState = {
  name: string;
  email: string;
  handle: string;
  bookingType: string;
  description: string;
  budget: string;
  date: string;
  location: string;
  links: string;
  references: string;
  discovery: string;
  consent: boolean;
};

const initialState: FormState = {
  name: "",
  email: "",
  handle: "",
  bookingType: "Brand identity",
  description: "",
  budget: "",
  date: "",
  location: "",
  links: "",
  references: "",
  discovery: "",
  consent: false,
};

export function BookingForm() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    setError("");
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.name || !form.email || !form.description || !form.consent) {
      setError(tyLanguage.formError);
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="booking-success" aria-live="polite">
        <p className="hand-note">{tyLanguage.formSuccess}</p>
        <h2>Your wish is my command.</h2>
        <p>This demo form is ready for email, calendar and file upload integrations when Ty chooses the final tools.</p>
      </section>
    );
  }

  return (
    <form className="booking-form" onSubmit={submit} noValidate>
      {error ? <p className="form-error">{error}</p> : null}
      <label>
        Name
        <input value={form.name} onChange={(event) => update("name", event.target.value)} required />
      </label>
      <label>
        Email
        <input type="email" value={form.email} onChange={(event) => update("email", event.target.value)} required />
      </label>
      <label>
        Company or social handle
        <input value={form.handle} onChange={(event) => update("handle", event.target.value)} />
      </label>
      <label>
        What are you booking?
        <select value={form.bookingType} onChange={(event) => update("bookingType", event.target.value)}>
          {bookingTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </label>
      {form.bookingType === "Take Ty Out" ? (
        <p className="take-ty-out">Pitch the plan. Low-effort submissions may be artistically rejected.</p>
      ) : null}
      <label className="span-2">
        Project or invitation description
        <textarea value={form.description} onChange={(event) => update("description", event.target.value)} required />
      </label>
      <label>
        Budget
        <input value={form.budget} onChange={(event) => update("budget", event.target.value)} />
      </label>
      <label>
        Preferred date
        <input type="date" value={form.date} onChange={(event) => update("date", event.target.value)} />
      </label>
      <label>
        Location
        <input value={form.location} onChange={(event) => update("location", event.target.value)} />
      </label>
      <label>
        Links
        <input value={form.links} onChange={(event) => update("links", event.target.value)} placeholder="Portfolio, moodboard, website..." />
      </label>
      <label className="span-2">
        References
        <textarea value={form.references} onChange={(event) => update("references", event.target.value)} placeholder="File upload placeholder lives here until integration." />
      </label>
      <label>
        How did you find Ty?
        <input value={form.discovery} onChange={(event) => update("discovery", event.target.value)} />
      </label>
      <label className="checkbox-label">
        <input type="checkbox" checked={form.consent} onChange={(event) => update("consent", event.target.checked)} required />
        <span>I agree that Ty can use this information to respond. Spam prevention and email integration are placeholders.</span>
      </label>
      <button type="submit">Book Ty Time</button>
    </form>
  );
}
