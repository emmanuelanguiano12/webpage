import { FaArrowRight, FaAws, FaCloud, FaLaptopCode, FaPython } from "react-icons/fa"
import { SiNextdotjs,  } from "react-icons/si"
import { VscAzure } from "react-icons/vsc"

export const Experience = () => {
  return (
    <section id="experience" className="min-h-screen px-6 py-16 bg-opacity-50 backdrop-blur-md">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Experience</h2>

        <div className="max-w-4xl mx-auto space-y-10">
            <div className="relative border-l-4 border-[#477DFF] pl-6">
            <div className="absolute top-0 left-[-10px] w-4 h-4 bg-[#477DFF] rounded-full"></div>

            <h3 className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
            <FaLaptopCode className="text-[#1e3a8a]" />
                Mxmart Solutions
            </h3>
            <p className="text-sm text-gray-500 mb-4">Full Stack & AI Developer · Dec 2022 - Present</p>
                <ul className="list-disc list-inside text-gray-700 text-base space-y-2">
                    <li className="flex items-center gap-2">
                        <SiNextdotjs className="text-gray-800 hover:scale-110" /> Developed apps with <strong>Next.js</strong>, <strong>React</strong>, and <strong>TypeScript</strong>.
                    </li>
                    <li className="flex items-center gap-2">
                        <FaPython className="text-yellow-600 hover:scale-110" /> Integrated <strong>AWS and Azure AI services</strong> using python.
                    </li>
                    <li className="flex items-center gap-2">
                        <FaAws className="text-orange-500 hover:scale-110" /> Used <strong>AWS (S3, Textract, DynamoDB)</strong> and <strong>API Gateway</strong>.
                    </li>
                    <li className="flex items-center gap-2">
                        <VscAzure className="text-blue-500 hover:scale-110" /> Integrated with <strong>Azure Functions</strong> and <strong>Document Intelligence</strong>.
                    </li>
                    <li className="flex items-center gap-2">
                        <FaCloud className="text-purple-600 hover:scale-110" /> Worked across <strong>multi-cloud environments</strong>.
                    </li>
                </ul>

                <div className="mt-6 pl-4 border-l-2 border-gray-300">
                    <h4 className="text-lg font-semibold mb-2 text-[#477DFF]">Highlights</h4>
                    <ul className="space-y-2 text-gray-800">
                    <li className="flex items-start gap-2">
                        <FaArrowRight className="mt-1 text-[#1e3a8a]" />
                        <span>
                        <strong>Document Extractor:</strong> application that uses Document Intelligence Gen AI to extract information.
                        </span>
                    </li>
                    <li className="flex items-start gap-2">
                        <FaArrowRight className="mt-1 text-[#1e3a8a]" />
                        <span>
                        <strong>AI Admissions Bot:</strong> chatbot that helps students to select the better option to what study, using <strong>Bedrock Agents</strong>, <strong>Lambda</strong> and <strong>DynamoDB</strong>.
                        </span>
                    </li>
                    <li className="flex items-start gap-2">
                        <FaArrowRight className="mt-1 text-[#1e3a8a]" />
                        <span>
                        <strong>Differents frontend and backend projects:</strong>
                        </span>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}
