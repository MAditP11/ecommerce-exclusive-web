import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import product from "../assets/product.png";
import Rating from "./rating";
import { useState } from "react";

export default function ContainerProduct() {
  const [whislist, setWhislist] = useState(false);
  const navButton = () => {
    window.location.href = "/detail-product";
  };

  const addWhislist = () => {
    setWhislist(!whislist);
  };

  return (
    <div className="container flex flex-col gap-5">
      <div className="relative flex w-64 h-64 rounded-md bg-[#F5F5F5]">
        <img className="object-scale-down" src={product} alt="" />
        <div className="absolute px-3 py-1 top-3 left-3 rounded-md bg-[#DB4444] z-10">
          <p className="text-xs text-white">-40%</p>
        </div>

        <button
          className="absolute px-2 py-1 top-3 right-3 rounded-full bg-white z-10"
          onClick={addWhislist}
        >
          <FontAwesomeIcon
            className={`${whislist === true ? "text-[#DB4444]" : ""}`}
            icon={faHeart}
          />
        </button>

        <button
          className="absolute px-2 py-1 top-12 right-3 rounded-full bg-white z-10"
          onClick={navButton}
        >
          <FontAwesomeIcon icon={faEye} />
        </button>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-base font-medium">HAVIT HV-G92 Gamepad</p>
        <div className="flex flex-row gap-2">
          <p className="font-medium text-base text-[#DB4444]">$120</p>
          <p className="font-medium text-base opacity-50 line-through">$160</p>
        </div>
        <div className="flex flex-row gap-2">
          <div className="flex flex-row gap-1">
            <Rating />
            <Rating />
            <Rating />
            <Rating />
            <Rating />
          </div>
          <p className="text-sm font-semibold opacity-50">(88)</p>
        </div>
      </div>
    </div>
  );
}
