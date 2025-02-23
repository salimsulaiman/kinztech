import { FiSearch } from "react-icons/fi";

const Hero = () => {
  return (
    <div className={`bg-[url(/grid.jpeg)] bg-cover pt-28 pb-28 relative w-full`}>
      <div className="w-full flex gap-4">
        <div className="w-1/2">
          <div className="flex gap-2 items-center">
            <div className="rounded-full w-4 h-4 bg-yellow-300"></div>
            <div className="rounded-full w-4 h-4 bg-orange-300"></div>
            <div className="rounded-full w-4 h-4 bg-curious-blue-300"></div>
            <h4 className="text-base text-slate-800 font-semibold ms-2">Good Design in Invisible</h4>
          </div>
          <h1 className="text-5xl text-slate-800 font-bold mt-8 leading-tight">
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
        <div className="w-1/2 relative">
          <img src="/assets/woman.png" alt="" className="w-[350px] absolute left-8 -bottom-30" />
        </div>
      </div>
      <div className="w-full max-w-3xl left-1/2 -translate-x-1/2 h-[150px] rounded-2xl bg-curious-blue-600 absolute -bottom-24 grid grid-cols-3 divide-x divide-white divide py-4 z-30">
        <div className="flex flex-col justify-center items-center text-white">
          <h3 className="text-lg font-bold">100+</h3>
          <h4 className="text-base">Happy Clients</h4>
        </div>
        <div className="flex flex-col justify-center items-center text-white">
          <h3 className="text-lg font-bold">5.0</h3>
          <h4 className="text-base">Star Rating</h4>
        </div>
        <div className="flex flex-col justify-center items-center text-white">
          <h3 className="text-lg font-bold">10+</h3>
          <h4 className="text-base">Team Members</h4>
        </div>
      </div>
    </div>
  );
};

export default Hero;
