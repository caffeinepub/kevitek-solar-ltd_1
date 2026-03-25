import { Link } from "@tanstack/react-router";
import { useEffect } from "react";

const products = [
  {
    name: "Mono PERC Solar Panels",
    tagline: "Premium Efficiency for Every Watt",
    desc: "Mono PERC (Passivated Emitter and Rear Cell) panels are our flagship product offering the highest conversion efficiency. Ideal for space-constrained rooftops and premium installations.",
    specs: [
      "Efficiency: 18–22%",
      "Power Range: 350W–450W",
      "Warranty: 25 Years Linear Power",
      "Anti-reflective coating",
      "Low light performance optimized",
      "Temperature coefficient: -0.35%/°C",
    ],
    badge: "Best Seller",
  },
  {
    name: "Polycrystalline Panels",
    tagline: "Cost-Effective & Reliable",
    desc: "Our polycrystalline panels offer the best value-for-money proposition. Proven technology with decades of field reliability, ideal for large-scale projects where cost efficiency matters.",
    specs: [
      "Efficiency: 15–18%",
      "Power Range: 250W–370W",
      "Warranty: 25 Years",
      "Cost-effective solution",
      "Excellent for large-scale projects",
      "Low degradation rate",
    ],
    badge: "Value Choice",
  },
  {
    name: "High Wattage Panels",
    tagline: "Maximum Power for Maximum Scale",
    desc: "Engineered for commercial and industrial applications requiring high output from fewer panels. Reduce BOS (Balance of System) costs while maximizing energy generation per square foot.",
    specs: [
      "Power Range: 400W–600W",
      "Efficiency: up to 21.5%",
      "Commercial grade construction",
      "Reduced installation footprint",
      "Lower LCOE for large projects",
      "IEC certified",
    ],
    badge: "Commercial Grade",
  },
  {
    name: "Bifacial Solar Panels",
    tagline: "Double the Surface, Double the Power",
    desc: "Bifacial panels capture sunlight from both front and rear surfaces, delivering up to 30% additional energy output. Perfect for ground-mounted and elevated rooftop installations.",
    specs: [
      "Rear gain: up to 30% additional",
      "Efficiency: up to 22.8%",
      "Dual-sided glass construction",
      "Excellent for ground-mount",
      "Long service life 30+ years",
      "Premium commercial/industrial grade",
    ],
    badge: "Premium",
  },
];

export default function Products() {
  useEffect(() => {
    document.title = "Solar Panel Products — Kevitek Solar Ltd";
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Solar Panel Products
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Four types of high-performance solar panels engineered for every
            application and budget.
          </p>
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
                        <svg
                          aria-hidden="true"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <circle
                            cx="7"
                            cy="7"
                            r="7"
                            fill="#F2C230"
                            fillOpacity="0.2"
                          />
                          <path
                            d="M3.5 7l2.5 2.5L10.5 5"
                            stroke="#F2C230"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
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
            Need Custom Specifications?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Our team can customize panel specifications for large-scale and OEM
            requirements.
          </p>
          <Link
            to="/contact"
            data-ocid="products.primary_button"
            className="inline-block bg-solar-yellow text-navy font-semibold px-10 py-4 rounded-md hover:bg-solar-yellow-hover transition-colors"
          >
            Discuss Your Requirements
          </Link>
        </div>
      </section>
    </div>
  );
}
