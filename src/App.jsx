import jumbotron from "./assets/jumbotron.png";
import jumbotron2 from "./assets/jumbotron2.png";
import newArrival from "./assets/newArrival1.png";
import newArrival2 from "./assets/newArrival2.png";
import newArrival3 from "./assets/newArrival3.png";
import newArrival4 from "./assets/newArrival4.png";
import ContainerCategory from "./components/container_category";
import ContainerProduct from "./components/container_product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faHeart } from "@fortawesome/free-regular-svg-icons";
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
  faTruckFast,
  faHeadset,
  faCheckToSlot,
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
          <a href="">
            <FontAwesomeIcon icon={faHeart} className="text-xl" />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faCartShopping} className="text-xl" />
          </a>
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
            <div className="container w-2/3 flex items-center">
              <h2 className="text-4xl font-semibold">Flash Sales</h2>
            </div>
            <div className="container flex flex-row gap-3 items-center">
              <div className="flex flex-col">
                <p className="text-xs font-medium">Hours</p>
                <p className="text-3xl font-medium">12</p>
              </div>
              <div className="text-[#DB4444] text-3xl h-full flex items-center">
                <p>:</p>
              </div>
              <div className="flex flex-col">
                <p className="text-xs font-medium">Minutes</p>
                <p className="text-3xl font-medium">59</p>
              </div>
              <div className="text-[#DB4444] text-3xl h-full flex items-center">
                :
              </div>
              <div className="flex flex-col">
                <p className="text-xs font-medium">Seconds</p>
                <p className="text-3xl font-medium">59</p>
              </div>
            </div>
            <div className="container flex justify-end gap-5 items-center">
              <div className="py-1 px-3 rounded-full flex h-2/3 items-center bg-[#F5F5F5]">
                <FontAwesomeIcon icon={faArrowLeft} />
              </div>

              <div className="py-1 px-3 rounded-full flex h-2/3 items-center bg-[#F5F5F5]">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
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
            <ContainerCategory title="Phones" icon={faMobileAndroid} />
            <ContainerCategory title="Computers" icon={faComputer} />
            <ContainerCategory title="Smart Watch" icon={faClock} />
            <ContainerCategory title="Cameras" icon={faCamera} />
            <ContainerCategory title="Head Phones" icon={faHeadphones} />
            <ContainerCategory title="Gaming" icon={faGamepad} />
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
            <ContainerProduct />
            <ContainerProduct />
            <ContainerProduct />
            <ContainerProduct />
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
            <ContainerProduct />
            <ContainerProduct />
            <ContainerProduct />
            <ContainerProduct />
            <ContainerProduct />
            <ContainerProduct />
            <ContainerProduct />
            <ContainerProduct />
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
        <div className="container flex flex-col items-center gap-4">
          <div className="container  w-16 h-16 p-1 rounded-full flex justify-center items-center">
            <div className="bg-black p-3 rounded-full border-8 border-slate-400">
              <FontAwesomeIcon
                className="text-white text-2xl"
                icon={faTruckFast}
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold">FREE AND FAST DELIVERY</h2>
            <h5 className="text-sm font-normal">
              Free delivery for all orders over $140
            </h5>
          </div>
        </div>

        <div className="container flex flex-col items-center gap-4">
          <div className="container  w-16 h-16 p-1 rounded-full flex justify-center items-center">
            <div className="bg-black p-3 rounded-full border-8 border-slate-400">
              <FontAwesomeIcon
                className="text-white text-2xl"
                icon={faHeadset}
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold">24/7 CUSTOMER SERVICE</h2>
            <h5 className="text-sm font-normal">
              Friendly 24/7 customer support
            </h5>
          </div>
        </div>

        <div className="container flex flex-col items-center gap-4">
          <div className="container  w-16 h-16 p-1 rounded-full flex justify-center items-center">
            <div className="bg-black p-3 rounded-full border-8 border-slate-400">
              <FontAwesomeIcon
                className="text-white text-2xl"
                icon={faCheckToSlot}
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold">MONEY BACK GUARANTEE</h2>
            <h5 className="text-sm font-normal">
              We reurn money within 30 days
            </h5>
          </div>
        </div>
      </div>

      {/*  */}
      {/* <div className="footer mx-auto bg-gray-500 pt-10 pb-5 w-screen right-0 left-0">
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
      </div> */}
    </div>
  );
}
