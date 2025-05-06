import {
  faHeart,
  faNoteSticky,
  faStar,
  faUser,
  faUserCircle,
  faXmarkCircle,
} from "@fortawesome/free-regular-svg-icons";
import {
  faSearch,
  faCartShopping,
  faArrowLeftRotate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavHeader from "./navHeader";
import { useState } from "react";
import ModalNav from "./modalNav";
export default function Header({
  hiddenIcon,
  hiddenUser,
  activeHome,
  activeContact,
  activeAbout,
  activeSignUp,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openUser = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="container-navbar container  relative flex flex-row m-auto w-screen pt-7 pb-3 border-b-2 items-center">
      <div className="brand container">
        <a className="text-2xl font-bold" href="/">
          Exclusive{" "}
        </a>
      </div>

      <div className="navbar container flex justify-center gap-10 items-center ">
        <NavHeader name={"Home"} active={activeHome} href={"/"} />
        <NavHeader name={"Contact"} active={activeContact} href={"/contact"} />
        <NavHeader name={"About"} active={activeAbout} href={"/about"} />
        <NavHeader name={"Sign Up"} active={activeSignUp} href={"/signup"} />
      </div>

      <div className="container flex justify-end gap-5 items-center">
        <div className="searh flex flex-row items-center gap-3 bg-slate-200 py-2 px-3 rounded-md">
          <input
            className="text-xs text-black focus:outline-none bg-slate-200"
            type="text"
            id="search"
            placeholder="what are you looking for?"
          />
          <FontAwesomeIcon icon={faSearch} className="text-lg" />
        </div>
        <div
          className={`flex gap-5 items-center ${
            hiddenIcon === true ? "hidden" : ""
          }`}
        >
          <a href="/whislist">
            <FontAwesomeIcon icon={faHeart} className="text-xl" />
          </a>
          <a href="/cart">
            <FontAwesomeIcon icon={faCartShopping} className="text-xl" />
          </a>
          <button
            className={`${hiddenUser === true ? "hidden" : ""}`}
            onClick={openUser}
          >
            <FontAwesomeIcon icon={faUserCircle} className="text-xl" />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="absolute container inset-0 flex justify-end bg-opacity-50 z-50 top-14 h-48">
          <div className="bg-black/25 backdrop-blur-md p-6 rounded shadow-md flex flex-col gap-3">
            <ModalNav icon={faUser} title={"Manage My Account"} />
            <ModalNav icon={faNoteSticky} title={"My Order"} />
            <ModalNav icon={faXmarkCircle} title={"My Cancellations"} />
            <ModalNav icon={faStar} title={"Manage My Reviews"} />
            <ModalNav icon={faArrowLeftRotate} title={"Logout"} />
          </div>
        </div>
      )}
    </div>
  );
}
