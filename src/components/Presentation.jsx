import { FiDownload, FiMail, FiUser } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import RotatingText from "../textAnimations/RotatingText/RotatingText";

export const Presentation = () => {
  return (
    <div className="min-h-screen flex flex-col items-center w-full justify-center gap-5">
      <div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-center text-[#1e3a8a] tracking-wide">
          EMMANUEL ANGUIANO
        </h1>
      </div>
      <div className="flex items-center text-2xl sm:text-3xl mt-4">
        <span className="mr-2 text-gray-700">I'm a</span>
        <RotatingText
          texts={["AI", "Frontend", "Backend", "Fullstack"]}
          mainClassName="px-3 py-1 bg-cyan-400 text-black rounded-lg shadow-md"
          staggerFrom="last"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
        <span className="ml-2 text-gray-700">Developer</span>
      </div>
      <div className="flex gap-6 mt-4">
        <a
          href="https://github.com/emmanuelanguiano12"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-black hover:scale-110 transition-transform text-3xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/emmanuel-anguiano-058021291/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-900 hover:scale-110 transition-transform text-3xl"
        >
          <FaLinkedin />
        </a>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <a href="/Full-Stack-Dev-Emmanuel-Anguiano.pdf" download>
          <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow hover:cursor-pointer">
            <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white flex items-center justify-center gap-2">
              <FiDownload /> Download my CV
            </span>
          </button>
        </a>

        <a href="mailto:emmanuelanguiano120502@gmail.com">
          <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow hover:cursor-pointer">
            <div className="absolute inset-0 w-3 bg-blue-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white flex items-center justify-center gap-2">
              <FiMail /> Send me an email
            </span>
          </button>
        </a>

        <a href="#about">
          <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow hover:cursor-pointer">
            <div className="absolute inset-0 w-3 bg-gray-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white flex items-center justify-center gap-2">
              <FiUser /> More about me
            </span>
          </button>
        </a>
      </div>
    </div>
  );
};
