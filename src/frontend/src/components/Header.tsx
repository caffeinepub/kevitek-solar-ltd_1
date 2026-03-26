import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/manufacturing", label: "Manufacturing" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const isActive = (to: string) =>
    to === "/" ? currentPath === "/" : currentPath.startsWith(to);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 h-28 flex items-center justify-between">
        {/* Logo + Company Name */}
        <Link
          to="/"
          className="flex items-center gap-3"
          data-ocid="header.link"
        >
          <img
            src="/assets/uploads/img_4287-019d282e-40a3-7099-8487-1fadc4124aed-1.jpeg"
            alt="Kevitek Solar Ltd"
            className="h-24 w-auto object-contain"
          />
          <span className="text-navy font-bold text-base tracking-wide whitespace-nowrap">
            Kevitek Solar Ltd.
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-6"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid="header.link"
              className={`text-sm font-medium transition-colors hover:text-navy ${
                isActive(link.to)
                  ? "text-navy border-b-2 border-solar-yellow pb-0.5"
                  : "text-gray-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            data-ocid="header.primary_button"
            className="inline-block bg-solar-yellow text-navy font-semibold text-sm px-5 py-2.5 rounded-md hover:bg-solar-yellow-hover transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md text-navy"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          data-ocid="header.toggle"
        >
          <svg
            aria-hidden="true"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="20" y2="20" />
                <line x1="20" y1="4" x2="4" y2="20" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid="header.link"
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium py-1 ${
                isActive(link.to) ? "text-navy font-semibold" : "text-gray-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            data-ocid="header.primary_button"
            className="inline-block bg-solar-yellow text-navy font-semibold text-sm px-5 py-2.5 rounded-md text-center mt-1"
          >
            Get a Free Quote
          </Link>
        </div>
      )}
    </header>
  );
}
