const WebDevelopment = () => {
  const plans = [
    {
      name: "Basic",
      price: "$299",
      features: [
        "Single Page Website",
        "Basic UI/UX Design",
        "Responsive Layout",
        "Basic SEO Setup",
        "Delivery in 5 Days",
      ],
    },
    {
      name: "Standard",
      price: "$599",
      features: [
        "Multi-Page Website",
        "Custom UI/UX Design",
        "Mobile Optimization",
        "SEO & Performance Optimization",
        "Basic CMS Integration",
        "Delivery in 10 Days",
      ],
    },
    {
      name: "Premium",
      price: "$999",
      features: [
        "Fully Custom Web Development",
        "Advanced UI/UX Animations",
        "E-commerce & Payment Integration",
        "High-Speed Performance Optimization",
        "API & Third-Party Integration",
        "Advanced SEO & Analytics",
        "Delivery in 20 Days",
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      {plans.map((plan, index) => (
        <div
          key={index}
          className="w-full overflow-hidden px-8 py-8 min-h-[350px] bg-slate-100 rounded-2xl hover:bg-curious-blue-500 transition-colors duration-150 ease-in-out flex flex-col justify-between group cursor-default"
        >
          <div className="flex flex-col gap-1">
            <h4 className="text-slate-700 font-extrabold text-lg mt-2 group-hover:text-white transition-colors duration-150 ease-in-out text-center">
              {plan.name}
            </h4>
            <h3 className="text-slate-700 font-extrabold text-4xl group-hover:text-white transition-colors duration-150 ease-in-out text-center">
              {plan.price}
            </h3>
            <ul className="list-disc text-slate-600 group-hover:text-white transition-colors duration-150 ease-in-out font-medium flex flex-col gap-2 mt-4 text-left pl-5">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
          <a
            href={`https://wa.me/+6287776421079?text=Halo%2C%20saya%20ingin%20menggunakan%20jasa%Web%20Development%20Paket%20${plan.name}`}
            target="_blank"
            className="mt-8 font-bold text-slate-700 w-full text-center p-2 rounded-full border border-slate-400 group-hover:border-white group-hover:text-white hover:bg-white hover:text-curious-blue-600 transition-colors duration-150 ease-in-out"
          >
            Get Started
          </a>
        </div>
      ))}
    </div>
  );
};

export default WebDevelopment;
