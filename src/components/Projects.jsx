import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "AI Chatbot",
    description:
      "AI-powered chatbot built with React and AWS Bedrock. Helps users interact naturally with custom assistant logic.",
    tags: ["React", "AWS Bedrock", "Tailwind"],
    github: "https://github.com/emmanuelanguiano12/chatbot-general",
    live: "https://prompt-pilot-teal.vercel.app/",
  },
  {
    title: "Github issues app",
    description:
      "Web app built with React and Vite to display GitHub issues. Uses TanStack Query for data caching, pagination, and loading state management.",
    tags: ["Tanstack Query", "Vite", "TypeScript"],
    github: "https://github.com/emmanuelanguiano12/tanstack-query-github-issues",
    live: "https://tanstack-query-github-issues.vercel.app/",
  },
  {
    title: "URL Shortener App",
    description:
      "A simple and elegant URL shortener built with React, Firebase v9, and Vite. Includes auth and analytics.",
    tags: ["React", "Firebase", "Vite"],
    github: "https://github.com/emmanuelanguiano12/react-firebase9-router6-vite",
    live: "https://react-login-2023.web.app/",
  },
  {
    title: "Realtime Chat App",
    description:
      "Real-time chat application using Firebase. Supports authentication and responsive UI for modern messaging.",
    tags: ["Firebase", "React", "Tailwind"],
    github: "https://github.com/emmanuelanguiano12/RealTimeChat-Firebase",
    live: "https://main--coruscating-phoenix-06aa22.netlify.app/",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-16 bg-opacity-50 backdrop-blur-md"
    >
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white bg-opacity-80 rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold text-[#1e3a8a] mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4 mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#477DFF] font-medium flex items-center gap-2 hover:underline"
              >
                <FaGithub />
                GitHub
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 font-medium flex items-center gap-2 hover:underline"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
