import { IoIosStar } from "react-icons/io";

const Reviews = () => {
  return (
    <div className={`bg-[url(/magicpatern.jpeg)] bg-cover bg-center py-10 relative w-full`}>
      <div className="mx-auto text-center">
        <h1 className="text-2xl mt-3 font-bold text-slate-800">What Our Client Says</h1>
        <h4 className="max-w-[500px] mx-auto text-slate-700 mt-4">
          Discover what our clients have to say about their experiences and how our services have made a difference for
          them.
        </h4>
      </div>
      <div className="w-full mt-20">
        <div className="w-full flex flex-col gap-2">
          <div className="h-28 w-28 bg-slate-200 rounded-full mx-auto overflow-hidden relative">
            <img src="/assets/profile.png" alt="" className="object-cover object-center" />
          </div>
          <h4 className="text-slate-700 text-xl text-center font-bold mt-2">Salim Sulaiman</h4>
          <h5 className="text-slate-600 text-base text-center font-normal">PT Solusi Bersama</h5>
          <div className="flex gap-1 justify-center text-xl text-yellow-500">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
          </div>
          <p className="text-slate-700 text-center max-w-[650px] mx-auto mt-8">
            Creating a website with KinzMedia is an excellent choice because they provide high-quality design, fast
            performance, user-friendly interfaces, and professional support, ensuring a seamless experience for your
            business or personal needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
