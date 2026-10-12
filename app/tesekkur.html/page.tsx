"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function ThankYouPage() {
  const router = useRouter()

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/")
    }, 5000)

    return () => clearTimeout(timeout)
  }, [router])

  return (
    <main className="flex min-h-screen items-center justify-center bg-[hsl(210,40%,12%)] px-4 py-16 text-center">
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-T77W58QS"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1083939007688862&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
      <div className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-2xl sm:p-12">
        <h1 className="mb-4 text-3xl font-extrabold text-[hsl(210,40%,12%)] sm:text-4xl">
          Thank You!
        </h1>
        <p className="mb-3 text-base text-slate-600 sm:text-lg">
          Your form has been submitted successfully. Our team will contact you shortly.
        </p>
        
        <Link
          href="/"
          className="inline-flex items-center rounded-xl bg-[hsl(200,90%,45%)] px-6 py-3 font-semibold text-white transition hover:opacity-90"
        >
          Back to Home
        </Link>
      </div>
    </main>
  )
}
