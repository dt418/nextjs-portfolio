import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: "Crypto Screener Application",
    description: "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.",
    image: "/assets/images/projects/project-1.webp",
    link: "/projects/crypto-screener-application",
    github: "https://github.com/username/crypto-screener",
    type: "Featured Project"
  },
  {
    title: "React Portfolio Website",
    description: "A professional portfolio website using React JS, Framer-motion and Styled-components.",
    image: "/assets/images/projects/project-2.webp",
    link: "/projects/react-portfolio-website",
    github: "https://github.com/username/react-portfolio",
    type: "Website Template"
  },
  {
    title: "Fashion Studio Website",
    description: "A stunning fashion studio website with unique animations and layout.",
    image: "/assets/images/projects/project-3.webp",
    link: "/projects/fashion-studio-website",
    github: "https://github.com/username/fashion-studio",
    type: "Featured Project"
  }
]

export default function Projects() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-7xl font-bold text-center mb-16">
        Imagination Trumps Knowledge!
      </h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <article key={project.title} className="border rounded-xl overflow-hidden group">
            <div className="relative aspect-video">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">{project.type}</div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex gap-4">
                <Link
                  href={project.link}
                  className="inline-flex items-center text-sm font-medium hover:underline"
                >
                  Visit <ArrowUpRight className="ml-1 w-4 h-4" />
                </Link>
                <Link
                  href={project.github}
                  className="inline-flex items-center text-sm font-medium hover:underline"
                >
                  Github <ArrowUpRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}

