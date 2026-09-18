"use client";

import { FormEvent, useMemo, useState } from "react";
import { ThinkingOrb } from "thinking-orbs";
import type { InquiryFormValues } from "@/content/types";

type Errors = Partial<Record<keyof InquiryFormValues, string>>;

export function InquiryForm({ formId = "inquiry", compact = false }: { formId?: string; compact?: boolean }) {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isPreparing, setIsPreparing] = useState(false);
  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isPreparing) return;

    const form = event.currentTarget;
    const data = new FormData(event.currentTarget);
    const values: InquiryFormValues = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      project: String(data.get("project") ?? "").trim(),
      preferredDate: String(data.get("preferredDate") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    const nextErrors: Errors = {};
    if (values.name.length < 2) nextErrors.name = "Enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) nextErrors.email = "Enter a valid email address.";
    if (!/^[+\d][\d\s()-]{7,}$/.test(values.phone)) nextErrors.phone = "Enter a valid phone number.";
    if (!values.project) nextErrors.project = "Choose a project.";
    if (!values.preferredDate || values.preferredDate < today) nextErrors.preferredDate = "Choose today or a future date.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setIsPreparing(true);
      await new Promise((resolve) => window.setTimeout(resolve, 1700));
      form.reset();
      setIsPreparing(false);
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="form-success" role="status" tabIndex={-1}>
        <span className="form-success__mark" aria-hidden="true">✓</span>
        <p className="eyebrow">Viewing request prepared</p>
        <h3>Thank you. Your preferred visit has been noted.</h3>
        <p>This is a demonstration form, so no information has been sent. The final site can connect this step to your sales team.</p>
        <button className="text-link" type="button" onClick={() => setSubmitted(false)}>Make another request</button>
      </div>
    );
  }

  const fieldId = (name: string) => `${formId}-${name}`;

  return (
    <form className={`inquiry-form ${compact ? "inquiry-form--compact" : ""}`} onSubmit={handleSubmit} aria-busy={isPreparing} noValidate>
      <div className="form-field">
        <label htmlFor={fieldId("name")}>Full name</label>
        <input id={fieldId("name")} name="name" autoComplete="name" aria-describedby={errors.name ? fieldId("name-error") : undefined} />
        {errors.name && <span className="field-error" id={fieldId("name-error")}>{errors.name}</span>}
      </div>
      <div className="form-field">
        <label htmlFor={fieldId("email")}>Email address</label>
        <input id={fieldId("email")} name="email" type="email" autoComplete="email" aria-describedby={errors.email ? fieldId("email-error") : undefined} />
        {errors.email && <span className="field-error" id={fieldId("email-error")}>{errors.email}</span>}
      </div>
      <div className="form-field">
        <label htmlFor={fieldId("phone")}>Phone</label>
        <input id={fieldId("phone")} name="phone" type="tel" autoComplete="tel" aria-describedby={errors.phone ? fieldId("phone-error") : undefined} />
        {errors.phone && <span className="field-error" id={fieldId("phone-error")}>{errors.phone}</span>}
      </div>
      <div className="form-field">
        <label htmlFor={fieldId("project")}>Project interest</label>
        <select id={fieldId("project")} name="project" defaultValue="" aria-describedby={errors.project ? fieldId("project-error") : undefined}>
          <option value="" disabled>Select a residence</option>
          <option>Aster House · Mumbai</option>
          <option>Casa Neru · Goa</option>
          <option>Courtyard 07 · Bengaluru</option>
          <option>Hima House · Kasauli</option>
        </select>
        {errors.project && <span className="field-error" id={fieldId("project-error")}>{errors.project}</span>}
      </div>
      <div className="form-field">
        <label htmlFor={fieldId("date")}>Preferred date</label>
        <input id={fieldId("date")} name="preferredDate" type="date" min={today} aria-describedby={errors.preferredDate ? fieldId("date-error") : undefined} />
        {errors.preferredDate && <span className="field-error" id={fieldId("date-error")}>{errors.preferredDate}</span>}
      </div>
      <div className="form-field form-field--wide">
        <label htmlFor={fieldId("message")}>A note for our team <span>(optional)</span></label>
        <textarea id={fieldId("message")} name="message" rows={compact ? 2 : 3} />
      </div>
      <div className="form-submit form-field--wide">
        <p className="form-note">Demo only. Your details will not be transmitted.</p>
        <button className={`button button--dark ${isPreparing ? "button--preparing" : ""}`} type="submit" disabled={isPreparing}>
          {isPreparing ? (
            <>
              <ThinkingOrb state="shaping" size={20} speed={1.05} theme="dark" aria-label="Preparing request" />
              <span>Preparing request</span>
            </>
          ) : "Prepare request"}
        </button>
      </div>
      <div className="sr-only" aria-live="polite">
        {isPreparing ? "Preparing your viewing request." : Object.keys(errors).length ? "Please correct the highlighted fields." : ""}
      </div>
    </form>
  );
}
