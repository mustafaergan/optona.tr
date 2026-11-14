"use client";

import { useState, type FormEvent } from "react";
import type { Dict, Lang } from "@/content";

type Errors = Partial<Record<"name" | "email" | "message", string>>;
type State = "idle" | "sending" | "sent";

export default function ContactForm({ f, lang }: { f: Dict["close"]["form"]; lang: Lang }) {
  const [state, setState] = useState<State>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [fail, setFail] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setState("sending");
    setErrors({});
    setFail("");
    try {
      const res = await fetch("/api/contact.php", { method: "POST", body: new FormData(form) });
      const body = await res.json().catch(() => ({}));
      if (res.ok && body.ok) {
        form.reset();
        setState("sent");
        return;
      }
      if (body.errors) setErrors(body.errors);
      else setFail(body.error || f.fail);
    } catch {
      setFail(f.fail);
    }
    setState("idle");
  }

  if (state === "sent") {
    return (
      <div className="form form--sent" role="status">
        <span className="form__ok" aria-hidden="true" />
        <p>{f.sent}</p>
        <button type="button" className="link" onClick={() => setState("idle")}>
          {f.again}
        </button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <input type="hidden" name="lang" value={lang} />
      <div className="form__trap" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="form__row">
        <Field id="cf-name" label={f.name} error={errors.name}>
          <input id="cf-name" name="name" autoComplete="name" required maxLength={120} aria-invalid={!!errors.name} aria-describedby={errors.name ? "cf-name-err" : undefined} />
        </Field>
        <Field id="cf-email" label={f.email} error={errors.email}>
          <input id="cf-email" name="email" type="email" autoComplete="email" required maxLength={190} aria-invalid={!!errors.email} aria-describedby={errors.email ? "cf-email-err" : undefined} />
        </Field>
      </div>
      <Field id="cf-company" label={f.company} note={f.optional}>
        <input id="cf-company" name="company" autoComplete="organization" maxLength={160} />
      </Field>
      <Field id="cf-message" label={f.message} error={errors.message}>
        <textarea id="cf-message" name="message" rows={3} required maxLength={4000} placeholder={f.messageHint} aria-invalid={!!errors.message} aria-describedby={errors.message ? "cf-message-err" : undefined} />
      </Field>

      <div className="form__foot">
        <button type="submit" className="btn" disabled={state === "sending"}>
          {state === "sending" ? f.sending : f.submit}
        </button>
        {fail && (
          <p className="form__fail" role="alert">
            {fail}
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  note,
  error,
  children,
}: {
  id: string;
  label: string;
  note?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={error ? "field has-error" : "field"}>
      <label htmlFor={id}>
        {label}
        {note && <span className="field__note"> · {note}</span>}
      </label>
      {children}
      {error && (
        <p className="field__err" id={`${id}-err`}>
          {error}
        </p>
      )}
    </div>
  );
}
