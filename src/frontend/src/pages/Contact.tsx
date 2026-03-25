import { useEffect, useState } from "react";
import { InquiryType } from "../backend";
import { useActor } from "../hooks/useActor";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  inquiryType: InquiryType;
};

const initialForm: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
  inquiryType: InquiryType.general,
};

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us — Kevitek Solar Ltd";
  }, []);

  const { actor } = useActor();
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.phone.trim() ||
      !form.message.trim()
    ) {
      setError("Please fill in all required fields.");
      return;
    }
    if (!actor) {
      setError("Connection not ready. Please try again in a moment.");
      return;
    }
    setSubmitting(true);
    try {
      await actor.submitInquiry(
        form.name,
        form.company,
        form.email,
        form.phone,
        form.message,
        form.inquiryType,
      );
      setSuccess(true);
      setForm(initialForm);
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Reach out for bulk orders, dealership inquiries, or general
            questions. Our team responds within 24 hours.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">
                Send Us an Inquiry
              </h2>

              {success ? (
                <div
                  data-ocid="contact.success_state"
                  className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
                >
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="font-bold text-green-800 text-xl mb-2">
                    Inquiry Submitted!
                  </h3>
                  <p className="text-green-700">
                    Thank you! We'll contact you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSuccess(false)}
                    className="mt-4 text-sm text-green-700 underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  data-ocid="contact.panel"
                  className="space-y-5"
                >
                  {error && (
                    <div
                      data-ocid="contact.error_state"
                      className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm"
                    >
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        className="block text-sm font-medium text-navy mb-1.5"
                        htmlFor="name"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        data-ocid="contact.input"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium text-navy mb-1.5"
                        htmlFor="company"
                      >
                        Company Name
                      </label>
                      <input
                        id="company"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your company"
                        data-ocid="contact.input"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        className="block text-sm font-medium text-navy mb-1.5"
                        htmlFor="email"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        data-ocid="contact.input"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium text-navy mb-1.5"
                        htmlFor="phone"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 XXXXX XXXXX"
                        data-ocid="contact.input"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium text-navy mb-1.5"
                      htmlFor="inquiryType"
                    >
                      Inquiry Type
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={form.inquiryType}
                      onChange={handleChange}
                      data-ocid="contact.select"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent bg-white"
                    >
                      <option value={InquiryType.general}>
                        General Inquiry
                      </option>
                      <option value={InquiryType.bulkOrder}>Bulk Order</option>
                      <option value={InquiryType.dealership}>
                        Dealership / Distribution
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium text-navy mb-1.5"
                      htmlFor="message"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Describe your requirements..."
                      data-ocid="contact.textarea"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    data-ocid="contact.submit_button"
                    className="w-full bg-solar-yellow text-navy font-semibold py-3 rounded-lg hover:bg-solar-yellow-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Sending..." : "Send Inquiry"}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">
                Get In Touch
              </h2>
              <div className="space-y-5">
                {/* Address */}
                <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-5">
                  <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center shrink-0">
                    <svg
                      aria-hidden="true"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm mb-1">
                      Our Address
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      16/4/1857/1, Muthukur Rd, SBI Colony,
                      <br />
                      Balarama Nagar, Nellore,
                      <br />
                      Andhra Pradesh 524003
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-5">
                  <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center shrink-0">
                    <svg
                      aria-hidden="true"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm mb-1">
                      Phone Numbers
                    </p>
                    <a
                      href="tel:+918179176699"
                      className="text-gray-600 text-sm hover:text-navy transition-colors block"
                    >
                      +91 8179176699
                    </a>
                    <a
                      href="tel:+919849287136"
                      className="text-gray-600 text-sm hover:text-navy transition-colors block"
                    >
                      +91 98492 87136
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-5">
                  <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center shrink-0">
                    <svg
                      aria-hidden="true"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:Keviteksolar@gmail.com"
                      className="text-gray-600 text-sm hover:text-navy transition-colors"
                    >
                      Keviteksolar@gmail.com
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-5">
                  <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center shrink-0">
                    <svg
                      aria-hidden="true"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm mb-1">
                      Business Hours
                    </p>
                    <p className="text-gray-600 text-sm">Monday – Saturday</p>
                    <p className="text-gray-600 text-sm">
                      9:00 AM – 6:00 PM IST
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/918179176699"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.primary_button"
                  className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-xl transition-colors"
                >
                  <svg
                    aria-hidden="true"
                    width="22"
                    height="22"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/918179176699"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition-colors"
      >
        <span className="sr-only">Chat on WhatsApp</span>
        <svg
          aria-hidden="true"
          width="28"
          height="28"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
