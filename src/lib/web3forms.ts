const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;

export type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  inquiryType: string;
  subject: string;
  requirements: string;
  preferredContactMethod: "Email" | "Phone";
  consent: boolean;
  /** Honeypot field — must stay empty. Bots tend to fill every input. */
  botcheck: string;
};

export async function submitInquiry(values: ContactFormValues): Promise<{ ok: boolean; message?: string }> {
  if (!WEB3FORMS_ACCESS_KEY) {
    return {
      ok: false,
      message: "Form is not configured. Missing Web3Forms access key.",
    };
  }

  const fullName = `${values.firstName} ${values.lastName}`.trim();
  const emailSubject = `Global Crude Website Inquiry - ${values.inquiryType} - ${values.company || fullName}`;

  const payload = {
    access_key: WEB3FORMS_ACCESS_KEY,
    from_name: fullName,
    name: fullName,
    email: values.email,
    phone: values.phone,
    company: values.company,
    inquiry_type: values.inquiryType,
    subject: values.subject,
    message: values.requirements,
    preferred_contact_method: values.preferredContactMethod,
    consent: values.consent ? "Yes" : "No",
    email_subject: emailSubject,
    subject_line: emailSubject,
    botcheck: values.botcheck,
  };

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => null);

    if (response.ok && data?.success) {
      return { ok: true };
    }

    return { ok: false, message: data?.message };
  } catch {
    return { ok: false, message: "Network error" };
  }
}
