import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from 'lucide-react'

export default function Home() {
  return (
    <main className="container mx-auto px-4 mt-20">
      <div className="flex items-center justify-between">
        <div className="relative w-[600px] h-[600px]">
          <Image
            src="https://sjc.microlink.io/dWsXVQqXZTffDeQd73ji-TgZHHxcFo95TZu9C_nJNvP1X7RL4Ol8Ntm9JpV8pa8GxPvZMRUmA94uRNw-t2CpTA.jpeg"
            alt="Creative portrait"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="max-w-xl">
          <h1 className="text-6xl font-bold leading-tight mb-6">
            Turning Vision Into Reality With Code And Design.
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
            Explore my latest projects and articles, showcasing my expertise in React.js and web development.
          </p>
          <div className="flex gap-4">
            <Link
              href="/resume"
              className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
            >
              Resume <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 text-black hover:underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="fixed bottom-8 left-8">
        <div className="relative w-24 h-24 animate-spin-slow">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full border-2 border-black flex items-center justify-center">
              <span className="text-sm font-medium">Hire Me</span>
            </div>
          </div>
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <path
              id="circlePath"
              d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
            />
            <text fontSize="13.5">
              <textPath href="#circlePath">Web Developer • UI/UX Designer • </textPath>
            </text>
          </svg>
        </div>
      </div>
      <div className="fixed bottom-8 right-8">
        <div className="w-16 h-16">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
            <path d="M9 18h6" />
            <path d="M10 22h4" />
          </svg>
        </div>
      </div>
    </main>
  )
}

