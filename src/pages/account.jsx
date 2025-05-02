import Advise from "../components/advise";
import Header from "../components/header";
import { useState, useRef } from "react";

import product from "../assets/product.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Account() {
  const [value, setValue] = useState("1");
  const [price] = useState(550);
  const inputRef = useRef(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.select();
    }
  };

  const changeValue = (e) => {
    const newValue = e.target.value;

    if (newValue.length < 3) {
      if (value === "" || Number(newValue) === 0 || Number(value) < 0) {
        setValue(1);
      } else {
        setValue(newValue);
      }
    }
    console.log(value);
  };

  const blurValue = () => {
    if (value === "" || Number(value) === 0 || Number(value) < 0) {
      setValue(1);
    }
  };

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

        <div className="container flex flex-row">
          <div className="flex flex-col gap-7 ">
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
        </div>
      </div>
    </div>
  );
}
