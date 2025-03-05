import { useState } from "react";
import WebDevelopment from "./planList/webDevelopment/WebDevelopment";
import UiUxDesign from "./planList/uiUxDesign/UiUxDesign";
import VideoEditing from "./planList/videoEditing/VideoEditing";

const Plan = () => {
  const [plan, setPlan] = useState(0);

  return (
    <div className="max-w-5xl mx-auto p-4 " id="pricing">
      <div className="w-full pt-10 md:pt-20 pb-10">
        <h2 className="text-slate-700 text-2xl font-bold text-center">Choose the plan thats right for you</h2>
        <div className="w-full justify-center flex gap-4 mt-8">
          <button
            className={`text-[10px] font-semibold md:font-normal md:text-base cursor-pointer px-6 py-2 rounded-full transition-all ${
              plan === 0 ? "text-white bg-curious-blue-600" : "text-slate-700 bg-transparent hover:bg-slate-200"
            }`}
            onClick={() => setPlan(0)}
          >
            UI/UX Design
          </button>
          <button
            className={`text-[10px] font-semibold md:font-normal md:text-base cursor-pointer px-6 py-2 rounded-full transition-all ${
              plan === 1 ? "text-white bg-curious-blue-600" : "text-slate-700 bg-transparent hover:bg-slate-200"
            }`}
            onClick={() => setPlan(1)}
          >
            Web Development
          </button>
          <button
            className={`text-[10px] font-semibold md:font-normal md:text-base cursor-pointer px-6 py-2 rounded-full transition-all ${
              plan === 2 ? "text-white bg-curious-blue-600" : "text-slate-700 bg-transparent hover:bg-slate-200"
            }`}
            onClick={() => setPlan(2)}
          >
            Video Editing
          </button>
        </div>
        {plan === 0 && <UiUxDesign />}
        {plan === 1 && <WebDevelopment />}
        {plan === 2 && <VideoEditing />}
      </div>
    </div>
  );
};

export default Plan;
