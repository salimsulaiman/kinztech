import { MdDesignServices, MdOutlinePermMedia, MdWeb } from "react-icons/md";

const Services = () => {
  return (
    <div className="bg-white w-full pt-36 pb-16 min-h-[600px]">
      <div className="mx-auto text-center">
        <h4 className="text-slate-700 font-bold text-base">Services</h4>
        <h1 className="text-2xl mt-3 font-bold text-slate-800">Our Popular Services For You</h1>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="w-full overflow-hidden px-6 py-8 min-h-[350px] bg-slate-100 rounded-2xl hover:bg-curious-blue-500 transition-colors duration-150 ease-in-out flex flex-col justify-between group cursor-default">
          <div className="flex flex-col gap-4">
            <div className="w-16 h-16 rounded-full bg-yellow-500 group-hover:bg-white transition-colors duration-150 ease-in-out overflow-hidden p-4 flex items-center justify-center">
              <MdDesignServices className="text-white text-4xl group-hover:text-curious-blue-500 transition-colors duration-150 ease-in-out" />
            </div>
            <h2 className="text-slate-700 font-extrabold text-2xl mt-2 group-hover:text-white transition-colors duration-150 ease-in-out">
              UI UX Design
            </h2>
            <p className="text-slate-600 line-clamp-3 group-hover:text-white transition-colors duration-150 ease-in-out">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi tempora nobis deleniti repudiandae quasi
              adipisci.
            </p>
          </div>
          <a
            href="#"
            className="font-bold text-slate-700 group-hover:text-white transition-colors duration-150 ease-in-out"
          >
            Read More
          </a>
        </div>
        <div className="w-full overflow-hidden px-6 py-8 min-h-[350px] bg-slate-100 rounded-2xl hover:bg-curious-blue-500 transition-colors duration-150 ease-in-out flex flex-col justify-between group cursor-default">
          <div className="flex flex-col gap-4">
            <div className="w-16 h-16 rounded-full bg-curious-blue-500 group-hover:bg-white transition-colors duration-150 ease-in-out p-4 flex items-center justify-center">
              <MdWeb className="text-white text-4xl group-hover:text-curious-blue-500 transition-colors duration-150 ease-in-out" />
            </div>
            <h2 className="text-slate-700 font-extrabold text-2xl mt-2 group-hover:text-white transition-colors duration-150 ease-in-out">
              Web Development
            </h2>
            <p className="text-slate-600 line-clamp-3 group-hover:text-white transition-colors duration-150 ease-in-out">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi tempora nobis deleniti repudiandae quasi
              adipisci.
            </p>
          </div>
          <a
            href="#"
            className="font-bold text-slate-700 group-hover:text-white transition-colors duration-150 ease-in-out"
          >
            Read More
          </a>
        </div>
        <div className="w-full overflow-hidden px-6 py-8 min-h-[350px] bg-slate-100 rounded-2xl hover:bg-curious-blue-500 transition-colors duration-150 ease-in-out flex flex-col justify-between group cursor-default">
          <div className="flex flex-col gap-4">
            <div className="w-16 h-16 rounded-full bg-orange-500 group-hover:bg-white transition-colors duration-150 ease-in-out p-4 flex items-center justify-center">
              <MdOutlinePermMedia className="text-white text-4xl group-hover:text-curious-blue-500 transition-colors duration-150 ease-in-out" />
            </div>
            <h2 className="text-slate-700 font-extrabold text-2xl mt-2 group-hover:text-white transition-colors duration-150 ease-in-out">
              Video Editing
            </h2>
            <p className="text-slate-600 line-clamp-3 group-hover:text-white transition-colors duration-150 ease-in-out">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi tempora nobis deleniti repudiandae quasi
              adipisci.
            </p>
          </div>
          <a
            href="#"
            className="font-bold text-slate-700 group-hover:text-white transition-colors duration-150 ease-in-out"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
