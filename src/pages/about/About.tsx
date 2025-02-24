const About = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 ">
      <div className="w-full flex flex-col md:flex-row py-10 md:py-20">
        <div className="w-full md:w-1/2 relative">
          <img
            src="/assets/woman-confuse.png"
            alt=""
            className="w-[450px] md:w-[600px] max-w-none relative md:absolute left-1/2 -translate-x-1/2 md:translate-x-0 md:-left-30 bottom-8 md:-bottom-30"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h4 className="text-slate-700 font-bold text-base">About Us</h4>
          <h1 className="text-2xl md:text-4xl mt-3 font-bold text-slate-800 leading-tight">
            Build yours, create a better future today
          </h1>
          <div className="flex flex-col gap-4 mt-8">
            <div className="w-full p-4 bg-white flex gap-4 items-center border border-slate-300 rounded-full">
              <div className="h-8 w-8 rounded-full bg-curious-blue-500"></div>
              <h4 className="text-slate-700 font-bold">After 24/7 VIP Support</h4>
            </div>
            <div className="w-full p-4 bg-white flex gap-4 items-center border border-slate-300 rounded-full">
              <div className="h-8 w-8 rounded-full bg-curious-blue-500"></div>
              <h4 className="text-slate-700 font-bold">100% Client Satisfactions</h4>
            </div>
            <div className="w-full p-4 bg-white flex gap-4 items-center border border-slate-300 rounded-full">
              <div className="h-8 w-8 rounded-full bg-curious-blue-500"></div>
              <h4 className="text-slate-700 font-bold">Best Designer and Developer</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
