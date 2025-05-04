import Advise from "../components/advise";
import Header from "../components/header";
import FormAccount from "../components/formAccount";
export default function Account() {
  return (
    <div className="">
      {/*  */}
      <Advise />

      {/*  */}
      <Header />

      {/*  */}
      <div className="container mx-auto flex flex-col gap-20 py-10">
        <div className="flex">
          <p className="text-sm font-normal tracking-widest">
            <a className="opacity-50" href="">
              Home
            </a>{" "}
            / <a href="">My Account</a>
          </p>
        </div>

        <div className="container flex flex-row gap-5">
          <div className="container flex w-1/3 flex-col gap-7 ">
            <div className="container flex flex-col gap-4">
              <h3 className="text-base font-medium">Manage My Account</h3>
              <div className="container flex flex-col gap-2 pl-7">
                <a
                  className="text-base font-normal text-[#DB4444] opacity-100"
                  href="#"
                >
                  My Profile
                </a>
                <a className="text-base font-normal opacity-50" href="#">
                  Address Book
                </a>
                <a className="text-base font-normal opacity-50" href="#">
                  My Payment Option
                </a>
              </div>
            </div>

            <div className="container flex flex-col gap-4">
              <h3 className="text-base font-medium">My Orders</h3>
              <div className="container flex flex-col gap-2 pl-7">
                <a className="text-base font-normal opacity-50" href="#">
                  My Returns
                </a>
                <a className="text-base font-normal opacity-50" href="#">
                  My Cancellations
                </a>
              </div>
            </div>

            <div className="container flex flex-col gap-4">
              <h3 className="text-base font-medium">My Whislist</h3>
            </div>
          </div>

          <div className="container flex flex-col px-14 py-7 gap-7 shadow-md rounded-sm">
            {/*  */}

            <h2 className="text-xl font-medium text-[#DB4444]">My Account</h2>
            <div className="container grid grid-cols-2 gap-x-10 gap-y-4">
              <FormAccount
                label={"First Name"}
                type={"text"}
                v={"Risky"}
                name={"fname"}
              />

              <FormAccount
                label={"Last Name"}
                v={"Ramadhan"}
                type={"text"}
                name={"lname"}
              />

              <FormAccount
                label={"Email"}
                v={"risram@gmail.com"}
                type={"email"}
                name={"femail"}
              />

              <FormAccount
                label={"Address"}
                v={"Bandarlampung, Lampung"}
                type={"text"}
                name={"address"}
              />
            </div>

            <div className="container flex flex-col gap-2">
              <FormAccount
                label={"Password Changes"}
                type={"password"}
                placeholder={"Current Password"}
                name={"currentpass"}
              />
              <FormAccount
                type={"password"}
                placeholder={"Confirm New Password"}
                name={"confirmnewpass"}
              />
              <FormAccount
                type={"password"}
                placeholder={"New Password"}
                name={"newpass"}
              />
            </div>

            <div className="container flex flex-row gap-4 items-center justify-end">
              <a href="">Cancel</a>
              <button className="text-base font-medium text-white bg-[#DB4444] px-10 py-3 rounded-md ">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
