import Advise from "../components/advise";
import Header from "../components/header";
import jumbotron from "../assets/jumbotron_about.png";
import owner1 from "../assets/owner1.png";
import owner2 from "../assets/owner2.png";
import owner3 from "../assets/owner3.png";
import ContainerInfoAbout from "../components/container_info_about";
import {
  faBagShopping,
  faCheckToSlot,
  faCircleDollarToSlot,
  faHeadset,
  faMoneyCheckDollar,
  faStore,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import OwnerData from "../components/owner_data";
import ContainerAdvantage from "../components/container_advantage";

export default function About() {
  return (
    <div className="">
      <Advise />
      <Header />

      {/*  */}
      <div className="flex flex-col gap-40 py-10">
        <div className="flex flex-col gap-10">
          <div className="pl-10">
            <p className="text-sm font-normal tracking-widest">
              <a className="opacity-50" href="">
                Home
              </a>{" "}
              / <a href="">About</a>
            </p>
          </div>

          <div className="flex flex-row gap-20">
            <div className="container flex justify-center flex-col gap-12 pl-10 ">
              <h2 className="text-5xl font-semibold">Our Story</h2>
              <p className="text-base font-normal">
                Launced in 2015, Exclusive is South Asia’s premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region. <br />
                <br />
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </p>
            </div>

            <div className="container">
              <img src={jumbotron} alt="" />
            </div>
          </div>
        </div>

        <div className="container mx-auto flex flex-row gap-10">
          <ContainerInfoAbout
            icon={faStore}
            count={"10.5k"}
            p={"Sallers active our site"}
          />
          <ContainerInfoAbout
            icon={faMoneyCheckDollar}
            count={"33k"}
            p={"Mopnthly Produduct Sale"}
          />
          <ContainerInfoAbout
            icon={faBagShopping}
            count={"45.5k"}
            p={"Customer active in our site"}
          />
          <ContainerInfoAbout
            icon={faCircleDollarToSlot}
            count={"25k"}
            p={"Anual gross sale in our site"}
          />
        </div>

        <div className="container mx-auto flex flex-row gap-10">
          <OwnerData
            img={owner1}
            name={"Tom Cruise"}
            position={"Founder & Chairman"}
          />
          <OwnerData
            img={owner2}
            name={"Emma Wattson"}
            position={"Managing Director"}
          />

          <OwnerData
            img={owner3}
            name={"Will Smith"}
            position={"Product Designer"}
          />
        </div>

        <div className="advantage container flex flex-row mx-auto">
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
      </div>
    </div>
  );
}
