import jumbotron from "../assets/jumbotron.png";
import jumbotron2 from "../assets/jumbotron2.png";
import newArrival from "../assets/newArrival1.png";
import newArrival2 from "../assets/newArrival2.png";
import newArrival3 from "../assets/newArrival3.png";
import newArrival4 from "../assets/newArrival4.png";
import Header from "../components/header";
import ContainerCategory from "../components/container_category";
import ContainerProduct from "../components/container_product";
import Button from "../components/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleRight,
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
import ContainerAdvantage from "../components/container_advantage";
import Advise from "../components/advise";
export default function Home() {
  return (
    <div className="">
      {/*  */}
      <Advise />

      {/*  */}
      <Header />

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
        <Button
          Class={"button-view container flex justify-center"}
          title={"View All Products"}
        />
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
            <Button Class={"container flex justify-end"} title={"View All"} />
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

        <Button
          Class={"button-view container flex justify-center"}
          title={"View All Products"}
        />
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
        <ContainerAdvantage
          icon={faTruckFast}
          title={"FREE AND FAST DELIVERY"}
          p={"Free delivery for all orders over $140"}
        />
        <ContainerAdvantage
          icon={faHeadset}
          title={"24/7 CUSTOMER SERVICE"}
          p={"Friendly 24/7 customer support"}
        />
        <ContainerAdvantage
          icon={faCheckToSlot}
          title={"MONEY BACK GUARANTEE"}
          p={"We return money within 30 days"}
        />
      </div>

      {/*  */}
    </div>
  );
}
