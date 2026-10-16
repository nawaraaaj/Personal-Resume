import { useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import Button from "../ui/Button";
import { Input, Textarea } from "../ui/FormField";
import { site } from "../../data/site";
import { validateContact } from "../../lib/validation";
import type { ContactValues } from "../../lib/validation";

type Status = "idle" | "sending" | "success" | "error";

const emptyValues: ContactValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string;

export default function ContactForm() {
  const [values, setValues] = useState<ContactValues>(emptyValues);
  const [touched, setTouched] = useState<
    Partial<Record<keyof ContactValues, boolean>>
  >({});
  const [submitted, setSubmitted] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [honeypot, setHoneypot] = useState("");
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const errors = validateContact(values);
  const showError = (field: keyof ContactValues) =>
    touched[field] || submitted ? errors[field] : undefined;
  const captchaError =
    submitted && !captchaToken
      ? "Please confirm you are not a robot."
      : undefined;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (status === "success" || status === "error") setStatus("idle");
  };

  const handleBlur = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    if (Object.keys(errors).length > 0 || !captchaToken) return;

    if (honeypot) {
      setStatus("success");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          user_name: values.name.trim(),
          user_email: values.email.trim(),
          subject: values.subject.trim(),
          message: values.message.trim(),
          "g-recaptcha-response": captchaToken,
        },
        { publicKey: PUBLIC_KEY },
      );

      setStatus("success");
      setValues(emptyValues);
      setTouched({});
      setSubmitted(false);
      setCaptchaToken(null);
      recaptchaRef.current?.reset();
    } catch {
      setStatus("error");
      setCaptchaToken(null);
      recaptchaRef.current?.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Input
          id="name"
          name="name"
          label="Name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={showError("name")}
        />
        <Input
          id="email"
          name="email"
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={showError("email")}
        />
      </div>

      <Input
        id="subject"
        name="subject"
        label="Subject"
        type="text"
        placeholder="What is this about?"
        value={values.subject}
        onChange={handleChange}
        onBlur={handleBlur}
        error={showError("subject")}
      />

      <Textarea
        id="message"
        name="message"
        label="Message"
        rows={6}
        placeholder="Write your message here..."
        value={values.message}
        onChange={handleChange}
        onBlur={handleBlur}
        error={showError("message")}
      />

      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        className="absolute -left-[9999px]"
      />

      <div>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={RECAPTCHA_SITE_KEY}
          theme="light"
          onChange={(token) => setCaptchaToken(token)}
          onExpired={() => setCaptchaToken(null)}
        />
        {captchaError && (
          <p className="mt-1.5 text-sm text-red-700">{captchaError}</p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send Message"}
        </Button>

        {status === "success" && (
          <p role="status" className="text-sm font-medium text-ink">
            Thanks! Your message has been sent. I'll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p role="alert" className="text-sm text-red-700">
            Something went wrong. Please try again or email me at {site.email}.
          </p>
        )}
      </div>
    </form>
  );
}
