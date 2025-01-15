import Image from "next/image"

export default function About() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-7xl font-bold text-center mb-16">
        Passion Fuels Purpose!
      </h1>
      
      <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">BIOGRAPHY</h2>
            <p className="text-gray-600">
              Hi, I&apos;m CodeBucks, a web developer and UI/UX designer with a passion
              for creating beautiful, functional, and user-centered digital experiences.
              With 4 years of experience in the field, I am always looking for new and
              innovative ways to bring my clients&apos; visions to life.
            </p>
          </div>
          
          <p className="text-gray-600">
            I believe that design is about more than just making things look pretty
            – it&apos;s about solving problems and creating intuitive, enjoyable
            experiences for users.
          </p>
          
          <p className="text-gray-600">
            Whether I&apos;m working on a website, mobile app, or other digital product,
            I bring my commitment to design excellence and user-centered thinking to
            every project I work on. I look forward to the opportunity to bring my
            skills and passion to your next project.
          </p>
        </div>
        
        <div className="relative">
          <div className="relative w-full max-w-[600px] mx-auto aspect-square rounded-2xl p-4 bg-white shadow-xl">
            <Image
              src="https://sjc.microlink.io/49LtNSK_Drn9RobO6D_QRi6kKmzuEShwBhMUljR7rnZaofd5QGbH7bPpOYg3Gm16oVdxNEymAzqwhqsae8c23A.jpeg"
              alt="Portrait"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="space-y-2">
          <span className="text-7xl font-bold">4+</span>
          <h3 className="text-xl text-gray-600">Satisfied Clients</h3>
        </div>
        <div className="space-y-2">
          <span className="text-7xl font-bold">5+</span>
          <h3 className="text-xl text-gray-600">Projects Completed</h3>
        </div>
        <div className="space-y-2">
          <span className="text-7xl font-bold">0+</span>
          <h3 className="text-xl text-gray-600">Years Of Experience</h3>
        </div>
      </div>
    </main>
  )
}

