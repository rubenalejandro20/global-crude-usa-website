import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import { inquiryTypes } from "@/data/inquiry-types";
import { company } from "@/data/company";
import { useRfq } from "@/hooks/useRfq";
import { submitInquiry, type ContactFormValues } from "@/lib/web3forms";
import { isBlank, isValidEmail } from "@/lib/validation";
import { Icon } from "./Icon";

type FieldErrors = Partial<Record<keyof ContactFormValues, string>>;

const initialValues: ContactFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  inquiryType: "",
  subject: "",
  requirements: "",
  preferredContactMethod: "Email",
  consent: false,
  botcheck: "",
};

export function ContactForm() {
  const { prefill, clearPrefill } = useRfq();
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const formTopRef = useRef<HTMLDivElement>(null);
  const idPrefix = useId();

  useEffect(() => {
    if (prefill) {
      setValues((v) => ({ ...v, inquiryType: prefill.inquiryType, subject: prefill.subject }));
    }
  }, [prefill]);

  function update<K extends keyof ContactFormValues>(key: K, value: ContactFormValues[K]) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    if (isBlank(values.firstName)) next.firstName = "First name is required.";
    if (isBlank(values.lastName)) next.lastName = "Last name is required.";
    if (isBlank(values.email)) next.email = "Business email is required.";
    else if (!isValidEmail(values.email)) next.email = "Enter a valid email address.";
    if (isBlank(values.inquiryType)) next.inquiryType = "Select an inquiry type.";
    if (isBlank(values.subject)) next.subject = "Subject is required.";
    if (isBlank(values.requirements)) next.requirements = "Please describe your requirements.";
    if (!values.consent) next.consent = "Consent is required to submit this form.";
    return next;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (values.botcheck) {
      // Honeypot triggered — silently drop without giving automated tools feedback.
      return;
    }

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      formTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    setStatus("submitting");
    const result = await submitInquiry(values);

    if (result.ok) {
      setStatus("success");
      setValues(initialValues);
      clearPrefill();
    } else {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white border border-line rounded-[6px] p-8 sm:p-10 text-center flex flex-col items-center gap-4">
        <span className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-gold/15 text-gold">
          <Icon name="check-circle" size={28} />
        </span>
        <h3 className="text-xl font-bold text-navy-deep">Thank You</h3>
        <p className="text-ink-secondary max-w-md leading-relaxed">
          Your inquiry has been submitted successfully. Our team will review your requirements and contact you using
          the information provided.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-sm font-semibold text-navy hover:text-gold transition-colors mt-2"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-white border border-line rounded-[6px] p-6 sm:p-8">
      <div ref={formTopRef} />

      {status === "error" && (
        <div
          role="alert"
          className="mb-6 flex items-start gap-3 rounded-[6px] border border-gold/40 bg-gold/10 p-4 text-sm text-navy-deep"
        >
          <Icon name="alert-circle" size={18} className="text-gold shrink-0 mt-0.5" />
          <p>
            We couldn't send your inquiry. Please try again or contact us directly at{" "}
            <a href={company.emailHref} className="font-semibold underline underline-offset-2">
              {company.email}
            </a>{" "}
            or{" "}
            <a href={company.phone.href} className="font-semibold underline underline-offset-2">
              {company.phone.display}
            </a>
            .
          </p>
        </div>
      )}

      {/* Honeypot field — left empty by humans, often filled by bots. */}
      <div className="absolute w-px h-px overflow-hidden opacity-0 -z-10" aria-hidden="true">
        <label htmlFor={`${idPrefix}-botcheck`}>Leave this field empty</label>
        <input
          type="text"
          id={`${idPrefix}-botcheck`}
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          value={values.botcheck}
          onChange={(e) => update("botcheck", e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="First Name" required error={errors.firstName} htmlFor={`${idPrefix}-firstName`}>
          <input
            id={`${idPrefix}-firstName`}
            type="text"
            value={values.firstName}
            onChange={(e) => update("firstName", e.target.value)}
            aria-invalid={!!errors.firstName}
            aria-describedby={errors.firstName ? `${idPrefix}-firstName-error` : undefined}
            className={inputClass(!!errors.firstName)}
            autoComplete="given-name"
          />
        </Field>

        <Field label="Last Name" required error={errors.lastName} htmlFor={`${idPrefix}-lastName`}>
          <input
            id={`${idPrefix}-lastName`}
            type="text"
            value={values.lastName}
            onChange={(e) => update("lastName", e.target.value)}
            aria-invalid={!!errors.lastName}
            aria-describedby={errors.lastName ? `${idPrefix}-lastName-error` : undefined}
            className={inputClass(!!errors.lastName)}
            autoComplete="family-name"
          />
        </Field>

        <Field label="Business Email" required error={errors.email} htmlFor={`${idPrefix}-email`}>
          <input
            id={`${idPrefix}-email`}
            type="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? `${idPrefix}-email-error` : undefined}
            className={inputClass(!!errors.email)}
            autoComplete="email"
          />
        </Field>

        <Field label="Phone" htmlFor={`${idPrefix}-phone`}>
          <input
            id={`${idPrefix}-phone`}
            type="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputClass(false)}
            autoComplete="tel"
          />
        </Field>

        <Field label="Company" htmlFor={`${idPrefix}-company`}>
          <input
            id={`${idPrefix}-company`}
            type="text"
            value={values.company}
            onChange={(e) => update("company", e.target.value)}
            className={inputClass(false)}
            autoComplete="organization"
          />
        </Field>

        <Field label="Inquiry Type" required error={errors.inquiryType} htmlFor={`${idPrefix}-inquiryType`}>
          <select
            id={`${idPrefix}-inquiryType`}
            value={values.inquiryType}
            onChange={(e) => update("inquiryType", e.target.value)}
            aria-invalid={!!errors.inquiryType}
            aria-describedby={errors.inquiryType ? `${idPrefix}-inquiryType-error` : undefined}
            className={inputClass(!!errors.inquiryType)}
          >
            <option value="" disabled>
              Select an inquiry type
            </option>
            {inquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Subject" required error={errors.subject} htmlFor={`${idPrefix}-subject`} className="sm:col-span-2">
          <input
            id={`${idPrefix}-subject`}
            type="text"
            value={values.subject}
            onChange={(e) => update("subject", e.target.value)}
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? `${idPrefix}-subject-error` : undefined}
            className={inputClass(!!errors.subject)}
          />
        </Field>

        <Field
          label="Equipment / Service Requirements"
          required
          error={errors.requirements}
          htmlFor={`${idPrefix}-requirements`}
          className="sm:col-span-2"
        >
          <textarea
            id={`${idPrefix}-requirements`}
            rows={5}
            value={values.requirements}
            onChange={(e) => update("requirements", e.target.value)}
            aria-invalid={!!errors.requirements}
            aria-describedby={errors.requirements ? `${idPrefix}-requirements-error` : undefined}
            className={inputClass(!!errors.requirements)}
            placeholder="Tell us what equipment, material, or service you need. If available, include manufacturer, model, part number, size, quantity, pressure rating, material specification, operating requirements, or other relevant information."
          />
        </Field>

        <div className="sm:col-span-2">
          <p className="text-xs text-ink-secondary">
            Have drawings, datasheets, or specifications? Mention them in your message and our team can contact you
            for the files.
          </p>
        </div>

        <fieldset className="sm:col-span-2">
          <legend className="text-sm font-semibold text-navy-deep mb-2.5">Preferred Contact Method</legend>
          <div className="flex items-center gap-6">
            {(["Email", "Phone"] as const).map((method) => (
              <label key={method} className="inline-flex items-center gap-2 text-sm text-ink cursor-pointer">
                <input
                  type="radio"
                  name="preferredContactMethod"
                  value={method}
                  checked={values.preferredContactMethod === method}
                  onChange={() => update("preferredContactMethod", method)}
                  className="h-4 w-4 accent-navy"
                />
                {method}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="sm:col-span-2">
          <label className="flex items-start gap-3 text-sm text-ink cursor-pointer">
            <input
              type="checkbox"
              checked={values.consent}
              onChange={(e) => update("consent", e.target.checked)}
              aria-invalid={!!errors.consent}
              aria-describedby={errors.consent ? `${idPrefix}-consent-error` : undefined}
              className="mt-0.5 h-4 w-4 accent-navy shrink-0"
            />
            <span>I agree to be contacted by Global Crude USA Inc. regarding this inquiry.</span>
          </label>
          {errors.consent && (
            <p id={`${idPrefix}-consent-error`} className="text-xs text-red-600 mt-1.5" role="alert">
              {errors.consent}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-7 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold text-navy-deep font-semibold px-8 py-3.5 rounded-[4px] hover:bg-gold-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : "Send Inquiry"}
        {status !== "submitting" && <Icon name="send" size={16} />}
      </button>
    </form>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-[4px] border ${
    hasError ? "border-red-500" : "border-line"
  } bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-secondary/60 focus-visible:outline-2 focus-visible:outline-gold focus-visible:border-transparent transition-colors`;
}

function Field({
  label,
  required,
  error,
  htmlFor,
  children,
  className = "",
}: {
  label: string;
  required?: boolean;
  error?: string;
  htmlFor: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="block text-sm font-semibold text-navy-deep mb-1.5">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} className="text-xs text-red-600 mt-1.5" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
