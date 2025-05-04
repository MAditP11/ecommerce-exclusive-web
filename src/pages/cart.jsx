import Advise from "../components/advise";
import Header from "../components/header";
import { useState, useRef } from "react";

import product from "../assets/product.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Cart() {
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
            / <a href="">Cart</a>
          </p>
        </div>
        {/*  */}
        <div className="container flex flex-col gap-5">
          <div className="container flex flex-col gap-5">
            <div className=" container flex flex-col py-3 rounded-sm border-[1px] ">
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
            <div className=" container flex flex-col py-3 border-[1px]">
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
                    <div className="border-black border-[1px] border-opacity-50 rounded-md py-1 px-2 w-16">
                      <input
                        className=" focus:outline-none w-12 "
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
                  <p>${price * value}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="container flex flex-row">
            <div className="container">
              <button className="px-8 py-3 border-[1px] border-black rounded-md border-opacity-50">
                <p className="text-base font-medium opacity-100">
                  Return To Shop
                </p>
              </button>
            </div>

            <div className="container flex justify-end">
              <button className="px-8 py-3 border-[1px] border-black rounded-md border-opacity-50">
                <p className="text-base font-medium opacity-100">Update Cart</p>
              </button>
            </div>
          </div>
        </div>

        <div className="container flex flex-row items-start">
          <div className="container flex flex-row gap-4">
            <div className="px-5 py-3 border-[1px] border-opacity-50 border-black rounded-md">
              <input
                className="focus:outline-none text-base font-normal"
                placeholder="Coupon Code"
                type="text"
              />
            </div>
            <button className=" flex justify-center px-12 py-3 text-white text-base font-medium bg-[#DB4444] rounded-md">
              Apply Coupon
            </button>
          </div>

          <div className="container flex flex-col px-4 py-6 border-black border-[1px] rounded-md items-center">
            <div className="container py-2">
              <p className="text-xl font-medium">Card Total</p>
            </div>
            <div className="container flex flex-row justify-between py-3 border-b-[1px] border-black">
              <p className="text-base font-normal">Subtotal:</p>
              <p className="text-base font-normal">${price * value}</p>
            </div>

            <div className="container flex flex-row justify-between py-3 border-b-[1px] border-black">
              <p className="text-base font-normal">Shipping:</p>
              <p className="text-base font-normal">Free</p>
            </div>

            <div className="container flex flex-row justify-between py-3">
              <p className="text-base font-normal">Total:</p>
              <p className="text-base font-normal">${price * value}</p>
            </div>
            <button className=" flex justify-center px-8 py-3 text-white text-base font-medium bg-[#DB4444] rounded-md">
              Process To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
