"use client";
import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

const TriangleLogo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10L90 90H10L50 10Z" fill="#2B4D66" />
    <defs>
      <linearGradient id="gradient" x1="50" y1="30" x2="50" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E6F3F9" />
        <stop offset="1" stopColor="#74B589" />
      </linearGradient>
    </defs>
    <path d="M50 30L75 80H25L50 30Z" fill="url(#gradient)" />
  </svg>
)

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F9FAFB] font-sans">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b border-[#E6F3F9]">
        <Link href="/" className="flex items-center space-x-2">
          <TriangleLogo className="w-10 h-10" />
          <span className="text-2xl font-bold text-[#2B4D66]">Connect</span>
        </Link>
        <nav className="flex space-x-4">
          <Link href="#about" className="text-sm font-medium text-[#2B4D66] hover:text-[#82C29D]">About</Link>
          <Link href="#mission" className="text-sm font-medium text-[#2B4D66] hover:text-[#82C29D]">Mission</Link>
          <Link href="#join" className="text-sm font-medium text-[#2B4D66] hover:text-[#82C29D]">Join Us</Link>
        </nav>
      </header>

      <main className="flex-grow">
        <section className="py-20 text-center bg-gradient-to-br from-[#F9FAFB] via-[#E6F3F9] to-[#74B589]/10">
          <TriangleLogo className="w-32 h-32 mx-auto mb-8 animate-pulse" />
          <h1 className="text-5xl font-bold text-[#2B4D66] mb-4">Connect for Humanity</h1>
          <p className="text-xl text-[#2B4D66] max-w-2xl mx-auto mb-8">
            We're creating a global network of value creators, transcending borders and cultures to uplift all of humanity.
          </p>
          <Button className="bg-[#82C29D] text-white hover:bg-[#82C29D]/90">Join the Movement</Button>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#2B4D66] mb-6">Our Vision</h2>
            <p className="text-lg text-[#2B4D66] mb-6">
              We envision a world where every individual is empowered to create value, where connections transcend boundaries, and where collective growth drives humanity forward.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Global Connectivity", description: "Bridging cultures and communities worldwide" },
                { title: "Value Creation", description: "Empowering individuals to contribute meaningfully" },
                { title: "Collective Growth", description: "Fostering progress that benefits all of humanity" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#2B4D66] rounded-full flex items-center justify-center mx-auto mb-4">
                    <TriangleLogo className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[#2B4D66]">{item.title}</h3>
                  <p className="text-[#2B4D66]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="mission" className="py-20 bg-[#2B4D66] text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl mb-8">
              To create a global ecosystem that empowers every individual to contribute their unique value, fostering a world of unlimited potential and shared prosperity.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">How We Connect</h3>
                <ul className="text-left list-disc list-inside">
                  <li>Decentralized platforms for collaboration</li>
                  <li>Cross-cultural exchange programs</li>
                  <li>Open-source knowledge sharing</li>
                  <li>Global hackathons and innovation challenges</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Our Impact</h3>
                <ul className="text-left list-disc list-inside">
                  <li>Empowering local communities</li>
                  <li>Bridging the global digital divide</li>
                  <li>Fostering sustainable innovation</li>
                  <li>Promoting equality and inclusivity</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="join" className="py-20 bg-gradient-to-br from-[#F9FAFB] via-[#E6F3F9] to-[#74B589]/10">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#2B4D66] mb-6">Join the Movement</h2>
            <p className="text-xl text-[#2B4D66] mb-8">
              Be part of a global community dedicated to creating value and fostering connections across the world.
            </p>
            <form className="max-w-md mx-auto" onSubmit={(e) => { e.preventDefault(); console.log('Form submitted'); }}>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 mb-4 border border-[#E6F3F9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#82C29D]"
                required
              />
              <Button type="submit" className="w-full bg-[#82C29D] text-white hover:bg-[#82C29D]/90">
                Stay Connected
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#F9FAFB] py-8 border-t border-[#E6F3F9]">
        <div className="max-w-4xl mx-auto px-4 text-center text-[#2B4D66]">
          <p>&copy; {new Date().getFullYear()} Connect for Humanity. All rights reserved.</p>
          <div className="mt-4">
            <Link href="/privacy" className="text-sm hover:underline">Privacy Policy</Link>
            <span className="mx-2">|</span>
            <Link href="/terms" className="text-sm hover:underline">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}