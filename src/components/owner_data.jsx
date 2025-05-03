import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function OwnerData({ img, name, position }) {
  return (
    <div className="container flex flex-col gap-4">
      <div className=" container flex justify-center bg-[#F5F5F5] px-5 pt-5">
        <img className="" src={img} alt="" />
      </div>
      <div className="container flex flex-col gap-2">
        <h3 className="text-3xl font-medium">{name}</h3>
        <p>{position}</p>
        <div className="flex flex-row gap-3">
          <a href="">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
}
