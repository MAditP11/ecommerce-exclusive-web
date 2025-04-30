import Advise from "../components/advise";
import Header from "../components/header";
import cover from "../assets/cover_signup.png";
import Button from "../components/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function SignUp() {
  return (
    <div className="">
      {/*  */}
      <Advise />

      {/*  */}
      <Header hidden={"hidden"} />

      {/*  */}
      <div className="flex flex-row container gap-24 py-10 items-center">
        <div className="container">
          <img className="object-contain" src={cover} alt="" />
        </div>

        <div className="container flex flex-col gap-10 justify-end w-2/5">
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl font-medium leading-7">
              Create an account
            </h2>
            <p className="text-base font-normal leading-6">
              Enter your details below
            </p>
          </div>
          <form className="container flex flex-col gap-8" action="">
            <input
              className="focus:outline-none text-base border-b-[1px] border-black text-black font-medium placeholder:font-normal"
              placeholder="Name"
              type="text"
            />
            <input
              className="focus:outline-none text-base border-b-[1px] border-black text-black font-medium placeholder:font-normal"
              placeholder="Email or Phone Number"
              type="email"
            />
            <input
              className="focus:outline-none text-base border-b-[1px] border-black text-black font-medium placeholder:font-normal"
              placeholder="Password"
              type="password"
            />
          </form>

          <div className="container flex flex-col justify-center gap-5">
            <button className="container py-3 text-base font-medium text-white rounded-md bg-[#DB4444]">
              <p>Create Account</p>
            </button>
            <button className="container py-3 flex flex-row items-center justify-center border-[1px] border-black gap-3 text-base font-medium rounded-md ">
              <FontAwesomeIcon icon={faGoogle} />
              <p>Sign Up With Google</p>
            </button>
            <div className="container flex flex-row gap-3 justify-center">
              <p className="text-base font-normal">Already have account?</p>
              <p className="text-base font-medium underline">Log In</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
