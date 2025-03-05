import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

function Navbar() {
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

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
        scrolling ? "bg-white shadow-xs" : "bg-white md:bg-transparent"
      } font-urbanist fixed top-0 z-50 transition-all duration-200 ease-in-out`}
    >
      <div
        className={`max-w-5xl mx-auto px-4 ${
          scrolling ? "py-4 md:py-6" : "py-4 md:py-12"
        } flex justify-between items-center transition-all duration-200 ease-in-out`}
      >
        <Link to={"/#"} className="text-2xl font-bold text-curious-blue-700">
          kinztech
        </Link>
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer">
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:flex gap-12 text-center md:text-start absolute md:static top-12 right-0 bg-white md:bg-transparent shadow-md md:shadow-none w-full md:w-auto p-6 md:p-0 rounded-b-2xl space-y-4"
            >
              <li>
                <a
                  href="/#"
                  className="text-base text-slate-500 hover:text-curious-blue-800 font-semibold transition-colors duration-100 ease-in-out"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className="text-base text-slate-500 hover:text-curious-blue-800 font-semibold transition-colors duration-100 ease-in-out"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="text-base text-slate-500 hover:text-curious-blue-800 font-semibold transition-colors duration-100 ease-in-out"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/#pricing"
                  className="text-base text-slate-500 hover:text-curious-blue-800 font-semibold transition-colors duration-100 ease-in-out"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/087776421079?text=I'm%20interested%20in%20your%20car%20for%20sale"
                  className="block md:hidden w-full text-base text-white bg-curious-blue-600 hover:bg-curious-blue-700 cursor-pointer px-6 py-2 rounded-full"
                >
                  Let&#39;s Talk
                </a>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
        <ul className=" hidden md:flex gap-12">
          <li>
            <a
              href="/#"
              className="text-base text-slate-500 hover:text-curious-blue-800 font-semibold transition-colors duration-100 ease-in-out"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/#about"
              className="text-base text-slate-500 hover:text-curious-blue-800 font-semibold transition-colors duration-100 ease-in-out"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/#services"
              className="text-base text-slate-500 hover:text-curious-blue-800 font-semibold transition-colors duration-100 ease-in-out"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/#pricing"
              className="text-base text-slate-500 hover:text-curious-blue-800 font-semibold transition-colors duration-100 ease-in-out"
            >
              Pricing
            </a>
          </li>
        </ul>
        <a
          href="https://wa.me/+6287776421079?text=Halo%2C%20saya%20ingin%20menggunakan%20jasa%20anda"
          target="_blank"
          className="hidden md:block text-base text-white bg-curious-blue-600 hover:bg-curious-blue-700 cursor-pointer px-6 py-2 rounded-full"
        >
          Let&#39;s Talk
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
