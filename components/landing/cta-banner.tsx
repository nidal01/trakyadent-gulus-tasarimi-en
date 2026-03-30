"use client"

import React from "react"
import { Phone, Send } from "lucide-react"
import { WhatsAppIcon } from "./whatsapp-icon"

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 lg:py-20">
      {/* Decorative circles */}
      <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[hsl(var(--accent))]/10" />
      <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-primary-foreground/5" />

      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-4 font-serif text-3xl font-extrabold text-primary-foreground lg:text-5xl">
          Take the First Step for Your Dream Smile
        </h2>
        <p className="mb-8 text-lg text-primary-foreground/80 lg:text-xl">
          With 36 years of experience and aesthetic expertise, let us create your personalized smile plan at our Maslak clinic.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/905417265212?text=Hello%2C%0AI%20would%20like%20to%20get%20information%20about%20smile%20design%20at%20your%20Maslak%20clinic.%0ACan%20I%20get%20information%20about%20available%20times%3F%20REF%3A003"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-[hsl(var(--accent))] px-8 py-4 text-base font-bold text-[hsl(var(--accent-foreground))] shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Get Info via WhatsApp
          </a>
          <a
            href="tel:02129126867"
            className="flex items-center gap-2 rounded-xl border-2 border-primary-foreground/30 bg-primary-foreground/10 px-8 py-4 text-base font-bold text-primary-foreground backdrop-blur-sm transition-all hover:border-primary-foreground/50 hover:bg-primary-foreground/20"
          >
            <Phone className="h-5 w-5" />
            0212 912 68 67
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-xl border-2 border-primary-foreground/30 bg-primary-foreground/10 px-8 py-4 text-base font-bold text-primary-foreground backdrop-blur-sm transition-all hover:border-primary-foreground/50 hover:bg-primary-foreground/20"
          >
            <Send className="h-5 w-5" />
            Fill Form
          </a>
        </div>
      </div>
    </section>
  )
}
