"use client"

import { StickyHeader } from "./top-bar"
import { HeroSlider } from "./hero-slider"
import { ContactForm } from "./contact-form"
import { Treatments } from "./treatments"
import { InlineCTA } from "./inline-cta"
import { Clinics } from "./clinics"
import { WhyTrakyadent } from "./why-trakyadent"
import { DoctorTeam } from "./doctor-team"
import { FAQ } from "./faq"
import { CTABanner } from "./cta-banner"
import { Footer } from "./footer"
import { StickyButtons } from "./sticky-buttons"


export function LandingPage() {
  return (
    <>
      <StickyHeader />
      <main className="pb-16 lg:pb-0">
        <HeroSlider />
        <ContactForm />
        <Treatments />
        <Clinics />
        <WhyTrakyadent />
        <InlineCTA
          title="Book Your Appointment"
          subtitle="With 36 years of experience and aesthetic expertise, let us create your personalized smile plan at our Maslak clinic."
          image="/images/skin-care-woman-with-beauty-face-touching-healthy-facial-skin-portrait-beautiful-smiling-girl-model.jpg"
          imageAlt="Trakyadent Maslak Clinic"
          reversed
        />
        <DoctorTeam />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
      <StickyButtons />
    </>
  )
}
