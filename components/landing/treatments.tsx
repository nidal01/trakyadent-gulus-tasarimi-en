"use client"

import React, { useEffect, useRef, useState } from "react"
import {
  Sparkles,
  Star,
  Crown,
  Gem,
  Layers,
  Anchor,
  Zap,
  CheckCircle2,
  ChevronDown,
  SquareStack,
} from "lucide-react"
import { WhatsAppIcon } from "./whatsapp-icon"

const treatments = [
  {
    icon: Sparkles,
    label: "Digital Smile Design",
    title: "Digital Smile Design",
    shortDesc: "Personalized smile design planned digitally, customized to your facial features.",
    longDesc:
      "Digital smile design is a modern planning method that allows you to see the results before starting treatment. A simulation is prepared considering facial symmetry, tooth proportions and lip structure, creating a plan that perfectly matches your expectations.",
    benefits: [
      "See results with digital simulation before treatment",
      "Planning customized to your facial features and proportions",
      "Combines aesthetics and functionality",
      "More predictable and reliable treatment process",
    ],
  },
  {
    icon: Star,
    label: "Hollywood Smile",
    title: "Hollywood Smile",
    shortDesc: "Hollywood Smile transformation for white, bright and eye-catching teeth.",
    longDesc:
      "Hollywood Smile is a comprehensive aesthetic application that redesigns the shape, color and size of teeth with ideal proportions. It is a prestigious transformation package preferred by patients seeking perfect whiteness and symmetry.",
    benefits: [
      "Distinctive whiteness and flawless symmetry",
      "Tooth shape and size optimized with veneers",
      "Dramatic transformation possible in one session",
      "Years of aesthetic and functional use",
    ],
  },
  {
    icon: Crown,
    label: "Emax Veneers",
    title: "Emax Veneers",
    shortDesc: "Pressed ceramic veneers offering natural tooth appearance with light transmittance.",
    longDesc:
      "Emax (lithium disilicate) veneers are the ceramic system that provides the most natural and aesthetic appearance for front teeth. They offer naturalness and aesthetics together with light transmittance almost identical to real tooth enamel.",
    benefits: [
      "Light transmittance similar to natural tooth enamel",
      "Minimal tooth reduction due to thin structure",
      "Long-lasting and resistant to discoloration",
      "Provides the most aesthetic results for front teeth",
    ],
  },
  {
    icon: Gem,
    label: "Zirconium Crowns",
    title: "Zirconium Crowns",
    shortDesc: "High durability and aesthetics combined; strong smiles with zirconium crowns.",
    longDesc:
      "Zirconium crowns are a biocompatible and extremely durable ceramic system that can be safely used on both front and back teeth. Since it does not contain metal infrastructure, it prevents the formation of dark lines on the gums.",
    benefits: [
      "Metal-free biocompatible structure",
      "Can be safely applied to back teeth",
      "Protects gum health",
      "Long-lasting with high fracture resistance",
    ],
  },
  {
    icon: SquareStack,
    label: "Laminate Veneers",
    title: "Laminate Veneers",
    shortDesc: "A natural and elegant smile with ultra-thin laminate veneers applied only to the front surface of teeth.",
    longDesc:
      "Laminate (laminate veneer) dental application is a minimally invasive aesthetic procedure performed with very thin ceramic or composite plates bonded to the front surface of the tooth. It allows cosmetic problems such as color, shape, height and spacing to be corrected in a short time.",
    benefits: [
      "Minimal or no cutting from tooth enamel",
      "Color defects, chips and gaps can be corrected in one procedure",
      "Aesthetic result closest to natural tooth appearance",
      "Permanent and durable solution applied in a short time",
    ],
  },
  {
    icon: Layers,
    label: "Porcelain Veneers",
    title: "Porcelain Veneers",
    shortDesc: "Minimally invasive aesthetic solution covering teeth with thin porcelain laminates.",
    longDesc:
      "Porcelain laminate veneers are a minimally invasive aesthetic application performed by bonding a thin porcelain layer to only the front surface of the tooth. Defects in color, shape and size are corrected with minimal tooth reduction.",
    benefits: [
      "Aesthetic transformation with minimal tooth reduction",
      "Defects in color, shape and size are corrected",
      "Natural appearance matching tooth color",
      "Durable and long-lasting aesthetic solution",
    ],
  },
  {
    icon: Anchor,
    label: "Implants",
    title: "Implants",
    shortDesc: "The most permanent and natural-looking solution for missing teeth: titanium implants.",
    longDesc:
      "Dental implant is a permanent treatment method fixed to the jaw with titanium screws to replace missing teeth. Implants that function like natural tooth roots are an indispensable part of smile design.",
    benefits: [
      "Functions like a natural tooth root",
      "Does not damage adjacent teeth",
      "Prevents bone loss, protects jaw structure",
      "Can be used for a lifetime with proper care",
    ],
  },
  {
    icon: Zap,
    label: "Teeth Whitening",
    title: "Teeth Whitening",
    shortDesc: "A brighter and more radiant smile with professional clinic whitening.",
    longDesc:
      "Professional teeth whitening is a clinical procedure performed with special agents that break down color pigments in tooth enamel. Safe and effective results are achieved with controlled methods applied at our clinic.",
    benefits: [
      "Safe whitening method applied at the clinic",
      "Provides significant shade improvement in a short time",
      "Does not damage tooth enamel",
      "Temporary sensitivity is normal, provides long-term effect",
    ],
  },
]

function TreatmentContent({ treatment }: { treatment: typeof treatments[0] }) {
  return (
    <div className="p-4 sm:p-5 lg:p-10">
      <div className="mb-4 sm:mb-6">
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
          {treatment.longDesc}
        </p>
      </div>
      <div className="mb-5 rounded-xl bg-muted/50 p-3 sm:mb-8 sm:p-6">
        <h4 className="mb-2 font-serif text-sm font-bold text-foreground sm:mb-4 sm:text-lg">
          Treatment Benefits
        </h4>
        <ul className="flex flex-col gap-2 sm:gap-3">
          {treatment.benefits.map((benefit, i) => (
            <li key={i} className="flex items-start gap-2 sm:gap-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[hsl(var(--accent))] sm:h-5 sm:w-5" />
              <span className="text-xs text-muted-foreground sm:text-base">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
        <a
          href="https://wa.me/905467639877?text=Hello%2C%0AI%20would%20like%20to%20get%20information%20about%20smile%20design%20at%20your%20Maslak%20clinic.%0ACan%20I%20get%20information%20about%20available%20times%3F%20REF%3A003"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl bg-[hsl(var(--accent))] px-4 py-2.5 text-xs font-bold text-[hsl(var(--accent-foreground))] shadow-md transition-all hover:scale-[1.02] hover:shadow-lg sm:px-6 sm:py-3.5 sm:text-sm"
        >
          <WhatsAppIcon className="h-4 w-4 sm:h-5 sm:w-5" />
          Get Info About This Treatment
        </a>
        <a
          href="tel:905467639877"
          className="flex items-center justify-center gap-2 rounded-xl border-2 border-primary px-4 py-2.5 text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:px-6 sm:py-3.5 sm:text-sm"
        >
          0546 763 98 77 Call Now
        </a>
      </div>
    </div>
  )
}

export function Treatments() {
  const [activeTab, setActiveTab] = useState(0)
  const [mobileOpen, setMobileOpen] = useState<number | null>(null)
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const activeTreatment = treatments[activeTab]

  return (
    <section id="treatments" className="bg-background py-16 lg:py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`mx-auto mb-10 max-w-2xl text-center transition-all duration-700 lg:mb-16 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Our Treatments
          </span>
          <h2 className="mb-4 font-serif text-3xl font-extrabold text-foreground lg:text-4xl">
            Personalized Smile Design Treatments
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
            Our expert medical team plans personalized smile design treatments tailored to your facial features and expectations.
          </p>
        </div>

        <div
          className={`transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          style={{ transitionDelay: "200ms" }}
        >
          {/* Mobile: Accordion */}
          <div className="flex flex-col gap-2 lg:hidden">
            {treatments.map((treatment, index) => {
              const isOpen = mobileOpen === index
              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
                >
                  <button
                    onClick={() => setMobileOpen(isOpen ? null : index)}
                    className={`flex w-full items-center gap-3 px-4 py-3.5 text-left transition-colors ${isOpen
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-foreground"
                      }`}
                  >
                    <div
                      className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${isOpen ? "bg-primary-foreground/20" : "bg-primary/10"
                        }`}
                    >
                      <treatment.icon
                        className={`h-5 w-5 ${isOpen ? "text-primary-foreground" : "text-primary"
                          }`}
                      />
                    </div>
                    <span className="flex-1 text-sm font-bold">{treatment.title}</span>
                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        } ${isOpen ? "text-primary-foreground" : "text-muted-foreground"}`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                  >
                    <div className="overflow-hidden">
                      {isOpen && <TreatmentContent treatment={treatment} />}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Desktop: Side tabs + Content */}
          <div className="hidden gap-8 lg:grid lg:grid-cols-[280px_1fr]">
            {/* Tab buttons - Desktop sidebar */}
            <div className="flex flex-col gap-1.5">
              {treatments.map((treatment, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-all ${activeTab === index
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "border border-border bg-card text-foreground hover:bg-muted"
                    }`}
                >
                  <treatment.icon
                    className={`h-5 w-5 flex-shrink-0 ${activeTab === index ? "text-primary-foreground" : "text-primary"
                      }`}
                  />
                  <span className="text-sm font-semibold">{treatment.title}</span>
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="p-6 lg:p-10">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                    <activeTreatment.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-extrabold text-foreground lg:text-3xl">
                      {activeTreatment.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-primary">
                      Trakyadent Smile Design
                    </p>
                  </div>
                </div>
                <TreatmentContent treatment={activeTreatment} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
