import { FaAws, FaMicrosoft } from "react-icons/fa";

const certifications = [
    {
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        icon: <FaAws className="text-indigo-600 text-3xl" />,
        date: "2024",
        img: "/certifications/cloud.png",
    },
    {
        title: "AWS AI Practitioner (Early adopter)",
        issuer: "Amazon Web Services",
        icon: <FaAws className="text-orange-500 text-3xl" />,
        date: "2024",
        img: "/certifications/aws-certified-ai-practitioner-early-adopter.png",
    },
    {
        title: "AWS Certified Solutions Architect - Associate",
        issuer: "Amazon Web Services",
        icon: <FaAws className="text-yellow-500 text-3xl" />,
        date: "2024",
        img: "/certifications/SA.png",
    },
    {
        title: "AWS Certified Machine Learning - Associate",
        issuer: "Amazon Web Services",
        icon: <FaAws className="text-yellow-500 text-3xl" />,
        date: "2024",
        img: "/certifications/ML.png",
    },
    {
        title: "Azure AI Engineer Associate",
        issuer: "Microsoft Azure",
        icon: <FaMicrosoft className="text-blue-600 text-3xl" />,
        date: "2025",
        img: "/certifications/azure-ai.png",
    },
];


export const Certifications = () => {
  return (
    <section
      id="certifications"
      className="min-h-screen px-6 py-16 bg-opacity-50 backdrop-blur-md"
    >
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Certifications
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white bg-opacity-80 shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300"
          >
            <div className="mb-3">
                <img className="w-20 h-20 md:w-40 md:h-40 object-contain" src={cert.img} alt={cert.title} />
            </div>
            <h3 className="text-lg font-semibold text-[#1e3a8a] mb-1">
              {cert.title}
            </h3>
            <p className="text-sm text-gray-600">{cert.issuer}</p>
            <span className="mt-2 inline-block text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
              {cert.date}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

