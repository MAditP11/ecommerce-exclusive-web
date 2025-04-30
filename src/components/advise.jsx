import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function Advise() {
  return (
    <div className="container-language bg-black h-12 flex items-center">
      <div className="container flex flex-row justify-between mx-auto">
        <div className=""></div>
        <div className="advise flex flex-row gap-2">
          <p className="text-sm text-white">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <p className="text-sm text-white font-semibold underline">Shop Now</p>
        </div>
        <div className="language flex flex-row gap-2 items-center justify-end">
          <p className="text-sm text-white">English</p>
          <FontAwesomeIcon icon={faAngleDown} className="text-sm text-white" />
        </div>
      </div>
    </div>
  );
}
