"use client";

import { FormEvent, useState, useSyncExternalStore } from "react";
import { EmailField, hasEmailFormat } from "@/components/EmailField";
import { SelectField } from "@/components/SelectField";
import { formatPhone } from "@/lib/phone";
import { contactMethods, projectTypes } from "@/lib/site";

const fieldClass =
  "mt-2 w-full rounded-xl border bg-white px-3 py-2.5 text-sm text-ink outline-none transition sm:text-base";

type FieldErrors = {
  name?: string;
  phone?: string;
  email?: string;
  address?: string;
};

function inputClass(hasError: boolean) {
  return `${fieldClass} ${
    hasError ? "border-red-500 focus:border-red-500" : "border-line focus:border-forest"
  }`;
}

const emptySubscribe = () => () => {};

export function ContactForm() {
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [details, setDetails] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [projectType, setProjectType] = useState<string>(projectTypes[0]);
  const [contactMethod, setContactMethod] = useState<string>(contactMethods[0]);
  const [openSelect, setOpenSelect] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  function toggleSelect(selectName: string, open: boolean) {
    setOpenSelect(open ? selectName : null);
  }

  function clearFieldError(field: keyof FieldErrors) {
    setFieldErrors((current) => {
      if (!current[field]) {
        return current;
      }
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  function validateRequiredFields() {
    const next: FieldErrors = {};
    if (!name.trim()) {
      next.name = "Please enter your name";
    }
    if (phone.replace(/\D/g, "").length !== 10) {
      next.phone = "Please enter your phone";
    }
    if (!email.trim()) {
      next.email = "Please enter your email";
    } else if (!hasEmailFormat(email)) {
      next.email = "Enter a valid email address.";
    }
    if (!address.trim()) {
      next.address = "Please enter your address or community";
    }
    setFieldErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validateRequiredFields()) {
      return;
    }

    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      form.reset();
      setName("");
      setPhone("");
      setEmail("");
      setAddress("");
      setDetails("");
      setFieldErrors({});
      setProjectType(projectTypes[0]);
      setContactMethod(contactMethods[0]);
      setOpenSelect(null);
      setStatus("success");
      setMessage("Thanks! We’ll review your project and be in touch shortly.");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please call us or try again.");
    }
  }

  if (!mounted) {
    return <div className="min-h-[24rem]" aria-hidden="true" />;
  }

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="min-w-0">
          <label className="block text-sm font-medium text-ink">
            Name
            <input
              name="name"
              type="text"
              required
              autoComplete="name"
              value={name}
              aria-invalid={Boolean(fieldErrors.name)}
              onChange={(event) => {
                setName(event.target.value);
                clearFieldError("name");
              }}
              className={inputClass(Boolean(fieldErrors.name))}
            />
          </label>
          {fieldErrors.name ? (
            <p role="alert" className="mt-1.5 text-sm text-red-600">
              {fieldErrors.name}
            </p>
          ) : null}
        </div>
        <div className="min-w-0">
          <label className="block text-sm font-medium text-ink">
            Phone
            <input
              name="phone"
              type="tel"
              required
              inputMode="numeric"
              autoComplete="tel"
              suppressHydrationWarning
              value={phone}
              aria-invalid={Boolean(fieldErrors.phone)}
              onChange={(event) => {
                setPhone(formatPhone(event.target.value));
                clearFieldError("phone");
              }}
              className={inputClass(Boolean(fieldErrors.phone))}
            />
          </label>
          {fieldErrors.phone ? (
            <p role="alert" className="mt-1.5 text-sm text-red-600">
              {fieldErrors.phone}
            </p>
          ) : null}
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <EmailField
          id="contact-email"
          required
          value={email}
          error={fieldErrors.email}
          onChange={(value) => {
            setEmail(value);
            clearFieldError("email");
          }}
        />
        <div className="min-w-0">
          <label className="block text-sm font-medium text-ink">
            Project Address / Community
            <input
              name="address"
              type="text"
              required
              autoComplete="street-address"
              value={address}
              aria-invalid={Boolean(fieldErrors.address)}
              onChange={(event) => {
                setAddress(event.target.value);
                clearFieldError("address");
              }}
              className={inputClass(Boolean(fieldErrors.address))}
            />
          </label>
          {fieldErrors.address ? (
            <p role="alert" className="mt-1.5 text-sm text-red-600">
              {fieldErrors.address}
            </p>
          ) : null}
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="block min-w-0 text-sm font-medium text-ink">
          Project Type
          <SelectField
            name="projectType"
            required
            value={projectType}
            options={projectTypes}
            placeholder="Select a project type"
            open={openSelect === "projectType"}
            onOpenChange={(open) => toggleSelect("projectType", open)}
            onChange={setProjectType}
          />
        </div>
        <div className="block min-w-0 text-sm font-medium text-ink">
          Preferred Contact Method
          <SelectField
            name="contactMethod"
            required
            value={contactMethod}
            options={contactMethods}
            open={openSelect === "contactMethod"}
            onOpenChange={(open) => toggleSelect("contactMethod", open)}
            onChange={setContactMethod}
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-ink">
          Tell Us About Your Project
          <textarea
            name="details"
            rows={4}
            value={details}
            onChange={(event) => setDetails(event.target.value)}
            className={`${fieldClass} unbounded-scroll h-[7.5rem] resize-none border-line focus:border-forest`}
          />
        </label>
      </div>
      <div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-12 w-full items-center justify-center rounded-full border border-forest bg-forest text-base font-medium text-white transition-colors hover:bg-white hover:text-forest disabled:opacity-70"
        >
          {status === "sending" ? "Sending…" : "Request My Free Estimate"}
        </button>
        {message ? (
          <p
            role="status"
            className={`mt-3 text-sm ${status === "error" ? "text-red-700" : "text-sage"}`}
          >
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
