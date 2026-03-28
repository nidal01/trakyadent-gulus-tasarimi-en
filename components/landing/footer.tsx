"use client"

import React from "react"
import Image from "next/image"
import { Phone, MapPin, Instagram, Youtube } from "lucide-react"
import { WhatsAppIcon } from "./whatsapp-icon"

export function Footer() {
  return (
    <footer className="bg-[hsl(var(--topbar))] pb-16 text-[hsl(var(--topbar-foreground))] lg:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/trakyadent-logo.png"
                alt="Trakyadent Logo"
                width={160}
                height={44}
                className="h-10 w-auto brightness-0 invert object-contain"
                style={{ width: "auto" }}
              />
            </div>
            <p className="mb-4 text-sm leading-relaxed text-[hsl(var(--topbar-foreground))]/70">
              Your trusted partner in dental health with over 36 years of experience.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/trakyadent/" },
                { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@trakyadent" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-[hsl(var(--topbar-foreground))]/10 transition-colors hover:bg-primary"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 font-serif text-base font-bold">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Treatments", href: "#treatments" },
                { label: "Our Clinic", href: "#clinics" },
                { label: "Why Trakyadent", href: "#why-trakyadent" },
                { label: "Our Team", href: "#team" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[hsl(var(--topbar-foreground))]/70 transition-colors hover:text-[hsl(var(--accent))]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-serif text-base font-bold">Contact</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2 text-sm text-[hsl(var(--topbar-foreground))]/70">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:02129126867" className="transition-colors hover:text-[hsl(var(--topbar-foreground))]">
                  0212 912 68 67
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-[hsl(var(--topbar-foreground))]/70">
                <WhatsAppIcon className="h-4 w-4 text-[hsl(var(--accent))]" />
                <a
                  href="https://wa.me/905432555998?text=Hello%2C%0AI%20would%20like%20to%20book%20an%20appointment%20at%20your%20Maslak%20clinic.%0ACan%20I%20get%20information%20about%20available%20times%3F%20REF%3A003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[hsl(var(--topbar-foreground))]"
                >
                  0541 726 52 12
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-[hsl(var(--topbar-foreground))]/70">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>Maslak Mah. Buyukdere Cad. Nurol Plaza, No: 255, Inner Door Z01 Sariyer/Istanbul</span>
              </li>
            </ul>
          </div>

          {/* Working hours */}
          <div>
            <h4 className="mb-4 font-serif text-base font-bold">Working Hours</h4>
            <ul className="flex flex-col gap-2 text-sm text-[hsl(var(--topbar-foreground))]/70">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>09:30 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>09:30 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
            <a
              href="https://wa.me/905432555998?text=Hello%2C%0AI%20would%20like%20to%20book%20an%20appointment%20at%20your%20Maslak%20clinic.%0ACan%20I%20get%20information%20about%20available%20times%3F%20REF%3A003"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-[hsl(var(--accent))] px-4 py-2.5 text-sm font-bold text-[hsl(var(--accent-foreground))] transition-transform hover:scale-105"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Book Appointment Now
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[hsl(var(--topbar-foreground))]/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-4 text-center text-xs text-[hsl(var(--topbar-foreground))]/50 md:flex-row md:justify-between">
          <p>
            &copy; 2026 Trakyadent Oral and Dental Health. All rights reserved.
          </p>

          <p className="max-w-lg font-medium text-[hsl(var(--topbar-foreground))]/60">
            Page content is for informational purposes only. Please consult your doctor for diagnosis and treatment.
          </p>

          <p>
            Software and Design:{" "}
            <a
              href="https://www.needsolutions.com.tr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold hover:underline"
            >
              Need Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
