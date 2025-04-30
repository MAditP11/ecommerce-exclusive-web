import Advise from "../components/advise";
import Header from "../components/header";
import cover from "../assets/cover_signup.png";
import Button from "../components/button";

export default function Login() {
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
              Log in to Exclusive
            </h2>
            <p className="text-base font-normal leading-6">
              Enter your details below
            </p>
          </div>
          <form className="container flex flex-col gap-8" action="">
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

          <div className="container flex flex-row justify-between items-center gap-14">
            <button className=" container py-3 text-base font-medium text-white rounded-md bg-[#DB4444]">
              <p>Log In</p>
            </button>
            <div className="container justify-end">
              <p className="text-[#DB4444] text-base font-medium">
                Forgot Password?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
