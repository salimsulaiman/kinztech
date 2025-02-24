import { FiSearch } from "react-icons/fi";

const Hero = () => {
  return (
    <div className={`bg-[url(/grid.jpeg)] bg-cover bg-center pt-20 md:pt-28 pb-12 md:pb-28 relative w-full`}>
      <div className="w-full flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <div className="flex gap-2 items-center">
            <div className="rounded-full w-4 h-4 bg-yellow-300"></div>
            <div className="rounded-full w-4 h-4 bg-orange-300"></div>
            <div className="rounded-full w-4 h-4 bg-curious-blue-300"></div>
            <h4 className="text-base text-slate-800 font-semibold ms-2">Good Design in Invisible</h4>
          </div>
          <h1 className="text-4xl lg:text-5xl text-slate-800 font-bold mt-8 leading-tight">
            Every object tells a story if you know how to read it
          </h1>
          <h4 className="text-base text-slate-700 mt-8 leading-loose">
            Discover the art of storytelling through objects, where each piece reveals its unique history and
            significance, enriching our understanding and appreciation.
          </h4>
          <div className="flex gap-4 items-center mt-8">
            <button className="text-base text-white bg-curious-blue-600 hover:bg-curious-blue-700 cursor-pointer px-6 py-2 rounded-full flex items-center gap-2">
              <FiSearch /> <span>|</span> <span>Find Service</span>
            </button>
            <button className="text-base text-white bg-java-600 hover:bg-java-700 cursor-pointer px-6 py-2 rounded-full">
              Let&#39;s Talk
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative">
          <img
            src="/assets/woman.png"
            alt=""
            className="w-[300px] lg:w-[350px] relative md:absolute left-0 md:left-8 -bottom-12 md:-bottom-30 mx-auto md:mx-0"
          />
        </div>
      </div>
      <div className="w-full max-w-3xl left-1/2 -translate-x-1/2 h-[100px] md:h-[150px] rounded-2xl bg-curious-blue-600 absolute -bottom-24 grid grid-cols-3 divide-x divide-white divide py-4 z-30">
        <div className="flex flex-col justify-center items-center text-white">
          <h3 className="text-lg font-bold">100+</h3>
          <h4 className="text-xs md:text-base">Happy Clients</h4>
        </div>
        <div className="flex flex-col justify-center items-center text-white">
          <h3 className="text-lg font-bold">5.0</h3>
          <h4 className="text-xs md:text-base">Star Rating</h4>
        </div>
        <div className="flex flex-col justify-center items-center text-white">
          <h3 className="text-lg font-bold">10+</h3>
          <h4 className="text-xs md:text-base">Team Members</h4>
        </div>
      </div>
    </div>
  );
};

export default Hero;
