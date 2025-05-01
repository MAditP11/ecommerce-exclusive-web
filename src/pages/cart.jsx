import Advise from "../components/advise";
import Header from "../components/header";
import { useState, useRef } from "react";

import product from "../assets/product.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
  const [value, setValue] = useState("1");
  const [price, setPrice] = useState(550);
  const inputRef = useRef(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.select();
    }
  };

  const changeValue = (e) => {
    const newValue = e.target.value;

    if (newValue.length < 3) {
      setValue(newValue);
    }
    console.log(value);
  };

  const blurValue = () => {
    if (value === "" || Number(value) === 0) {
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
      <div className="container mx-auto flex flex-col gap-10 py-10">
        <div className="flex">
          <p className="text-sm font-normal tracking-widest">
            <a className="opacity-50" href="">
              Home
            </a>{" "}
            / <a href="">Cart</a>
          </p>
        </div>
        {/*  */}
        <div className="container flex flex-col gap-5">
          <div className=" container flex flex-col py-3 shadow-md">
            {/*  */}
            <div className="container flex flex-row justify-between gap-20">
              <div className="container flex justify-center">
                <p>Product</p>
              </div>
              <div className="container flex justify-center">
                <p>Price</p>
              </div>
              <div className="container flex justify-center">
                <p>Quantity</p>
              </div>
              <div className="container flex justify-center">
                <p>Subtotal</p>
              </div>
            </div>
          </div>

          {/*  */}
          <div className=" container flex flex-col py-3 shadow-md">
            <div className="container flex flex-row justify-between items-center gap-20">
              <div className="container flex justify-center items-center gap-3">
                <img
                  className="object-contain h-10 w-10"
                  src={product}
                  alt=""
                />
                <p>HI Gamepad</p>
              </div>
              <div className="container flex justify-center">
                <p>${price}</p>
              </div>
              <div className="container flex justify-center">
                <div className="flex flex-row">
                  <div className="border-black border-2 p-1 w-10">
                    <input
                      className="input-no-spinner focus:outline-none w-5 "
                      type="number"
                      ref={inputRef}
                      onFocus={handleFocus}
                      value={value}
                      onChange={changeValue}
                      onBlur={blurValue}
                    />
                  </div>
                </div>
              </div>
              <div className="container flex justify-center">
                <p>{price * value}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
