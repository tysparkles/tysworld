import type { Metadata } from "next";
import { HomePage } from "@/src/components/HomePage";

export const metadata: Metadata = {
  title: "Tylah the Creator",
  description: "A visual self-portrait disguised as a portfolio for Tylah Jade Abrahams.",
};

export default function Home() {
  return <HomePage />;
}
