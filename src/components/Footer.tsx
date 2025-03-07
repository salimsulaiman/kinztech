const Footer = () => {
  return (
    <footer className="w-full bg-[url(/magicpatern.jpeg)] bg-cover bg-bottom relative">
      <div className="absolute inset-0 bg-slate-100/20"></div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-16 p-4 pt-16 pb-10 relative z-20">
        <div className="w-full col-span-1 md:col-span-2">
          <h1 className="text-3xl text-curious-blue-600 font-bold text-center md:text-start">kinztech</h1>
          <p className="text-slate-600 mt-4 font-medium text-center md:text-start">
          Providing UI/UX Design, Web Development, and Video Editing services to elevate your digital presence.
          </p>
          <h4 className="font-bold text-slate-700 mt-8 md:mt-4 text-center md:text-start">Innovate Digitally, Create Uniquely.</h4>
          {/* <form className="flex w-full items-center mt-4">
            <div className="w-8/12">
              <input
                type="email"
                className="w-full border border-slate-300 px-4 py-2 focus:outline-0 rounded-l-2xl bg-white"
              ></input>
            </div>
            <div className="w-4/12">
              <button className="w-full bg-curious-blue-600 px-4 py-2 text-center border border-curious-blue-600 rounded-r-2xl text-white cursor-pointer hover:bg-curious-blue-700 hover:border-curious-blue-700">
                Send Email
              </button>
            </div>
          </form> */}
        </div>
        <div className="w-full text-center md:text-start">
          <h4 className="text-lg text-slate-700 font-bold">Quick Link</h4>
          <ul className="flex flex-col gap-2 mt-4">
            <li>
              <a
                href="#"
                className="text-base text-slate-500 hover:text-curious-blue-800 font-semibold transition-colors duration-100 ease-in-out"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base text-slate-500 hover:text-curious-blue-800 font-semibold transition-colors duration-100 ease-in-out"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base text-slate-500 hover:text-curious-blue-800 font-semibold transition-colors duration-100 ease-in-out"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base text-slate-500 hover:text-curious-blue-800 font-semibold transition-colors duration-100 ease-in-out"
              >
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full text-center md:text-start">
          <h4 className="text-lg text-slate-700 font-bold">Our Services</h4>
          <ul className="flex flex-col gap-2 mt-4">
            <li>
              <a
                href="#"
                className="text-base text-slate-500 hover:text-curious-blue-800 font-semibold transition-colors duration-100 ease-in-out"
              >
                UI / UX Design
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base text-slate-500 hover:text-curious-blue-800 font-semibold transition-colors duration-100 ease-in-out"
              >
                Web Development
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base text-slate-500 hover:text-curious-blue-800 font-semibold transition-colors duration-100 ease-in-out"
              >
                Video Editing
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full text-center md:text-start">
          <h4 className="text-lg text-slate-700 font-bold">More From Us</h4>
          <ul className="flex flex-col gap-2 mt-4">
            <li>
              <a
                href="#"
                className="text-base text-slate-500 hover:text-curious-blue-800 font-semibold transition-colors duration-100 ease-in-out"
              >
                Our Blogs
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-5xl mx-auto p-4 pb-10 relative z-20">
        <div className="w-full h-[1px] bg-slate-300 rounded-full"></div>
        <p className="mt-8 text-xs text-slate-600 text-center md:text-start">
          © {new Date().getFullYear()} <span className="font-bold text-curious-blue-600">kinztech</span> — Innovating
          for a better future.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
