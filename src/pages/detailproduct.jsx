import Advise from "../components/advise";
import Header from "../components/header";
import ContainerInfoAbout from "../components/container_info_about";
import bagian1 from "../assets/detailProduct/bagian1.png";
import bagian2 from "../assets/detailProduct/bagian2.png";
import bagian3 from "../assets/detailProduct/bagian3.png";
import bagian4 from "../assets/detailProduct/bagian4.png";
import bagian5 from "../assets/detailProduct/bagian5.png";
import FormAccount from "../components/formAccount";
import ContainerAdvantage from "../components/container_advantage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../components/rating";
import { useState, useRef } from "react";
import {
  faHeart,
  faMinus,
  faPlus,
  faRotateBack,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import ContainerProduct from "../components/container_product";

export default function DetailProduct() {
  const size = ["XS", "S", "M", "L", "XL"];
  const [option, setOption] = useState(null);
  const [count, setCount] = useState(1);
  const inputRef = useRef(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.select();
    }
  };

  const changeValue = (e) => {
    const newValue = e.target.value;

    if (newValue.length < 3) {
      if (Number(newValue) === 0 || Number(count) < 0) {
        setCount(1);
      } else {
        setCount(Number(newValue));
      }
    }
  };

  const blurValue = () => {
    if (count === 0 || isNaN(count)) {
      setCount(1);
    }
  };

  const [optionSize, setOptionSize] = useState(null);
  const OptionSelected = (idOption) => {
    setOption(idOption);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
    if (count <= 1) {
      setCount(1);
    }
  };

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div className="">
      <Advise />
      <Header />

      {/*  */}
      <div className="container mx-auto flex flex-col gap-14 py-14">
        <div className="flex">
          <p className="text-sm font-normal tracking-widest">
            <a className="opacity-50" href="">
              Account
            </a>{" "}
            /{" "}
            <a className="opacity-50" href="">
              Gaming
            </a>{" "}
            / <a href="">Havic HV G-92 Gamepad</a>
          </p>
        </div>

        <div className="container flex flex-row gap-14">
          {/*  */}
          <div className="container flex flex-row gap-5">
            <div className=" flex flex-col gap-5">
              <div className=" p-4 bg-[#F5F5F5]">
                <img src={bagian2} alt="" />
              </div>
              <div className=" p-4 bg-[#F5F5F5]">
                <img src={bagian3} alt="" />
              </div>
              <div className=" p-4 bg-[#F5F5F5]">
                <img src={bagian4} alt="" />
              </div>
              <div className=" p-4 bg-[#F5F5F5]">
                <img src={bagian5} alt="" />
              </div>
            </div>
            <div className="container bg-[#F5F5F5] flex justify-center items-center">
              <img className="" src={bagian1} alt="" />
            </div>
          </div>

          <div className="container w-2/5 flex flex-col">
            <div className="flex flex-col gap-3 border-b-2 pb-5">
              <h2 className="text-2xl font-semibold">Havic HV G-92 Gamepad</h2>
              <div className="flex flex-row gap-3 items-center">
                <div className="flex flex-row gap-2">
                  <Rating />
                  <Rating />
                  <Rating />
                  <Rating />
                  <Rating />
                </div>
                <div className="pr-3 border-r-[1px]">
                  <p className="text-sm opacity-50">(150 Reviews)</p>
                </div>
                <p className="text-sm text-[#00FF66] opacity-60">In Stock</p>
              </div>
              <p className="text-2xl">$192.00</p>
              <p className="text-sm">
                PlayStation 5 Controller Skin High quality vinyl with air
                channel adhesive for easy bubble free install & mess free
                removal Pressure sensitive.
              </p>
            </div>

            <div className="container flex flex-col gap-8 pt-5">
              <div className="container flex flex-col gap-4">
                <div className="flex flex-row gap-5 items-center">
                  <p className="text-xl">Colours:</p>
                  <div className="flex flex-row gap-3 group items-center">
                    <button
                      id="option1"
                      onClick={() => OptionSelected("option1")}
                      className={`${
                        option === "option1"
                          ? "bg-blue-500 p-3 border-2 border-black rounded-full"
                          : "bg-blue-500 p-3 rounded-full"
                      }`}
                    ></button>
                    <button
                      id="option2"
                      onClick={() => OptionSelected("option2")}
                      className={`${
                        option === "option2"
                          ? "bg-red-500 p-3 border-2 border-black rounded-full"
                          : "bg-red-500 p-3 rounded-full"
                      }`}
                    ></button>
                  </div>
                </div>

                <div className="flex flex-row gap-5 items-center">
                  <p className="text-xl">Size:</p>
                  <div className="flex flex-row gap-3 items-center">
                    {size.map((size, index) => (
                      <button
                        key={index}
                        className={`text-sm font-medium border-[1px] w-8 h-8 rounded-md ${
                          optionSize === index
                            ? "bg-[#DB4444] text-white"
                            : "border-[1px] border-black"
                        }`}
                        onClick={() => setOptionSize(index)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-row gap-4 items-center">
                  <div className="flex flex-row">
                    <button
                      className=" px-2.5 text-xl border-[1px] rounded-l-md"
                      onClick={decrement}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <div className=" py-2 w-16 border-[1px] flex items-center justify-center">
                      <input
                        type="text"
                        value={count}
                        ref={inputRef}
                        onFocus={handleFocus}
                        onBlur={blurValue}
                        onChange={changeValue}
                        className="focus:outline-none w-full text-center text-xl"
                      />
                    </div>

                    <button
                      className=" px-2.5 text-xl border-[1px] rounded-r-md"
                      onClick={increment}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>

                  <button className="h-full text-white font-medium bg-[#DB4444] py-2.5  px-7 rounded-md">
                    Buy Now
                  </button>

                  <div className="h-full border-[1px] py-2.5 px-3 flex items-center rounded-md">
                    <FontAwesomeIcon className="text-xl" icon={faHeart} />
                  </div>
                </div>
              </div>

              <div className="container flex flex-col">
                <div className="container flex flex-row px-3 py-5 items-center gap-5 rounded-t-md border-[1px] border-black">
                  <FontAwesomeIcon className="text-3xl" icon={faTruckFast} />
                  <div className="flex flex-col gap-2">
                    <p className="font-medium">Free Delivery</p>
                    <p className="font-medium text-xs underline">
                      Enter your postal code for Delivery Availability
                    </p>
                  </div>
                </div>

                <div className="container flex flex-row px-3 py-5 items-center gap-5 rounded-b-md border-[1px] border-black">
                  <FontAwesomeIcon className="text-3xl" icon={faRotateBack} />
                  <div className="flex flex-col gap-2">
                    <p className="font-medium">Return Delivery</p>
                    <p className="font-medium text-xs">
                      Free 30 Days Delivery Returns.{" "}
                      <span className="underline">Details</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="container-view container flex flex-col mx-auto py-20 gap-7 border-b-2">
          <div className="title container flex flex-row gap-3">
            <div className="bg-[#DB4444] w-4 rounded-sm"></div>
            <h2 className="text-[#DB4444] text-base font-semibold">
              Related Item
            </h2>
          </div>
          <div className="view-product container">
            <div className="container flex flex-row gap-7">
              <ContainerProduct />
              <ContainerProduct />
              <ContainerProduct />
              <ContainerProduct />
              <ContainerProduct />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
