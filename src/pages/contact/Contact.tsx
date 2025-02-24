import { IoCall, IoLocationSharp, IoMail } from "react-icons/io5";

const Contact = () => {
  return (
    <div className={`bg-white bg-cover py-16 md:py-32 bg-center relative w-full`}>
      <div className="flex flex-col md:flex-row w-full relative items-center">
        <div className="w-full md:w-7/12">
          <div className="w-full p-8 md:pe-28 bg-curious-blue-600 text-white rounded-2xl">
            <h3 className="text-2xl">Lets make it happen</h3>
            <p className="text-base mt-4 leading-loose">
              Have questions or need assistance? Our team is here to help you every step of the way. Reach out to us
              today and let's turn your vision into reality with a solution that fits your needs perfectly!
            </p>
            <div className="flex flex-col gap-4 mt-8">
              <div className="flex gap-2 items-center">
                <IoLocationSharp className="w-4" />
                <h4>Tegal Regency, Central Java</h4>
              </div>
              <div className="flex gap-2 items-center">
                <IoMail className="w-4" />
                <h4>kinzmedia@gmail.com</h4>
              </div>
              <div className="flex gap-2 items-center">
                <IoCall className="w-4" />
                <h4>087776421079</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 relative md:absolute right-auto md:right-0 md:bottom-auto top-8 md:top-auto">
          <div className="min-h-[400px] w-full rounded-2xl bg-slate-500/50 backdrop-blur-lg p-8">
            <h1 className="text-white text-2xl font-bold">Contact Us</h1>

            <form className="mt-6 space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full mt-1 p-3 rounded-lg focus:ring-0 bg-white outline-none"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-1 p-3 rounded-lg focus:ring-0 bg-white outline-none"
                />
              </div>

              <div>
                <textarea
                  placeholder="Write your message here..."
                  rows={4}
                  className="w-full mt-1 p-3 rounded-lg focus:ring-0 bg-white outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-curious-blue-600 text-white px-3 py-2 rounded-full hover:bg-curious-blue-700 transition cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
