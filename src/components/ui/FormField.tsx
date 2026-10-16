import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type Shared = {
  id: string;
  label: string;
  error?: string;
};

const fieldClass = (error?: string) =>
  `w-full rounded-sm border bg-canvas px-4 py-3 text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none ${
    error ? "border-red-700" : "border-line"
  }`;

function Label({ id, label }: { id: string; label: string }) {
  return (
    <label htmlFor={id} className="mb-2 block text-sm font-medium">
      {label}
    </label>
  );
}

function ErrorText({ id, error }: { id: string; error?: string }) {
  if (!error) return null;
  return (
    <p id={`${id}-error`} className="mt-1.5 text-sm text-red-700">
      {error}
    </p>
  );
}

export function Input({
  id,
  label,
  error,
  ...props
}: Shared & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <Label id={id} label={label} />
      <input
        id={id}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={fieldClass(error)}
        {...props}
      />
      <ErrorText id={id} error={error} />
    </div>
  );
}

export function Textarea({
  id,
  label,
  error,
  ...props
}: Shared & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div>
      <Label id={id} label={label} />
      <textarea
        id={id}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${fieldClass(error)} resize-y`}
        {...props}
      />
      <ErrorText id={id} error={error} />
    </div>
  );
}
