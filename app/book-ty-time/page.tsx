import { BookingForm } from "@/src/components/BookingForm";
import { bookingTypes, processSteps } from "@/src/data/site";

export default function BookTyTimePage() {
  return (
    <main className="inner-page booking-page" id="top">
      <section className="discipline-hero">
        <p className="hand-note">Your wish is my command.</p>
        <h1>BOOK TY TIME</h1>
        <p>Need a design, painting, website, shoot, idea, collaboration or a very specific amount of Ty&apos;s attention?</p>
      </section>
      <section className="booking-layout">
        <div className="booking-types">
          <h2>What Ty can be booked for</h2>
          <div>{bookingTypes.map((type) => <span key={type}>{type}</span>)}</div>
        </div>
        <BookingForm />
      </section>
      <section className="process-path">
        <p className="hand-note">The chaos is visual. The process is not.</p>
        <h2>Process</h2>
        <ol>{processSteps.map((step) => <li key={step}>{step}</li>)}</ol>
      </section>
    </main>
  );
}
