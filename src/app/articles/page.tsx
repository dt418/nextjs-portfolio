import Link from "next/link"
import { ArrowUpRight } from 'lucide-react'

const articles = [
  {
    title: "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling",
    summary: "Learn how to create a custom hook for form validation in ReactJS that's reusable across components.",
    time: "9 min read",
    link: "/articles/form-validation-in-reactjs",
    date: "March 22, 2023"
  },
  {
    title: "Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers",
    summary: "Implement smooth scrolling in React with various methods. Perfect for improving user experience.",
    time: "7 min read",
    link: "/articles/silky-smooth-scrolling-in-reactjs",
    date: "March 15, 2023"
  },
  {
    title: "Creating An Efficient Modal Component In React Using Hooks And Portals",
    summary: "Build a reusable modal component in React that's both accessible and efficient.",
    time: "10 min read",
    link: "/articles/creating-an-efficient-modal-component-in-react-using-hooks-and-portals",
    date: "March 8, 2023"
  }
]

export default function Articles() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-7xl font-bold text-center mb-16">
        Words Can Change The World!
      </h1>
      
      <div className="max-w-3xl mx-auto">
        {articles.map((article, index) => (
          <div key={article.link}>
            <article className="mb-8 group">
              <Link href={article.link} className="block space-y-4">
                <div className="flex items-center justify-between text-gray-500 text-sm">
                  <span>{article.date}</span>
                  <span>{article.time}</span>
                </div>
                <h2 className="text-2xl font-bold group-hover:underline">{article.title}</h2>
                <p className="text-gray-600">{article.summary}</p>
                <div className="inline-flex items-center text-sm font-medium hover:underline">
                  Read More <ArrowUpRight className="ml-1 w-4 h-4" />
                </div>
              </Link>
            </article>
            {index < articles.length - 1 && (
              <div className="border-t border-gray-200 my-8" />
            )}
          </div>
        ))}
      </div>
    </main>
  )
}

