import { Link } from "@tanstack/react-router";
import { useEffect } from "react";

const steps = [
  {
    num: 1,
    title: "Raw Material Sourcing",
    desc: "Premium grade silicon wafers and high-quality materials sourced from certified global suppliers.",
  },
  {
    num: 2,
    title: "Wafer Production",
    desc: "Precision cutting and surface treatment of silicon wafers to exact specifications for optimal cell performance.",
  },
  {
    num: 3,
    title: "Cell Manufacturing",
    desc: "Advanced diffusion and passivation processes create high-efficiency solar cells with superior light absorption.",
  },
  {
    num: 4,
    title: "Panel Assembly",
    desc: "Automated lamination and encapsulation using EVA film and tempered glass for maximum durability.",
  },
  {
    num: 5,
    title: "Quality Testing",
    desc: "100% panels undergo flash testing, EL imaging, and thermal cycling to meet the highest industry standards.",
  },
  {
    num: 6,
    title: "Packaging & Dispatch",
    desc: "Weatherproof packaging with logistics tracking ensures panels arrive in perfect condition across India.",
  },
];

const tech = [
  {
    title: "Automated Assembly",
    desc: "Robotic assembly lines ensure precision, consistency, and zero human error in panel construction.",
    icon: "🤖",
  },
  {
    title: "Precision Laser Cutting",
    desc: "State-of-the-art laser cutting for exact wafer dimensions with minimal material waste.",
    icon: "⚡",
  },
  {
    title: "Anti-Reflective Coating",
    desc: "Multi-layer AR coating maximizes light absorption across the full solar spectrum.",
    icon: "🔬",
  },
  {
    title: "Testing Chambers",
    desc: "Dedicated environmental simulation chambers for thermal cycling, humidity, and UV degradation tests.",
    icon: "🧪",
  },
];

export default function Manufacturing() {
  useEffect(() => {
    document.title = "Manufacturing Excellence — Kevitek Solar Ltd";
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-28 bg-navy">
        <div className="absolute inset-0 bg-navy/90" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Manufacturing Excellence
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            500+ MW annual production capacity. Built on precision, automation,
            and unwavering quality standards.
          </p>
        </div>
      </section>

      {/* Factory / Machinery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-navy mb-3">
              Our Machinery — Kevitek Solar
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              State-of-the-art automated machinery at Kevitek Solar's production
              facility, delivering precision-engineered solar panels at scale.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
            <img
              src="/assets/generated/factory-machinery-kevitek.dim_1200x700.jpg"
              alt="Kevitek Solar — Manufacturing Machinery"
              className="w-full object-cover"
              style={{ maxHeight: "520px" }}
            />
          </div>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <p className="text-2xl font-bold text-solar-yellow">500+ MW</p>
              <p className="text-sm text-gray-500 mt-1">Annual Capacity</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <p className="text-2xl font-bold text-solar-yellow">28</p>
              <p className="text-sm text-gray-500 mt-1">States Served</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <p className="text-2xl font-bold text-solar-yellow">100%</p>
              <p className="text-sm text-gray-500 mt-1">Quality Tested</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <p className="text-2xl font-bold text-solar-yellow">20W–100W</p>
              <p className="text-sm text-gray-500 mt-1">Product Range</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stat Banner */}
      <section className="bg-solar-yellow py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-3xl font-bold text-navy">
            500+ MW Annual Production Capacity
          </p>
          <p className="text-navy/70 mt-1">
            Serving dealers and businesses across all 28 states of India
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-3">
              Our Manufacturing Process
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              A six-stage precision process from raw silicon to finished solar
              panel.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-white border border-gray-100 rounded-xl p-6 shadow-card hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-solar-yellow flex items-center justify-center text-navy font-bold text-xl mb-4">
                  {step.num}
                </div>
                <h3 className="font-bold text-navy text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Storage Godown Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-4">
                Storage Godown
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our large-capacity storage godown ensures ready stock of 20W to
                100W solar panels for immediate dispatch. Organized in clearly
                labelled bays by wattage, our warehouse supports rapid order
                fulfillment across India.
              </p>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-solar-yellow font-bold mt-0.5">✓</span>
                  <span>
                    Large inventory maintained for all wattage variants (20W –
                    100W)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-solar-yellow font-bold mt-0.5">✓</span>
                  <span>
                    Climate-controlled storage to maintain panel quality
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-solar-yellow font-bold mt-0.5">✓</span>
                  <span>
                    Ready for same-day or next-day dispatch on bulk orders
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-solar-yellow font-bold mt-0.5">✓</span>
                  <span>Pan India logistics from our Nellore facility</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              <img
                src="/assets/generated/storage-godown.dim_900x600.jpg"
                alt="Kevitek Solar Storage Godown"
                className="w-full object-cover"
                style={{ maxHeight: "420px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Packaging Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 order-2 lg:order-1">
              <img
                src="/assets/generated/kevitek-packaging.dim_1200x800.jpg"
                alt="Kevitek Solar Packaging"
                className="w-full object-cover"
                style={{ maxHeight: "420px" }}
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-navy mb-4">
                Packaging & Dispatch
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Every Kevitek Solar panel is carefully packed in weatherproof,
                shock-resistant packaging to ensure it reaches you in perfect
                condition — whether it's a single panel or a bulk container
                shipment.
              </p>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-solar-yellow font-bold mt-0.5">✓</span>
                  <span>Multi-layer foam and cardboard protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-solar-yellow font-bold mt-0.5">✓</span>
                  <span>
                    Clearly labelled with wattage, serial number, and specs
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-solar-yellow font-bold mt-0.5">✓</span>
                  <span>Palletized for safe loading and transport</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-solar-yellow font-bold mt-0.5">✓</span>
                  <span>Dispatch tracking provided for all bulk orders</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-3">
              Advanced Technology
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Investments in cutting-edge technology ensure every panel delivers
              peak performance.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tech.map((t) => (
              <div
                key={t.title}
                className="bg-white border border-gray-100 rounded-xl p-6 shadow-card text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{t.icon}</div>
                <h3 className="font-bold text-navy text-base mb-2">
                  {t.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Partner with India's Leading Manufacturer
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Get factory-direct pricing on bulk orders. Authorized dealership
            programs available.
          </p>
          <Link
            to="/contact"
            data-ocid="manufacturing.primary_button"
            className="inline-block bg-solar-yellow text-navy font-semibold px-10 py-4 rounded-md hover:bg-solar-yellow-hover transition-colors"
          >
            Become a Dealer
          </Link>
        </div>
      </section>
    </div>
  );
}
