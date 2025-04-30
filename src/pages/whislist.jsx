import Header from "../components/header";
import ContainerCategory from "../components/container_category";
import ContainerProduct from "../components/container_product";
import Button from "../components/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContainerAdvantage from "../components/container_advantage";
import Advise from "../components/advise";
import ContainerProductWhislist from "../components/container_product_whislist";
import { faEye, faTrashCan } from "@fortawesome/free-regular-svg-icons";
export default function Whislist() {
  return (
    <div className="">
      {/*  */}
      <Advise />

      {/*  */}
      <Header />

      {/*  */}
      <div className="container-view container flex flex-col mx-auto py-20 gap-7">
        <div className="categories container">
          <div className="container flex flex-row">
            <div className="title container flex flex-row gap-2 items-center">
              <h2 className=" text-xl font-normal">Whislist</h2>
              <h2 className=" text-xl font-normal">(4)</h2>
            </div>
            <div className="container flex justify-end">
              <button className="py-2 px-6 border-[1px] border-black text-base rounded-md font-semibold">
                <p>Move All To Bag</p>
              </button>
            </div>
          </div>
        </div>
        <div className="list-categories container">
          <div className="container flex flex-row gap-5">
            <ContainerProductWhislist icon={faTrashCan} />
            <ContainerProductWhislist icon={faTrashCan} />
            <ContainerProductWhislist icon={faTrashCan} />
            <ContainerProductWhislist icon={faTrashCan} />
          </div>
        </div>
      </div>

      {/*  */}
      <div className="container-view container flex flex-col mx-auto py-20 gap-7">
        <div className="categories container">
          <div className="container flex flex-row">
            <div className="title container flex flex-row gap-3 items-center">
              <div className="bg-[#DB4444] w-4 h-full rounded-sm"></div>
              <h2 className=" text-xl font-normal">Just For You</h2>
            </div>
            <div className="container flex justify-end">
              <button className="py-2 px-6 border-[1px] border-black text-base rounded-md font-semibold">
                <p>See All</p>
              </button>
            </div>
          </div>
        </div>
        <div className="list-categories container">
          <div className="container flex flex-row gap-5">
            <ContainerProductWhislist icon={faEye} />
            <ContainerProductWhislist icon={faEye} />
            <ContainerProductWhislist icon={faEye} />
            <ContainerProductWhislist icon={faEye} />
          </div>
        </div>
      </div>

      {/*  */}
    </div>
  );
}
