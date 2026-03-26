"use client"

import React, { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Send, CheckCircle, ChevronDown } from "lucide-react"

const countryCodes = [
  { code: "+1", country: "US", flag: "🇺🇸", name: "United States", placeholder: "(555) 123-4567" },
  { code: "+90", country: "TR", flag: "🇹🇷", name: "Turkey", placeholder: "5XX XXX XX XX" },
  { code: "+49", country: "DE", flag: "🇩🇪", name: "Germany", placeholder: "1XX XXXXXXX" },
  { code: "+44", country: "GB", flag: "🇬🇧", name: "United Kingdom", placeholder: "7XXX XXXXXX" },
  { code: "+33", country: "FR", flag: "🇫🇷", name: "France", placeholder: "6 XX XX XX XX" },
  { code: "+31", country: "NL", flag: "🇳🇱", name: "Netherlands", placeholder: "6 XXXXXXXX" },
  { code: "+32", country: "BE", flag: "🇧🇪", name: "Belgium", placeholder: "4XX XX XX XX" },
  { code: "+43", country: "AT", flag: "🇦🇹", name: "Austria", placeholder: "6XX XXXXXXX" },
  { code: "+41", country: "CH", flag: "🇨🇭", name: "Switzerland", placeholder: "7X XXX XX XX" },
  { code: "+39", country: "IT", flag: "🇮🇹", name: "Italy", placeholder: "3XX XXX XXXX" },
  { code: "+34", country: "ES", flag: "🇪🇸", name: "Spain", placeholder: "6XX XXX XXX" },
  { code: "+30", country: "GR", flag: "🇬🇷", name: "Greece", placeholder: "6XX XXX XXXX" },
  { code: "+7", country: "RU", flag: "🇷🇺", name: "Russia", placeholder: "9XX XXX XX XX" },
  { code: "+380", country: "UA", flag: "🇺🇦", name: "Ukraine", placeholder: "XX XXX XX XX" },
  { code: "+48", country: "PL", flag: "🇵🇱", name: "Poland", placeholder: "XXX XXX XXX" },
  { code: "+46", country: "SE", flag: "🇸🇪", name: "Sweden", placeholder: "7X XXX XX XX" },
  { code: "+47", country: "NO", flag: "🇳🇴", name: "Norway", placeholder: "XXX XX XXX" },
  { code: "+45", country: "DK", flag: "🇩🇰", name: "Denmark", placeholder: "XX XX XX XX" },
  { code: "+358", country: "FI", flag: "🇫🇮", name: "Finland", placeholder: "XX XXX XXXX" },
  { code: "+971", country: "AE", flag: "🇦🇪", name: "UAE", placeholder: "5X XXX XXXX" },
  { code: "+966", country: "SA", flag: "🇸🇦", name: "Saudi Arabia", placeholder: "5X XXX XXXX" },
  { code: "+974", country: "QA", flag: "🇶🇦", name: "Qatar", placeholder: "XXXX XXXX" },
  { code: "+973", country: "BH", flag: "🇧🇭", name: "Bahrain", placeholder: "XXXX XXXX" },
  { code: "+965", country: "KW", flag: "🇰🇼", name: "Kuwait", placeholder: "XXXX XXXX" },
  { code: "+972", country: "IL", flag: "🇮🇱", name: "Israel", placeholder: "5X XXX XXXX" },
  { code: "+994", country: "AZ", flag: "🇦🇿", name: "Azerbaijan", placeholder: "XX XXX XX XX" },
  { code: "+995", country: "GE", flag: "🇬🇪", name: "Georgia", placeholder: "5XX XX XX XX" },
  { code: "+998", country: "UZ", flag: "🇺🇿", name: "Uzbekistan", placeholder: "XX XXX XX XX" },
  { code: "+7", country: "KZ", flag: "🇰🇿", name: "Kazakhstan", placeholder: "7XX XXX XX XX" },
  { code: "+61", country: "AU", flag: "🇦🇺", name: "Australia", placeholder: "4XX XXX XXX" },
  { code: "+81", country: "JP", flag: "🇯🇵", name: "Japan", placeholder: "XX XXXX XXXX" },
  { code: "+82", country: "KR", flag: "🇰🇷", name: "South Korea", placeholder: "XX XXXX XXXX" },
  { code: "+86", country: "CN", flag: "🇨🇳", name: "China", placeholder: "XXX XXXX XXXX" },
  { code: "+91", country: "IN", flag: "🇮🇳", name: "India", placeholder: "XXXXX XXXXX" },
  { code: "+55", country: "BR", flag: "🇧🇷", name: "Brazil", placeholder: "XX XXXXX XXXX" },
  { code: "+52", country: "MX", flag: "🇲🇽", name: "Mexico", placeholder: "XX XXXX XXXX" },
]

interface CountryCodeSelectorProps {
  selectedCode: typeof countryCodes[0]
  onSelect: (code: typeof countryCodes[0]) => void
  variant?: "light" | "dark"
}

function CountryCodeSelector({ selectedCode, onSelect, variant = "light" }: CountryCodeSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState("")
  const dropdownRef = useRef<HTMLDivElement>(null)
  const isDark = variant === "dark"

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setSearch("")
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const filteredCountries = countryCodes.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.code.includes(search) ||
      c.country.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex h-full items-center gap-1 rounded-l-xl border-2 border-r-0 px-2 py-3 text-sm transition-colors sm:gap-1.5 sm:px-3 sm:py-3.5 sm:text-base ${
          isDark
            ? "border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
            : "border-border bg-card text-foreground hover:bg-muted"
        }`}
      >
        <span className="text-base sm:text-lg">{selectedCode.flag}</span>
        <span className="font-medium">{selectedCode.code}</span>
        <ChevronDown className={`h-3.5 w-3.5 transition-transform sm:h-4 sm:w-4 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div
          className={`absolute left-0 top-full z-50 mt-1 max-h-64 w-56 overflow-hidden rounded-xl border-2 shadow-xl sm:w-64 ${
            isDark
              ? "border-primary-foreground/20 bg-[hsl(var(--primary))]"
              : "border-border bg-card"
          }`}
        >
          <div className="sticky top-0 p-2">
            <input
              type="text"
              placeholder="Search country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={`w-full rounded-lg border px-3 py-2 text-sm focus:outline-none ${
                isDark
                  ? "border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50"
                  : "border-border bg-background text-foreground placeholder:text-muted-foreground"
              }`}
            />
          </div>
          <div className="max-h-48 overflow-y-auto">
            {filteredCountries.map((country) => (
              <button
                key={`${country.country}-${country.code}`}
                type="button"
                onClick={() => {
                  onSelect(country)
                  setIsOpen(false)
                  setSearch("")
                }}
                className={`flex w-full items-center gap-3 px-3 py-2.5 text-left text-sm transition-colors ${
                  isDark
                    ? "text-primary-foreground hover:bg-primary-foreground/10"
                    : "text-foreground hover:bg-muted"
                } ${selectedCode.country === country.country ? (isDark ? "bg-primary-foreground/20" : "bg-muted") : ""}`}
              >
                <span className="text-lg">{country.flag}</span>
                <span className="flex-1 truncate">{country.name}</span>
                <span className={`text-xs ${isDark ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  {country.code}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function MiniForm({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" })
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]) // Default to Turkey
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Allow phone numbers between 4-15 digits (international standard)
    if (formData.phone.length < 4) {
      alert("Please enter a valid phone number.")
      return
    }

    setIsLoading(true)

    const fullPhoneNumber = `${selectedCountry.code}${formData.phone}`

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          phone: fullPhoneNumber,
          countryCode: selectedCountry.code,
          country: selectedCountry.name,
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", phone: "", message: "" })
        setTimeout(() => {
          router.push("/tesekkur.html")
        }, 800)
      } else {
        alert("Message could not be sent. Please try again.")
      }
    } catch (error) {
      console.error("[v0] Form submission error:", error)
      alert("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const isDark = variant === "dark"

  if (submitted) {
    return (
      <div
        className={`rounded-2xl p-8 text-center ${isDark ? "bg-[hsl(var(--accent))]/20" : "bg-[hsl(var(--accent))]/10"
          }`}
      >
        <CheckCircle className="mx-auto mb-3 h-12 w-12 text-[hsl(var(--accent))]" />
        <h3
          className={`mb-2 text-xl font-bold ${isDark ? "text-primary-foreground" : "text-foreground"
            }`}
        >
          Request Received!
        </h3>
        <p
          className={`text-sm ${isDark ? "text-primary-foreground/80" : "text-muted-foreground"
            }`}
        >
          Thank you! You are being redirected...
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="text"
        placeholder="Your Full Name"
        required
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className={`rounded-xl border-2 px-4 py-3 text-sm focus:outline-none sm:px-5 sm:py-3.5 sm:text-base ${isDark
          ? "border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-[hsl(var(--accent))]"
          : "border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-primary"
          }`}
      />
      
      {/* Phone input with country code selector */}
      <div className="flex">
        <CountryCodeSelector
          selectedCode={selectedCountry}
          onSelect={setSelectedCountry}
          variant={variant}
        />
        <input
          type="tel"
          placeholder={selectedCountry.placeholder}
          required
          value={formData.phone}
          onChange={(e) => {
            const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 15)
            setFormData({ ...formData, phone: digitsOnly })
          }}
          inputMode="numeric"
          className={`min-w-0 flex-1 rounded-r-xl border-2 border-l-0 px-4 py-3 text-sm focus:outline-none sm:px-5 sm:py-3.5 sm:text-base ${isDark
            ? "border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-[hsl(var(--accent))]"
            : "border-border bg-card text-foreground placeholder:text-muted-foreground/70 focus:border-primary"
            }`}
        />
      </div>
      
      <textarea
        placeholder="Your Message (Optional)"
        rows={2}
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className={`resize-none rounded-xl border-2 px-4 py-3 text-sm focus:outline-none sm:px-5 sm:py-3.5 sm:text-base ${isDark
          ? "border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-[hsl(var(--accent))]"
          : "border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-primary"
          }`}
      />
      <button
        type="submit"
        disabled={isLoading}
        className="flex items-center justify-center gap-2 rounded-xl bg-[hsl(var(--accent))] px-6 py-3.5 text-sm font-bold text-[hsl(var(--accent-foreground))] shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50 sm:text-base"
      >
        <Send className="h-5 w-5" />
        {isLoading ? "Sending..." : "Get Info Now!"}
      </button>
    </form>
  )
}

export { MiniForm }

export function ContactForm() {
  return (
    <section id="contact" className="bg-primary py-14 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Video / visual side */}
          <div className="relative overflow-hidden rounded-2xl">
            <div className="aspect-video w-full overflow-hidden rounded-2xl bg-foreground/10">
              <iframe
                src="https://www.youtube.com/embed/4x9KV17wKlE"
                title="Free Your Smile!"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>

          </div>

          {/* Form */}
          <div>
            <h2 className="mb-2 font-serif text-2xl font-extrabold text-primary-foreground sm:text-3xl lg:text-4xl">
              Redesign Your Smile.
            </h2>
            <p className="mb-6 text-base text-primary-foreground/80 sm:mb-8 sm:text-lg">
              Get detailed information about smile design from our expert team.
            </p>
            <MiniForm variant="dark" />
          </div>
        </div>
      </div>
    </section>
  )
}
