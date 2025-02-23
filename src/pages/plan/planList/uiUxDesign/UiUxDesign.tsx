const UiUxDesign = () => {
  const plans = [
    {
      name: "Basic",
      price: "$199",
      features: [
        "Wireframing for 1 Page",
        "Basic UI Style Guide",
        "Mobile-Responsive Design",
        "Color & Typography Selection",
        "Delivery in 3 Days",
      ],
    },
    {
      name: "Standard",
      price: "$499",
      features: [
        "Wireframing & Prototyping (Up to 5 Pages)",
        "Custom UI Components",
        "User-Centered Design",
        "Mobile & Tablet Optimization",
        "Basic UX Research",
        "Delivery in 7 Days",
      ],
    },
    {
      name: "Premium",
      price: "$899",
      features: [
        "End-to-End UI/UX Design (Unlimited Pages)",
        "Advanced Prototyping & Interactions",
        "Design System & Style Guide",
        "In-Depth UX Research & Testing",
        "User Persona & Journey Mapping",
        "High-Fidelity Design with Animations",
        "Delivery in 15 Days",
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
            href="#"
            className="mt-8 font-bold text-slate-700 w-full text-center p-2 rounded-full border border-slate-400 group-hover:border-white group-hover:text-white hover:bg-white hover:text-curious-blue-600 transition-colors duration-150 ease-in-out"
          >
            Get Started
          </a>
        </div>
      ))}
    </div>
  );
};

export default UiUxDesign;
