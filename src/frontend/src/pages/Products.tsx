import { Link } from "@tanstack/react-router";
import { useEffect } from "react";

const products = [
  {
    name: "20W Solar Panel",
    tagline: "Compact & Portable Power",
    desc: "Ideal for small appliances, portable devices, and off-grid lighting. Perfect for rural households and mobile charging solutions.",
    specs: [
      "Power Output: 20W",
      "Efficiency: Up to 18%",
      "Warranty: 25 Years Linear Power",
      "Lightweight & portable design",
      "Low light performance optimized",
      "Durable tempered glass",
    ],
    badge: "Available Now",
  },
  {
    name: "30W Solar Panel",
    tagline: "Rural Electrification Ready",
    desc: "Perfect for rural electrification, small pumps, and low-power systems. Widely used in government rural energy schemes.",
    specs: [
      "Power Output: 30W",
      "Efficiency: Up to 18%",
      "Warranty: 25 Years Linear Power",
      "Robust frame for outdoor use",
      "Anti-corrosion aluminium frame",
      "UV resistant encapsulant",
    ],
    badge: "Available Now",
  },
  {
    name: "40W Solar Panel",
    tagline: "Versatile Mid-Range",
    desc: "Versatile mid-range panel for telecom towers, security systems, and small homes. Great for off-grid and hybrid systems.",
    specs: [
      "Power Output: 40W",
      "Efficiency: Up to 18.5%",
      "Warranty: 25 Years Linear Power",
      "Suitable for telecom & CCTV",
      "Low temperature coefficient",
      "Salt mist & ammonia resistant",
    ],
    badge: "Available Now",
  },
  {
    name: "50W Solar Panel",
    tagline: "Off-Grid Solar Kit Essential",
    desc: "Widely used in off-grid solar kits, water heaters, and mobile charging. A popular choice for small home energy systems.",
    specs: [
      "Power Output: 50W",
      "Efficiency: Up to 19%",
      "Warranty: 25 Years Linear Power",
      "Compatible with 12V battery",
      "Bypass diode for shade tolerance",
      "IEC standard construction",
    ],
    badge: "Available Now",
  },
  {
    name: "60W Solar Panel",
    tagline: "Enhanced Mid-Range Output",
    desc: "Ideal for solar street lights, medium off-grid setups, and moderate residential applications. Reliable and efficient for varied uses.",
    specs: [
      "Power Output: 60W",
      "Efficiency: Up to 19.5%",
      "Warranty: 25 Years Linear Power",
      "Ideal for street lighting",
      "Robust junction box protection",
      "Wind load resistant frame",
    ],
    badge: "Available Now",
  },
  {
    name: "80W Solar Panel",
    tagline: "High-Value Performance",
    desc: "High-value panel for home energy systems, agri-pumps, and commercial setups. Excellent efficiency and output for demanding applications.",
    specs: [
      "Power Output: 80W",
      "Efficiency: Up to 19.8%",
      "Warranty: 25 Years Linear Power",
      "Ideal for home & agri systems",
      "High conversion efficiency",
      "Excellent for bulk orders",
    ],
    badge: "Available Now",
  },
  {
    name: "100W Solar Panel",
    tagline: "Our Flagship 100W Panel",
    desc: "Our flagship 100W panel for home systems, agri-pumps, and commercial use. The most versatile panel in our range with maximum output.",
    specs: [
      "Power Output: 100W",
      "Efficiency: Up to 20%",
      "Warranty: 25 Years Linear Power",
      "Ideal for home & agri-pumps",
      "High conversion efficiency",
      "Excellent for bulk orders",
    ],
    badge: "Available Now",
  },
];

function SpecIcon() {
  return (
    <svg
      aria-hidden="true"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
    >
      <circle cx="7" cy="7" r="7" fill="#F2C230" fillOpacity="0.2" />
      <path
        d="M3.5 7l2.5 2.5L10.5 5"
        stroke="#F2C230"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Products() {
  useEffect(() => {
    document.title = "20W to 100W Solar Panels — Kevitek Solar Ltd";
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-solar-yellow/20 border border-solar-yellow/40 text-solar-yellow text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            20W to 100W Range
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Solar Panel Products
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Specialized manufacturer and supplier of 20W to 100W solar panels
            for every application.
          </p>
        </div>
      </section>

      {/* Wattage Range Bar */}
      <section className="bg-solar-yellow py-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {["20W", "30W", "40W", "50W", "60W", "80W", "100W"].map((w) => (
              <span
                key={w}
                className="bg-navy text-white font-bold text-sm px-4 py-2 rounded-full"
              >
                {w}
              </span>
            ))}
            <span className="text-navy font-semibold text-sm">
              — All Available in Stock
            </span>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((p, i) => (
              <div
                key={p.name}
                data-ocid={`products.item.${i + 1}`}
                className="bg-white border border-gray-100 rounded-xl shadow-card overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-navy px-7 py-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">{p.name}</h3>
                    <p className="text-solar-yellow text-sm mt-1">
                      {p.tagline}
                    </p>
                  </div>
                  <span className="bg-solar-yellow text-navy text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                    {p.badge}
                  </span>
                </div>
                <div className="p-7">
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {p.desc}
                  </p>
                  <h4 className="font-semibold text-navy text-sm mb-3">
                    Key Specifications
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {p.specs.map((spec) => (
                      <li
                        key={spec}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <SpecIcon />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    data-ocid={`products.item.${i + 1}.primary_button`}
                    className="inline-block bg-solar-yellow text-navy font-semibold px-6 py-2.5 rounded-md hover:bg-solar-yellow-hover transition-colors text-sm"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Bulk Supply of 20W to 100W Solar Panels
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            We supply the full 20W–100W range in bulk to dealers, distributors,
            contractors, and businesses across India. Get factory-direct pricing
            today.
          </p>
          <Link
            to="/contact"
            data-ocid="products.primary_button"
            className="inline-block bg-solar-yellow text-navy font-semibold px-10 py-4 rounded-md hover:bg-solar-yellow-hover transition-colors"
          >
            Discuss Bulk Requirements
          </Link>
        </div>
      </section>
    </div>
  );
}
