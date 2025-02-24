import Navbar from "../components/Navbar";
import { useState } from "react";
import Hero from "./hero/Hero";
import Services from "./services/Services";
import About from "./about/About";
import Plan from "./plan/Plan";
import Reviews from "./reviews/Reviews";
import Contact from "./contact/Contact";
import Footer from "../components/Footer";

function LandingPage() {
  const images = [
    "assets/logo/discord.png",
    "assets/logo/google.png",
    "assets/logo/slack.png",
    "assets/logo/discord.png",
    // "assets/logo/whatsapp.png",
    // "assets/logo/youtube.png",
    // "assets/logo/instagram.png",
  ];

  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="font-urbanist">
      <Navbar />
      <div className="w-full max-w-5xl mx-auto p-4">
        {/* home */}
        <Hero />
        {/* services */}
        <Services />
        {/* scrolling */}
        <div className="relative overflow-hidden py-2 mb-8 bg-white whitespace-nowrap">
          {/* Gradient Fade on Left */}
          <div className="absolute top-0 left-0 w-[250px] h-full z-10 bg-gradient-to-l from-transparent to-white pointer-events-none"></div>
          {/* Gradient Fade on Right */}
          <div className="absolute top-0 right-0 w-[250px] h-full z-10 bg-gradient-to-r from-transparent to-white pointer-events-none"></div>

          {/* Scrolling Logos */}
          <div className={`inline-flex w-max animate-[slide_35s_linear_infinite] ${isPaused ? "paused" : ""}`}>
            {[...images, ...images].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`logo-${index}`}
                className="h-[50px] md:h-[80px] mx-[30px] inline-block grayscale hover:filter-none"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-b from-slate-50 to-white overflow-hidden ">
        {/* about */}
        <About />
        {/* plan */}
        <Plan />
      </div>
      <div className="w-full max-w-5xl mx-auto p-4">
        <Reviews />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
