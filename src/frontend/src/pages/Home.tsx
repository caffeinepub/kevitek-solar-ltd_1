import { Link } from "@tanstack/react-router";
import { useEffect } from "react";

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <circle cx="10" cy="10" r="10" fill="#F2C230" fillOpacity="0.2" />
      <path
        d="M5 10l3.5 3.5L15 7"
        stroke="#F2C230"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const products = [
  {
    name: "Mono PERC Panels",
    desc: "Highest efficiency monocrystalline panels with Passivated Emitter and Rear Cell technology for maximum power output.",
    badge: "Up to 22% Efficiency",
    icon: (
      <svg
        aria-hidden="true"
        width="48"
        height="48"
        fill="none"
        stroke="#F2C230"
        strokeWidth="1.5"
        viewBox="0 0 48 48"
      >
        <rect x="4" y="10" width="40" height="28" rx="3" />
        <line x1="4" y1="20" x2="44" y2="20" />
        <line x1="4" y1="30" x2="44" y2="30" />
        <line x1="16" y1="10" x2="16" y2="38" />
        <line x1="32" y1="10" x2="32" y2="38" />
      </svg>
    ),
  },
  {
    name: "Polycrystalline Panels",
    desc: "Cost-effective panels ideal for large-scale installations with proven reliability and excellent performance.",
    badge: "15-18% Efficiency",
    icon: (
      <svg
        aria-hidden="true"
        width="48"
        height="48"
        fill="none"
        stroke="#F2C230"
        strokeWidth="1.5"
        viewBox="0 0 48 48"
      >
        <rect x="4" y="10" width="40" height="28" rx="3" />
        <path d="M4 20 L16 10 L32 20 L44 10" />
        <path d="M4 30 L16 38 L32 28 L44 38" />
      </svg>
    ),
  },
  {
    name: "High Wattage Panels",
    desc: "Commercial-grade 400W–600W panels engineered for high energy yield in industrial and utility-scale projects.",
    badge: "400W–600W Output",
    icon: (
      <svg
        aria-hidden="true"
        width="48"
        height="48"
        fill="none"
        stroke="#F2C230"
        strokeWidth="1.5"
        viewBox="0 0 48 48"
      >
        <rect x="4" y="8" width="40" height="32" rx="3" />
        <path d="M20 24 l4-8 4 16 4-8" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const whyUs = [
  {
    title: "Superior Quality",
    desc: "Every panel passes strict quality control with IEC, BIS and ISO certifications ensuring reliability.",
    icon: "🏆",
  },
  {
    title: "Competitive Pricing",
    desc: "Factory-direct pricing with flexible bulk discounts for dealers and distributors.",
    icon: "💰",
  },
  {
    title: "Timely Delivery",
    desc: "Pan India logistics network ensuring on-time delivery to any location in India.",
    icon: "🚚",
  },
  {
    title: "Dealer Network",
    desc: "Join 500+ authorized dealers and distributors across India with dedicated support.",
    icon: "🤝",
  },
];

const applications = [
  {
    title: "Residential",
    desc: "Rooftop solar solutions for homes, apartments and housing societies.",
    icon: "🏠",
  },
  {
    title: "Commercial",
    desc: "Office buildings, shopping malls and commercial complexes.",
    icon: "🏢",
  },
  {
    title: "Industrial",
    desc: "Large-scale power generation for factories and industrial units.",
    icon: "🏭",
  },
  {
    title: "Agriculture",
    desc: "Solar pumps and agri-power solutions for farmlands.",
    icon: "🌾",
  },
];

export default function Home() {
  useEffect(() => {
    document.title =
      "Kevitek Solar Ltd — Powering India with High-Performance Solar Panels";
  }, []);

  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-solar-farm.dim_1400x700.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="max-w-2xl">
            <div className="inline-block bg-solar-yellow/20 border border-solar-yellow/40 text-solar-yellow text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-wider">
              ISO 9001:2015 Certified Manufacturer
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Powering India with High-Performance Solar Panels
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 font-light">
              Trusted Manufacturer &amp; Supplier of Quality Solar Panels
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                data-ocid="hero.primary_button"
                className="inline-block bg-solar-yellow text-navy font-semibold px-8 py-3 rounded-md hover:bg-solar-yellow-hover transition-colors text-base"
              >
                Get Quote
              </Link>
              <Link
                to="/contact"
                data-ocid="hero.secondary_button"
                className="inline-block border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-navy transition-colors text-base"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Strip */}
      <section className="bg-navy py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "ISO 9001:2015 Certified",
              "25+ Year Warranty",
              "High Efficiency Panels",
              "Pan India Supply",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckIcon />
                <span className="text-white font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">
              Our Solar Panel Range
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Industry-leading solar panels designed for performance,
              durability, and maximum energy yield.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((p) => (
              <div
                key={p.name}
                className="bg-white rounded-xl shadow-card border border-gray-100 p-7 flex flex-col items-start hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{p.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-2">{p.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                  {p.desc}
                </p>
                <span className="inline-block bg-solar-yellow/15 text-navy text-xs font-semibold px-3 py-1 rounded-full">
                  {p.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="py-20" style={{ backgroundColor: "#F4F6F8" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Manufacturing Excellence
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our state-of-the-art manufacturing facility in Nellore, Andhra
                Pradesh is equipped with automated production lines and
                precision testing equipment. Every panel undergoes rigorous
                quality checks before leaving our facility.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                With an annual capacity of 500+ MW, we deliver consistent
                quality at scale — from small residential orders to large
                industrial contracts.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "ISO 9001:2015",
                  "IEC 61215",
                  "IEC 61730",
                  "BIS Certified",
                ].map((cert) => (
                  <span
                    key={cert}
                    className="bg-navy text-white text-xs font-semibold px-3 py-1.5 rounded-full"
                  >
                    {cert}
                  </span>
                ))}
              </div>
              <Link
                to="/manufacturing"
                data-ocid="manufacturing.link"
                className="inline-block mt-8 text-navy font-semibold text-sm border-b-2 border-solar-yellow hover:border-navy transition-colors"
              >
                Explore Our Manufacturing Process →
              </Link>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/assets/generated/manufacturing-facility.dim_800x500.jpg"
                alt="Kevitek Solar manufacturing facility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">
              Why Choose Kevitek Solar?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Thousands of dealers and installers across India trust us for
              quality, reliability, and service.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-100 rounded-xl p-6 shadow-card hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-navy text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Our Solar Solutions
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto">
              Comprehensive solar energy solutions tailored for every segment.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app) => (
              <div
                key={app.title}
                className="bg-white/10 border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-colors"
              >
                <div className="text-4xl mb-4">{app.icon}</div>
                <h3 className="font-bold text-white text-lg mb-2">
                  {app.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {app.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-solar-yellow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Ready to Power Your Business?
          </h2>
          <p className="text-navy/70 text-lg mb-8">
            Join 5000+ satisfied customers. Get the best solar panels at
            factory-direct prices.
          </p>
          <Link
            to="/contact"
            data-ocid="cta.primary_button"
            className="inline-block bg-navy text-white font-semibold px-10 py-4 rounded-md hover:bg-navy-dark transition-colors text-lg"
          >
            Get a Bulk Quote Today
          </Link>
        </div>
      </section>
    </div>
  );
}
