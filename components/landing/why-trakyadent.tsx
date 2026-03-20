"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Users, Clock, ThumbsUp, Building2, Play } from "lucide-react"

const stats = [
  {
    icon: Users,
    title: "Expert Team in Aesthetic Dentistry",
    desc: "Our experienced doctors plan personalized smile designs tailored to your facial features and expectations.",
  },
  {
    icon: Clock,
    title: "36 Years of Experience",
    desc: "Serving thousands of patients with confidence for over 36 years.",
  },
  {
    icon: ThumbsUp,
    title: "High Patient Satisfaction",
    desc: "High satisfaction rate with our patient-centered approach.",
  },
  {
    icon: Building2,
    title: "4 Modern Clinics",
    desc: "We make your treatment process predictable and comfortable with advanced digital measurement and design systems.",
  },
]

export function WhyTrakyadent() {
  const [visible, setVisible] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
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

  return (
    <section
      id="why-trakyadent"
      className="bg-background py-16 lg:py-24"
      ref={ref}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Video */}
          <div
            className={`relative overflow-hidden rounded-2xl transition-all duration-700 ${visible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
              }`}
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-muted">
              
                <iframe
                  src="https://www.youtube.com/embed/gGiEMZudaD4?autoplay=1"
                  title="Trakyadent Introduction"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-700 ${visible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}
            style={{ transitionDelay: "200ms" }}
          >
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              Why Trakyadent?
            </span>
            <h2 className="mb-2 font-serif text-3xl font-extrabold text-foreground lg:text-4xl">
              The Right Address for Your Smile: Maslak Trakyadent
            </h2>
            <p className="mb-6 text-lg font-medium text-primary">
              Experience, Aesthetics and Trust Combined
            </p>

            <div className="mb-6">
              <h3 className="mb-3 font-serif text-xl font-bold text-foreground">
                Personalized Perfect Smiles
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                Trakyadent Oral and Dental Health provides high-standard services in aesthetic dentistry with over 36 years of experience. Our expert medical team designs natural and confident smiles with digital planning tailored to your facial features and expectations.
              </p>
            </div>

            <div>
              <h3 className="mb-3 font-serif text-xl font-bold text-foreground">
                We Have Redesigned Thousands of Smiles
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                With our modern technology, multi-branch structure and patient satisfaction-focused approach, we manage your aesthetic transformation process with confidence.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg ${visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
                }`}
              style={{ transitionDelay: `${(index + 2) * 150}ms` }}
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary">
                <stat.icon className="h-8 w-8 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <h4 className="mb-2 font-serif text-lg font-bold text-foreground">
                {stat.title}
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
