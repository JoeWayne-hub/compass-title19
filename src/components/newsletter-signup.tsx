"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export default function NewsletterSignup() {
  const [message, setMessage] = useState("Occasional updates and practical Connecticut Medicaid resources.");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Thanks for your interest. Connect an email-list service to receive updates.");
    event.currentTarget.reset();
  }

  return (
    <section className="newsletter" aria-labelledby="newsletter-heading">
      <div className="wrap newsletter-inner">
        <div><p className="eyebrow">A NOTE FROM COMPASS</p><h2 id="newsletter-heading">Guidance worth<br /><em>keeping close.</em></h2></div>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <label htmlFor="newsletter-email">Get occasional updates from Compass</label>
          <div className="newsletter-controls"><input id="newsletter-email" type="email" placeholder="Your email address" autoComplete="email" required /><button type="submit">Subscribe <span aria-hidden="true">↗</span></button></div>
          <p aria-live="polite">{message}</p>
        </form>
      </div>
    </section>
  );
}
