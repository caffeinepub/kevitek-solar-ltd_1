import { useEffect } from "react";

const stats = [
  { value: "500+ MW", label: "Annual Capacity" },
  { value: "Est. 2026", label: "Founded" },
  { value: "5000+", label: "Installations" },
  { value: "Pan India", label: "Presence" },
];

const values = [
  {
    title: "Quality",
    desc: "Every panel meets the highest industry standards with rigorous quality testing at every production stage.",
    icon: "🏅",
  },
  {
    title: "Innovation",
    desc: "Continuously investing in R&D and advanced technologies to deliver next-generation solar solutions.",
    icon: "💡",
  },
  {
    title: "Sustainability",
    desc: "Committed to a greener planet by enabling widespread adoption of clean, renewable solar energy.",
    icon: "🌱",
  },
  {
    title: "Integrity",
    desc: "Transparent business practices, honest pricing, and long-term relationships with all our partners.",
    icon: "🤝",
  },
];

export default function About() {
  useEffect(() => {
    document.title = "About Us — Kevitek Solar Ltd";
  }, []);

  return (
    <div>
      {/* Page Hero */}
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Kevitek Solar Ltd
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Manufacturing excellence, powering India's solar revolution from
            Nellore, Andhra Pradesh.
          </p>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Our Story</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kevitek Solar Ltd has grown to become one of India's most
                trusted solar panel manufacturers. Based in Nellore, Andhra
                Pradesh, we combine cutting-edge technology with deep industry
                expertise to deliver premium quality solar panels.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our manufacturing facility operates at 500+ MW annual capacity,
                equipped with automated assembly lines and precision testing
                chambers. We serve dealers, distributors, contractors, and
                businesses across every state in India.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our panels are engineered to perform in India's diverse climatic
                conditions — from the arid deserts of Rajasthan to the tropical
                coasts of Kerala.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {stats.map((s) => (
                <div
                  key={s.value}
                  className="bg-navy rounded-xl p-6 text-center"
                >
                  <div className="text-solar-yellow text-3xl font-bold mb-1">
                    {s.value}
                  </div>
                  <div className="text-gray-300 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20" style={{ backgroundColor: "#F4F6F8" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-card border-l-4 border-solar-yellow p-8">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-navy mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To accelerate India's transition to clean energy by delivering
                superior quality, high-efficiency solar panels at competitive
                prices, while building lasting partnerships with dealers,
                distributors, and end-users across the nation.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-card border-l-4 border-navy p-8">
              <div className="text-3xl mb-4">🔭</div>
              <h3 className="text-2xl font-bold text-navy mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be India's most trusted solar panel brand — synonymous with
                innovation, reliability, and sustainability. We envision a
                future where every home, business, and farm in India is powered
                by clean solar energy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-3">
              Our Core Values
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              The principles that guide every decision we make.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white border border-gray-100 rounded-xl p-6 shadow-card text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-navy text-lg mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
