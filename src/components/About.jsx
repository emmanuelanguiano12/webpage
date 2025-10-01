import { Stack } from "./Stack"

export const About = () => {
  return (
    <section id="about" className="min-h-screen px-6 md:px-24 py-16">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            <div className="flex-1">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">About Me</h2>
            <p className="text-lg text-gray-800 leading-7 mb-4">
                Hi! My name is <span className="font-bold">Emmanuel Anguiano</span>. I'm a Fullstack Developer, currently working at <span className="font-semibold">Vass Company</span> as an AI Developer.
            </p>
            <p className="text-lg text-gray-800 leading-7 mb-4">
                I have a degree in <span className="font-semibold">Engineering of Internet Technologies</span> from the University of Colima. I'm experienced in <span className="text-red-600 font-bold">backend, AI, frontend development, and multicloud technologies</span>.
            </p>
            <p className="text-lg italic text-gray-600">
                Building powerful web & AI solutions across frontend, backend, and cloud.
            </p>
            </div>

            {/* Imagen */}
            <div className="flex-1 flex justify-center">
            <img
                src="/imagen-selfie.png"
                alt="Emmanuel selfie"
                className="w-60 h-60 md:w-72 md:h-72 object-cover rounded-2xl shadow-xl border-4 border-white"
            />
            </div>
        </div>

        <Stack />
    </section>

  )
}
