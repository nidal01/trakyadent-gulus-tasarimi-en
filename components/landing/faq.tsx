"use client"

import React, { useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { WhatsAppIcon } from "./whatsapp-icon"

const faqs = [
  {
    q: "How long does smile design take?",
    a: "The duration of smile design varies depending on the procedures to be performed. If only veneers are to be applied, it can usually be completed within 5-7 days. If additional surgical procedures such as implants are required, the process may take longer.",
  },
  {
    q: "Is smile design permanent?",
    a: "Although it varies depending on the material applied, it can be used aesthetically and functionally for many years with regular care and check-ups.",
  },
  {
    q: "Is zirconium or Emax better?",
    a: "Emax veneers are more natural and light-transmitting for front tooth aesthetics. Zirconium provides advantages in areas that require durability. Which material is suitable is determined on a case-by-case basis.",
  },
  {
    q: "Does porcelain veneer damage teeth?",
    a: "The application is done in a controlled and measured way. The aim is to improve aesthetics while protecting the tooth. It is a safe procedure with expert planning.",
  },
  {
    q: "Is implant treatment painful?",
    a: "Implant procedure is performed under local anesthesia and no pain is felt during the procedure. There may be mild sensitivity afterwards but it is usually under control.",
  },
  {
    q: "How long does an implant last?",
    a: "With proper planning and regular care, implants can be used for many years without problems.",
  },
  {
    q: "Does teeth whitening damage teeth?",
    a: "Whitening procedures applied in a professional clinical environment do not damage tooth enamel. Temporary sensitivity may occur.",
  },
  {
    q: "Are Hollywood Smile and smile design the same?",
    a: "Hollywood Smile refers to a whiter and more eye-catching aesthetic transformation. Smile design is a more personalized aesthetic work planned according to facial proportions.",
  },
  {
    q: "Can teeth with veneers decay?",
    a: "The tooth under the veneer may be at risk if good oral care is not maintained. Regular check-ups and hygiene are very important.",
  },
  {
    q: "Can everyone have smile design?",
    a: "It can be applied to most people whose general oral health is suitable. First, any gum problems or missing teeth are treated, then aesthetic planning is done.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center lg:mb-16">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Frequently Asked Questions
          </span>
          <h2 className="mb-4 font-serif text-3xl font-extrabold text-foreground lg:text-4xl">
            Common Questions About Smile Design and Aesthetic Treatments
          </h2>
          <p className="text-lg text-muted-foreground">
            We have answered the most frequently asked questions about aesthetic dentistry, implants and veneer treatments for you.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[1fr_380px] lg:gap-12">
          {/* FAQ Accordion */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-border bg-card transition-all"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                >
                  <span className="font-serif text-sm font-bold text-foreground sm:text-base">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-primary transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                      }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0"
                    }`}
                >
                  <p className="border-t border-border px-5 py-4 text-sm leading-relaxed text-muted-foreground sm:px-6 sm:py-5 sm:text-base">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Visual side panel */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              {/* Image */}
              <div className="relative mb-6 aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/closeup-image-young-woman-with-flowers-vector.jpg"
                  alt="Smile design expert"
                  fill
                  sizes="380px"
                  className="object-cover"
                />
              </div>

              {/* CTA card */}
              <div className="rounded-2xl bg-primary p-6 text-center">
                <h3 className="mb-2 font-serif text-lg font-extrabold text-primary-foreground">
                  Do You Have Other Questions?
                </h3>
                <p className="mb-4 text-sm text-primary-foreground/80">
                  Contact our smile design team right away.
                </p>
                <a
                  href="https://wa.me/905467639877?text=Hello%2C%0AI%20would%20like%20to%20get%20information%20about%20smile%20design%20at%20your%20Maslak%20clinic.%0ACan%20I%20get%20information%20about%20available%20times%3F%20REF%3A003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[hsl(var(--accent))] px-6 py-3 text-sm font-bold text-[hsl(var(--accent-foreground))] shadow-lg transition-transform hover:scale-105"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Ask via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile CTA after FAQ */}
        <div className="mt-10 rounded-2xl bg-primary p-8 text-center lg:hidden">
          <h3 className="mb-3 font-serif text-2xl font-extrabold text-primary-foreground">
            Do You Have Other Questions?
          </h3>
          <p className="mb-6 text-primary-foreground/80">
            Contact our smile design team right away.
          </p>
          <a
            href="https://wa.me/905467639877?text=Hello%2C%0AI%20would%20like%20to%20get%20information%20about%20smile%20design%20at%20your%20Maslak%20clinic.%0ACan%20I%20get%20information%20about%20available%20times%3F%20REF%3A003"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[hsl(var(--accent))] px-8 py-4 text-base font-bold text-[hsl(var(--accent-foreground))] shadow-lg transition-transform hover:scale-105"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Ask via WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
