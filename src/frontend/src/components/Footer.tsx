import { Link } from "@tanstack/react-router";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg
                aria-hidden="true"
                width="32"
                height="32"
                viewBox="0 0 36 36"
                fill="none"
              >
                <circle cx="18" cy="18" r="8" fill="#F2C230" />
                <g stroke="#F2C230" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="2" x2="18" y2="6" />
                  <line x1="18" y1="30" x2="18" y2="34" />
                  <line x1="2" y1="18" x2="6" y2="18" />
                  <line x1="30" y1="18" x2="34" y2="18" />
                  <line x1="6.34" y1="6.34" x2="9.17" y2="9.17" />
                  <line x1="26.83" y1="26.83" x2="29.66" y2="29.66" />
                  <line x1="29.66" y1="6.34" x2="26.83" y2="9.17" />
                  <line x1="9.17" y1="26.83" x2="6.34" y2="29.66" />
                </g>
              </svg>
              <span className="font-bold text-lg">Kevitek Solar Ltd</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              India's trusted manufacturer and supplier of high-performance
              solar panels. Powering homes, businesses, and industries across
              the nation.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-solar-yellow transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  aria-hidden="true"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-solar-yellow transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  aria-hidden="true"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-solar-yellow transition-colors"
              >
                <span className="sr-only">Twitter/X</span>
                <svg
                  aria-hidden="true"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-solar-yellow">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/products", label: "Products" },
                { to: "/manufacturing", label: "Manufacturing" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-solar-yellow">
              Contact Info
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <svg
                  aria-hidden="true"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="mt-0.5 shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  16/4/1857/1, Muthukur Rd, SBI Colony, Balarama Nagar, Nellore,
                  Andhra Pradesh 524003
                </span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  aria-hidden="true"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <a
                  href="tel:+918179176699"
                  className="hover:text-white transition-colors"
                >
                  +91 8179176699
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  aria-hidden="true"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <a
                  href="tel:+919849287136"
                  className="hover:text-white transition-colors"
                >
                  +91 98492 87136
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  aria-hidden="true"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a
                  href="mailto:Keviteksolar@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  Keviteksolar@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-400">
          <p>© {year} Kevitek Solar Ltd. All rights reserved.</p>
          <p>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
