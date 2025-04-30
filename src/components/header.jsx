import { faHeart, faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Header({ hidden }) {
  return (
    <div className="container-navbar container flex flex-row m-auto w-screen pt-7 pb-3 border-b-2 items-center">
      <div className="brand container">
        <h1 className="text-2xl font-bold">Exclusive </h1>
      </div>

      <div className="navbar container flex justify-center gap-10 items-center ">
        <div className="hover:border-b-2 px-1 ">
          <a className="text-base" href="">
            Home
          </a>
        </div>
        <div className="hover:border-b-2 px-1 ">
          <a className="text-base" href="">
            Contract
          </a>
        </div>
        <div className="hover:border-b-2 px-1 ">
          <a className="text-base" href="">
            About
          </a>
        </div>
        <div className="hover:border-b-2 px-1 ">
          <a className="text-base" href="">
            Sign Up
          </a>
        </div>
      </div>

      <div className="container flex justify-end gap-5 items-center">
        <div className="searh flex flex-row items-center gap-3 bg-slate-200 py-2 px-3 rounded-md">
          <input
            className="text-xs bg-slate-200 text-black focus:outline-none"
            type="text"
            id="search"
            placeholder="what are you looking for?"
          />
          <FontAwesomeIcon icon={faSearch} className="text-lg" />
        </div>
        <div className={`flex gap-5 items-center ${hidden}`}>
          <a href="">
            <FontAwesomeIcon icon={faHeart} className="text-xl" />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faCartShopping} className="text-xl" />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faUserCircle} className="text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
