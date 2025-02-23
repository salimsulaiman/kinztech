import { useEffect, useState } from "react";

function Navbar() {
  const [scrolling, setScrolling] = useState<boolean>(false);

  const handleScroll = (): void => {
    if (window.scrollY > 30) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`w-full ${
        scrolling ? "bg-white shadow-xs" : "bg-transparent"
      } font-urbanist fixed top-0 z-50 transition-all duration-200 ease-in-out`}
    >
      <div
        className={`max-w-5xl mx-auto px-4 ${
          scrolling ? "py-6" : "py-12"
        } flex justify-between items-center transition-all duration-200 ease-in-out`}
      >
        <a href="#" className="text-2xl font-bold text-curious-blue-700">
          kinztech
        </a>
        <ul className="flex gap-12">
          <li>
            <a
              href=""
              className="text-base text-slate-500 hover:text-curious-blue-800 font-semibold transition-colors duration-100 ease-in-out"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-base text-slate-500 hover:text-curious-blue-800 font-semibold transition-colors duration-100 ease-in-out"
            >
              About
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-base text-slate-500 hover:text-curious-blue-800 font-semibold transition-colors duration-100 ease-in-out"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-base text-slate-500 hover:text-curious-blue-800 font-semibold transition-colors duration-100 ease-in-out"
            >
              Pricing
            </a>
          </li>
        </ul>
        <button className="text-base text-white bg-curious-blue-600 hover:bg-curious-blue-700 cursor-pointer px-6 py-2 rounded-full">
          Let&#39;s Talk
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
