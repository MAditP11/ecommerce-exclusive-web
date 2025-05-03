import Advise from "../components/advise";
import Header from "../components/header";
import ContainerInfoAbout from "../components/container_info_about";
import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";
import FormAccount from "../components/formAccount";
import ContainerAdvantage from "../components/container_advantage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  return (
    <div className="">
      <Advise />
      <Header />

      {/*  */}
      <div className="container mx-auto flex flex-col gap-14 py-14">
        <div className="flex">
          <p className="text-sm font-normal tracking-widest">
            <a className="opacity-50" href="">
              Home
            </a>{" "}
            / <a href="">Contact</a>
          </p>
        </div>

        <div className="container flex flex-row gap-5">
          {/*  */}
          <div className="container flex w-1/4 p-7 flex-col gap-4 shadow-md">
            <div className="container flex flex-col pt-3 pb-7 border-b-[1px] gap-4 border-black">
              <div className="container flex flex-row items-center gap-4">
                <div className="py-2 px-3 rounded-full bg-[#DB4444]">
                  <FontAwesomeIcon className="text-white" icon={faPhone} />
                </div>
                <p className="font-medium">Call To Us</p>
              </div>
              <div className="container">
                <p className="text-sm">We are available 24/7, 7 days a week.</p>
              </div>
              <div className="container">
                <p className="text-sm">Phone: +8801611112222</p>
              </div>
            </div>

            <div className="container flex flex-col py-3 gap-4">
              <div className="container flex flex-row items-center gap-4">
                <div className="py-2 px-3 rounded-full bg-[#DB4444]">
                  <FontAwesomeIcon className="text-white" icon={faMailBulk} />
                </div>
                <p className="font-medium">White To Us</p>
              </div>
              <div className="container">
                <p className="text-sm">
                  Fill out our form and we will contact you within 24 hours.
                </p>
              </div>
              <div className="container">
                <p className="text-sm">Emails: customer@exclusive.com</p>
              </div>
              <div className="container">
                <p className="text-sm">Emails: support@exclusive.com</p>
              </div>
            </div>
          </div>

          <div className="container flex px-7 py-10 flex-col gap-7 shadow-md">
            {/*  */}
            <div className="container flex flex-row gap-4">
              <div className="container p-3 bg-[#F5F5F5] rounded-sm">
                <input
                  className="container focus:outline-none bg-[#F5F5F5]"
                  type="text"
                  placeholder="Your Name *"
                />
              </div>
              <div className="container p-3 bg-[#F5F5F5] rounded-sm">
                <input
                  className="container focus:outline-none bg-[#F5F5F5]"
                  type="email"
                  placeholder="Your Email *"
                />
              </div>
              <div className="container p-3 bg-[#F5F5F5] rounded-sm">
                <input
                  className="container focus:outline-none bg-[#F5F5F5]"
                  type="tel"
                  placeholder="Your Phone *"
                />
              </div>
            </div>

            <div className="container p-3 bg-[#F5F5F5] rounded-sm h-56">
              <textarea
                className="container focus:outline-none bg-[#F5F5F5] overflow-y-hidden h-52 resize-none"
                rows={4}
                cols={5}
                placeholder="Your Massage"
              />
            </div>

            <div className="container flex justify-end">
              <button className="text-base font-medium text-white bg-[#DB4444] px-10 py-4 rounded-md ">
                Send Massage
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
