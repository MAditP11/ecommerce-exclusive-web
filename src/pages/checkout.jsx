import Advise from "../components/advise";
import Header from "../components/header";
import { useState, useRef } from "react";

import product from "../assets/product.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormCheckout from "../components/formCheckout";

export default function Checkout() {
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
              Account
            </a>{" "}
            /{" "}
            <a className="opacity-50" href="">
              My Account
            </a>{" "}
            /{" "}
            <a className="opacity-50" href="">
              Product
            </a>{" "}
            /{" "}
            <a className="opacity-50" href="">
              View Cart
            </a>{" "}
            / <a href="">Checkout</a>
          </p>
        </div>
        {/*  */}

        <div className="container flex flex-row gap-40">
          {/*  */}
          <div className="container flex flex-col gap-10">
            <h2 className="text-4xl font-medium">Billing Details</h2>

            <div className="container flex flex-col gap-7">
              <FormCheckout
                label={"First Name*"}
                type={"text"}
                name={"fname"}
              />
              <FormCheckout
                label={"Company Name"}
                type={"text"}
                name={"fcompany"}
              />
              <FormCheckout
                label={"Street Address*"}
                type={"text"}
                name={"fstreet"}
              />
              <FormCheckout
                label={"Apartment, floor, etc. (optional)"}
                type={"text"}
                name={"fplace"}
              />
              <FormCheckout label={"Town/City*"} type={"text"} name={"fcity"} />
              <FormCheckout
                label={"Phone Number*"}
                type={"tel"}
                name={"fphone"}
              />
              <FormCheckout
                label={"Email Address*"}
                type={"email"}
                name={"femail"}
              />

              <div className="container flex flex-row gap-2">
                <input type="checkbox" />
                <p className="text-base font-normal">
                  Save this information for faster check-out next time
                </p>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="container flex flex-col gap-5 justify-center">
            {/*  */}
            <div className="container flex flex-row pr-20">
              <div className="container flex flex-row gap-3 items-center">
                <img className="w-10" src={product} alt="" />
                <p className="text-base font-normal">HI Gamepad</p>
              </div>
              <div className="container flex justify-end items-center">
                <p className="text-base font-normal">${price * value}</p>
              </div>
            </div>

            {/*  */}
            <div className="container flex flex-col pr-20">
              <div className="container flex flex-row justify-between py-3 border-black border-b-[1px] border-opacity-50">
                <p className="text-base font-normal">Subtotal:</p>
                <p className="text-base font-normal">${price * value}</p>
              </div>
              <div className="container flex flex-row justify-between py-3 border-black border-b-[1px] border-opacity-50">
                <p className="text-base font-normal">Shipping:</p>
                <p className="text-base font-normal">Free</p>
              </div>
              <div className="container flex flex-row justify-between py-3 ">
                <p className="text-base font-normal">Total:</p>
                <p className="text-base font-normal">${price * value}</p>
              </div>
            </div>

            {/*  */}
            <div className="container flex flex-col gap-5">
              {/*  */}
              <form className="flex flex-col gap-5" action="">
                <div className="flex flex-row gap-3">
                  <input
                    type="radio"
                    id="bank"
                    name="fav_payment"
                    value="Bank"
                  />
                  <label for="html">Bank</label>
                </div>

                <div className="flex flex-row gap-3">
                  <input
                    type="radio"
                    id="cod"
                    name="fav_payment"
                    value="Cash on delivery"
                  />
                  <label for="javascript">Cash on delivery</label>
                </div>
              </form>
              {/*  */}
              <div className="container flex flex-row gap-4">
                <div className="container px-5 py-3 border-[1px] border-opacity-50 border-black rounded-md">
                  <input
                    className="focus:outline-none text-base font-normal"
                    placeholder="Coupon Code"
                    type="text"
                  />
                </div>
                <button className="container w-2/3 flex justify-center items-center text-white text-base font-medium bg-[#DB4444] rounded-md">
                  Apply Coupon
                </button>
              </div>
            </div>
            {/*  */}
            <div className="container flex justify-start">
              <button className="px-10 py-3 flex justify-center text-white text-base font-medium bg-[#DB4444] rounded-md">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
