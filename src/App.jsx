import jumbotron from "./assets/jumbotron.png";
import jumbotron2 from "./assets/jumbotron2.png";
import product from "./assets/product.png";
import newArrival from "./assets/newArrival1.png";
import newArrival2 from "./assets/newArrival2.png";
import newArrival3 from "./assets/newArrival3.png";
import newArrival4 from "./assets/newArrival4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleRight,
  faAngleDown,
  faCartShopping,
  faSearch,
  faArrowRight,
  faArrowLeft,
  faMobileAndroid,
  faComputer,
  faCamera,
  faHeadphones,
  faGamepad,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
export default function App() {
  return (
    <div className="contaner">
      {/*  */}
      <div className="container-language bg-black h-12 flex items-center">
        <div className="container flex flex-row justify-between mx-auto">
          <div className=""></div>
          <div className="advise flex flex-row gap-2">
            <p className="text-sm text-white">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <p className="text-sm text-white font-semibold underline">
              Shop Now
            </p>
          </div>
          <div className="language flex flex-row gap-2 items-center justify-end">
            <p className="text-sm text-white">English</p>
            <FontAwesomeIcon
              icon={faAngleDown}
              className="text-sm text-white"
            />
          </div>
        </div>
      </div>

      {/*  */}
      <div className="container-navbar container flex flex-row m-auto w-screen pt-7 pb-3 border-b-2 items-center">
        <div className="brand container">
          <h1 className="text-2xl font-bold">Exclusive </h1>
        </div>

        <div className="navbar container flex justify-center gap-10 ">
          <a className="" href="">
            <p className="text-base">Home</p>
          </a>
          <a href="">
            <p className="text-base">Contact</p>
          </a>
          <a href="">
            <p className="text-base">About</p>
          </a>
          <a href="">
            <p className="text-base">Sign Up</p>
          </a>
        </div>

        <div className="container flex justify-end gap-5 items-center">
          <div className="searh flex flex-row items-center gap-3 bg-slate-200 py-2 px-3 rounded-md">
            <p className="text-xs">what are you looking for?</p>
            <FontAwesomeIcon icon={faSearch} className="text-lg" />
          </div>

          <FontAwesomeIcon icon={faHeart} className="text-xl" />
          <FontAwesomeIcon icon={faCartShopping} className="text-xl" />
        </div>
      </div>

      {/*  */}
      <div className="container-jumbotron container m-auto flex flex-row">
        <div className="navside container flex flex-col gap-3 border-r-2 w-1/4 pt-7">
          <div className="nav flex flex-row items-center justify-between pr-7">
            <a href="">
              <p className="text-base">Women Fashion</p>
            </a>
            <FontAwesomeIcon icon={faAngleRight} className="text-xl" />
          </div>

          <div className="nav flex flex-row items-center justify-between pr-7">
            <a href="">
              <p className="text-base">Men Fashion</p>
            </a>
            <FontAwesomeIcon icon={faAngleRight} className="text-xl" />
          </div>
          <a href="">
            <p className="text-base">Electronics</p>
          </a>
          <a href="">
            <p className="text-base">Home & Lifestyle</p>
          </a>
          <a href="">
            <p className="text-base">Medicines</p>
          </a>
          <a href="">
            <p className="text-base">Support & Outdoor</p>
          </a>
          <a href="">
            <p className="text-base">Baby & Toy</p>
          </a>
          <a href="">
            <p className="text-base">Grocire & Pet</p>
          </a>
          <a href="">
            <p className="text-base">Health & Beauty</p>
          </a>
        </div>
        <div className="jumbotron container pt-10 pl-10">
          <img className="object-fill w-full" src={jumbotron} alt="" />
        </div>
      </div>

      {/*  */}
      <div className="container-view container flex flex-col mx-auto py-20 gap-7 border-b-2">
        <div className="title container flex flex-row gap-3">
          <div className="bg-[#DB4444] w-4 rounded-sm"></div>
          <h2 className="text-[#DB4444] text-base font-semibold">Today's</h2>
        </div>
        <div className="flash-sale container">
          <div className="container flex flex-row">
            <div className="container">
              <h2 className="text-4xl font-semibold">Flash Sales</h2>
            </div>
            <div className="container">
              <h2>Duration time</h2>
            </div>
            <div className="container flex justify-end gap-5">
              <div className="py-1 px-3 rounded-full flex items-center bg-[#F5F5F5]">
                <FontAwesomeIcon icon={faArrowLeft} />
              </div>

              <div className="py-1 px-3 rounded-full flex items-center bg-[#F5F5F5]">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
        </div>
        <div className="view-product container">
          <div className="container flex flex-row gap-7">
            {/*  */}
            <div className="container flex flex-col gap-5">
              <div className="relative flex w-64 h-64 rounded-md bg-[#F5F5F5]">
                <img className="object-scale-down" src={product} alt="" />
                <div className="absolute px-3 py-1 top-3 left-3 rounded-md bg-[#DB4444] z-10">
                  <p className="text-xs text-white">-40%</p>
                </div>
                <div className="absolute px-2 py-1 top-3 right-3 rounded-full bg-white z-10">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
                <div className="absolute px-2 py-1 top-12 right-3 rounded-full bg-white z-10">
                  <FontAwesomeIcon icon={faEye} />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-base font-medium">HAVIT HV-G92 Gamepad</p>
                <div className="flex flex-row gap-2">
                  <p className="font-medium text-base text-[#DB4444]">$120</p>
                  <p className="font-medium text-base opacity-50 line-through">
                    $160
                  </p>
                </div>
                <div className="flex flex-row gap-2">
                  <div className="flex flex-row gap-1">
                    <FontAwesomeIcon className="text-[#FFAD33]" icon={faStar} />
                    <FontAwesomeIcon className="text-[#FFAD33]" icon={faStar} />
                    <FontAwesomeIcon className="text-[#FFAD33]" icon={faStar} />
                    <FontAwesomeIcon className="text-[#FFAD33]" icon={faStar} />
                    <FontAwesomeIcon className="text-[#FFAD33]" icon={faStar} />
                  </div>
                  <p className="text-sm font-semibold opacity-50">(88)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="button-view container flex justify-center">
          <button className="px-8 py-3 text-base font-medium text-white rounded-md bg-[#DB4444]">
            View All Products
          </button>
        </div>
      </div>

      {/*  */}
      <div className="container-view container flex flex-col mx-auto py-20 gap-7 border-b-2">
        <div className="title container flex flex-row gap-3">
          <div className="bg-[#DB4444] w-4 rounded-sm"></div>
          <h2 className="text-[#DB4444] text-base font-semibold">Categories</h2>
        </div>
        <div className="flash-sale container">
          <div className="container flex flex-row">
            <div className="container">
              <h2 className="text-4xl font-semibold">Browse By Categories</h2>
            </div>

            <div className="container flex justify-end gap-5">
              <div className="py-1 px-3 rounded-full flex items-center bg-[#F5F5F5]">
                <FontAwesomeIcon icon={faArrowLeft} />
              </div>

              <div className="py-1 px-3 rounded-full flex items-center bg-[#F5F5F5]">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
        </div>
        <div className="list-categories container">
          <div className="container flex flex-row justify-between">
            <div className="container flex w-40 h-40 rounded-md border-2 flex-col justify-center items-center gap-5">
              <FontAwesomeIcon className="text-4xl" icon={faMobileAndroid} />
              <p className="text-base font-normal">Phones</p>
            </div>
            <div className="container flex w-40 h-40 rounded-md border-2 flex-col justify-center items-center gap-5">
              <FontAwesomeIcon className="text-4xl" icon={faComputer} />
              <p className="text-base font-normal">Computers</p>
            </div>
            <div className="container flex w-40 h-40 rounded-md border-2 flex-col justify-center items-center gap-5">
              <FontAwesomeIcon className="text-4xl" icon={faClock} />
              <p className="text-base font-normal">Smart Watch</p>
            </div>
            <div className="container flex w-40 h-40 bg-[#DB4444] rounded-md border-2 flex-col justify-center items-center gap-5">
              <FontAwesomeIcon
                className="text-4xl text-white"
                icon={faCamera}
              />
              <p className="text-base font-normal text-white">Cameras</p>
            </div>
            <div className="container flex w-40 h-40 rounded-md border-2 flex-col justify-center items-center gap-5">
              <FontAwesomeIcon className="text-4xl" icon={faHeadphones} />
              <p className="text-base font-normal">Head Phones</p>
            </div>
            <div className="container flex w-40 h-40 rounded-md border-2 flex-col justify-center items-center gap-5">
              <FontAwesomeIcon className="text-4xl" icon={faGamepad} />
              <p className="text-base font-normal">Gaming</p>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="container-view container flex flex-col mx-auto py-20 gap-7">
        <div className="title container flex flex-row gap-3">
          <div className="bg-[#DB4444] w-4 rounded-sm"></div>
          <h2 className="text-[#DB4444] text-lg font-semibold">This Month</h2>
        </div>
        <div className="categories container">
          <div className="container flex flex-row">
            <div className="container">
              <h2 className="text-4xl font-semibold">Best Selling Product</h2>
            </div>
            <div className="container flex justify-end">
              <button className="px-8 py-3 text-base font-medium text-white rounded-md bg-[#DB4444]">
                View All
              </button>
            </div>
          </div>
        </div>
        <div className="list-categories container">
          <div className="container flex flex-row gap-7">
            {/*  */}
            <div className="container flex flex-col gap-5">
              <div className="relative flex w-64 h-64 rounded-md bg-[#F5F5F5]">
                <img className="object-scale-down" src={product} alt="" />
                <div className="absolute px-2 py-1 top-3 right-3 rounded-full bg-white z-10">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
                <div className="absolute px-2 py-1 top-12 right-3 rounded-full bg-white z-10">
                  <FontAwesomeIcon icon={faEye} />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-base font-medium">HAVIT HV-G92 Gamepad</p>
                <div className="flex flex-row gap-2">
                  <p className="font-medium text-base text-[#DB4444]">$120</p>
                  <p className="font-medium text-base opacity-50 line-through">
                    $160
                  </p>
                </div>
                <div className="flex flex-row gap-2">
                  <div className="flex flex-row gap-1">
                    <FontAwesomeIcon className="text-[#FFAD33]" icon={faStar} />
                    <FontAwesomeIcon className="text-[#FFAD33]" icon={faStar} />
                    <FontAwesomeIcon className="text-[#FFAD33]" icon={faStar} />
                    <FontAwesomeIcon className="text-[#FFAD33]" icon={faStar} />
                    <FontAwesomeIcon className="text-[#FFAD33]" icon={faStar} />
                  </div>
                  <p className="text-sm font-semibold opacity-50">(88)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="container flex justify-center mx-auto">
        <img className="object-fill w-full" src={jumbotron2} alt="" />
      </div>

      {/*  */}
      <div className="container-view container flex flex-col mx-auto py-20 gap-7">
        <div className="title container flex flex-row gap-3">
          <div className="bg-[#DB4444] w-4 rounded-sm"></div>
          <h2 className="text-[#DB4444] text-base font-semibold">
            Our Products
          </h2>
        </div>
        <div className="flash-sale container">
          <div className="container flex flex-row">
            <div className="container">
              <h2 className="text-4xl font-semibold">Explore Our Products</h2>
            </div>
            <div className="container flex justify-end gap-5">
              <div className="py-1 px-3 rounded-full flex items-center bg-[#F5F5F5]">
                <FontAwesomeIcon icon={faArrowLeft} />
              </div>

              <div className="py-1 px-3 rounded-full flex items-center bg-[#F5F5F5]">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
        </div>
        <div className="view-product container">
          <div className="container grid grid-cols-4 gap-5">
            {/*  */}
            <div className="container flex flex-col gap-5">
              <div className="relative flex w-64 h-64 rounded-md bg-[#F5F5F5]">
                <img className="object-scale-down" src={product} alt="" />
                <div className="absolute px-2 py-1 top-3 right-3 rounded-full bg-white z-10">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
                <div className="absolute px-2 py-1 top-12 right-3 rounded-full bg-white z-10">
                  <FontAwesomeIcon icon={faEye} />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-base font-medium">HAVIT HV-G92 Gamepad</p>
                <div className="flex flex-row gap-2 items-center">
                  <p className="font-medium text-base text-[#DB4444]">$120</p>
                  <div className="flex flex-row gap-1">
                    <FontAwesomeIcon className="text-[#FFAD33]" icon={faStar} />
                    <FontAwesomeIcon className="text-[#FFAD33]" icon={faStar} />
                    <FontAwesomeIcon className="text-[#FFAD33]" icon={faStar} />
                    <FontAwesomeIcon className="text-[#FFAD33]" icon={faStar} />
                    <FontAwesomeIcon className="text-[#FFAD33]" icon={faStar} />
                  </div>
                  <p className="text-sm font-semibold opacity-50">(88)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="button-view container flex justify-center">
          <button className="px-8 py-3 text-base font-medium text-white rounded-md bg-[#DB4444]">
            View All Products
          </button>
        </div>
      </div>

      {/*  */}
      <div className="container-view container flex flex-col mx-auto py-20 gap-7">
        <div className="title container flex flex-row gap-3">
          <div className="bg-[#DB4444] w-4 rounded-sm"></div>
          <h2 className="text-[#DB4444] text-base font-semibold">Featured</h2>
        </div>

        <div className="new-arrival container">
          <h2 className="text-4xl font-semibold">New Arrival</h2>
        </div>

        <div className="view-product container">
          <div className="container flex flex-row gap-7">
            <div className="container flex rounded-md bg-slate-500">
              <img className="object-fill w-full" src={newArrival} alt="" />
            </div>
            <div className="container flex flex-col items-center justify-between">
              <div className="container flex rounded-md bg-slate-500">
                <img className="object-fill w-full" src={newArrival2} alt="" />
              </div>
              <div className="container flex flex-row gap-7">
                <div className="container flex rounded-md bg-slate-500">
                  <img
                    className="object-fill w-full"
                    src={newArrival3}
                    alt=""
                  />
                </div>
                <div className="container flex rounded-md bg-slate-500">
                  <img
                    className="object-fill w-full"
                    src={newArrival4}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="advantage container flex flex-row mx-auto py-20">
        <div className="container flex flex-col items-center gap-2">
          <div className="container bg-slate-400 w-10 h-10 rounded-full"></div>
          <h2>FREE AND FAST DELIVERY</h2>
          <h5>Free delivery for all orders over $140</h5>
        </div>

        <div className="container flex flex-col items-center gap-2">
          <div className="container bg-slate-400 w-10 h-10 rounded-full"></div>
          <h2>FREE AND FAST DELIVERY</h2>
          <h5>Free delivery for all orders over $140</h5>
        </div>

        <div className="container flex flex-col items-center gap-2">
          <div className="container bg-slate-400 w-10 h-10 rounded-full"></div>
          <h2>FREE AND FAST DELIVERY</h2>
          <h5>Free delivery for all orders over $140</h5>
        </div>
      </div>

      {/*  */}
      <div className="footer mx-auto bg-gray-500 pt-10 pb-5 w-screen right-0 left-0">
        <div className="container flex flex-col gap-10 items-center m-auto">
          <div className="container flex flex-row gap-5">
            <div className="container flex flex-col gap-3">
              <h2>Exclusive</h2>
              <h3>Subcribe</h3>
            </div>
            <div className="container flex flex-col gap-3">
              <h2>Exclusive</h2>
              <h3>Subcribe</h3>
            </div>
            <div className="container flex flex-col gap-3">
              <h2>Exclusive</h2>
              <h3>Subcribe</h3>
            </div>
            <div className="container flex flex-col gap-3">
              <h2>Exclusive</h2>
              <h3>Subcribe</h3>
            </div>
            <div className="container flex flex-col gap-3">
              <h2>Exclusive</h2>
              <h3>Subcribe</h3>
            </div>
          </div>
          <h5>Copyright</h5>
        </div>
      </div>
    </div>
  );
}
