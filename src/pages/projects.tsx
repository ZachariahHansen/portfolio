import { FaReact, FaNodeJs, FaPython, FaDocker } from "react-icons/fa"
import { SiTypescript, SiTailwindcss, SiPostgresql, SiMongodb } from "react-icons/si"

interface Project {
  name: string
  description: string
  technologies: JSX.Element[]
  url: string
}

const projects: Project[] = [
  {
    name: "Personal Portfolio",
    description: "Modern portfolio website built with Vite, React, and TypeScript. Features a clean, responsive design with dark mode support using Tailwind CSS and Radix UI components.",
    url: "https://github.com/ZachariahHansen/portfolio",
    technologies: [
      <FaReact key="react" className="w-6 h-6" title="React" />,
      <SiTypescript key="ts" className="w-6 h-6" title="TypeScript" />,
      <SiTailwindcss key="tailwind" className="w-6 h-6" title="Tailwind CSS" />,
      <svg key="vite" className="w-6 h-6" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>Vite</title>
        <path d="M29.8836 6.146L16.7418 29.6457c-.2714.4851-.9684.488-1.2439.0052L2.0956 6.1482c-.3-.5262.1498-1.1635.746-1.057l13.156 2.3516a.7144.7144 0 00.2537-.0004l12.8808-2.3478c.5942-.1083 1.0463.5241.7515 1.0513z" fill="currentColor"/>
      </svg>
    ]
  },
  // {
  //   name: "E-commerce Platform",
  //   description: "Full-stack e-commerce application with user authentication, product management, and payment integration.",
  //   url: "https://github.com/yourusername/ecommerce",
  //   technologies: [
  //     <FaReact key="react" className="w-6 h-6" title="React" />,
  //     <FaNodeJs key="node" className="w-6 h-6" title="Node.js" />,
  //     <SiMongodb key="mongodb" className="w-6 h-6" title="MongoDB" />
  //   ]
  // },
  // {
  //   name: "Data Analytics Dashboard",
  //   description: "Interactive dashboard for visualizing and analyzing large datasets with real-time updates.",
  //   url: "https://github.com/yourusername/analytics-dashboard",
  //   technologies: [
  //     <FaPython key="python" className="w-6 h-6" title="Python" />,
  //     <SiPostgresql key="postgres" className="w-6 h-6" title="PostgreSQL" />,
  //     <FaDocker key="docker" className="w-6 h-6" title="Docker" />
  //   ]
  // }
]

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 container py-6">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex gap-4">
                {project.technologies.map((tech, techIndex) => (
                  <div key={techIndex}>{tech}</div>
                ))}
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  )
}
