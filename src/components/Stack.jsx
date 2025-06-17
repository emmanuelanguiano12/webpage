export const Stack = () => {
  const frontEndStack = [
    {
      img: "/front/nextjs-icon-dark-background.png",
      title: "Next",
    },
    {
      img: "/front/react-js-img.png",
      title: "React",
    },
    {
      img: "/front/Vitejs-logo.svg.png",
      title: "Vite",
    },
    {
      img: "/front/Typescript_logo_2020.svg.png",
      title: "TypeScript",
    },
    {
      img: "/front/Unofficial_JavaScript_logo_2.svg.png",
      title: "JavaScript",
    },
  ];

  const backEndStack = [
    {
      img: "/back/python.png",
      title: "Python",
    },
    {
      img: "/back/nodejs-new-pantone-black.png",
      title: "Nodejs",
    },
    {
      img: "/back/nestpng.png",
      title: "Nest",
    },
  ];

  const cloudStack = [
    {
      img: "/cloud/Amazon_Web_Services_Logo.svg.png",
      title: "AWS",
    },
    {
      img: "/cloud/Microsoft_Azure.svg.png",
      title: "Azure",
    },
  ];

  const othersStack = [
    {
      img: "/others/Postgresql_elephant.svg.png",
      title: "Postgresql",
    },
    {
      img: "/others/touchicon-180.png",
      title: "Firebase",
    },
    {
      img: "/others/Tailwind_CSS_Logo.svg.png",
      title: "Tailwind CSS",
    },
    {
      img: "/others/1_doAg1_fMQKWFoub-6gwUiQ.png",
      title: "MongoDB",
    },
  ];

  return (
    <section id="stack" className="min-h-screen px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Tech Stack
      </h2>

      <h3 className="text-2xl font-semibold text-center mb-6">Frontend</h3>
      <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
        {frontEndStack.map((stack) => (
         <div key={stack.title} className="flex flex-col items-center space-y-2">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md w-40 h-40 flex items-center justify-center hover:shadow-lg hover:scale-105 transition-all">
            <img src={stack.img} alt={stack.title} className="w-20 h-20 md:w-28 md:h-28 object-contain" />
          </div>
          <span className="text-sm text-gray-700">{stack.title}</span>
        </div>
        ))}
      </div>

      <h3 className="text-2xl font-semibold text-center mb-6 mt-12">Backend</h3>
      <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
        {backEndStack.map((stack) => (
         <div key={stack.title} className="flex flex-col items-center space-y-2">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md w-40 h-40 flex items-center justify-center hover:shadow-lg hover:scale-105 transition-all">
            <img src={stack.img} alt={stack.title} className="w-20 h-20 md:w-28 md:h-28 object-contain" />
          </div>
          <span className="text-sm text-gray-700">{stack.title}</span>
        </div>
        ))}
      </div>

      <h3 className="text-2xl font-semibold text-center mb-6 mt-12">Cloud</h3>
      <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
        {cloudStack.map((stack) => (
         <div key={stack.title} className="flex flex-col items-center space-y-2">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md w-40 h-40 flex items-center justify-center hover:shadow-lg hover:scale-105 transition-all">
            <img src={stack.img} alt={stack.title} className="w-20 h-20 md:w-28 md:h-28 object-contain" />
          </div>
          <span className="text-sm text-gray-700">{stack.title}</span>
        </div>
        ))}
      </div>

      <h3 className="text-2xl font-semibold text-center mb-6 mt-12">Others</h3>
      <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
        {othersStack.map((stack) => (
         <div key={stack.title} className="flex flex-col items-center space-y-2">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md w-40 h-40 flex items-center justify-center hover:shadow-lg hover:scale-105 transition-all">
            <img src={stack.img} alt={stack.title} className="w-20 h-20 md:w-28 md:h-28 object-contain" />
          </div>
          <span className="text-sm text-gray-700">{stack.title}</span>
        </div>
        ))}
      </div>

    </section>
  );
};
