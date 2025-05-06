import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ModalNav({ icon, title }) {
  return (
    <div className="container flex flex-row gap-3 items-center">
      <FontAwesomeIcon className=" text-white text-sm " icon={icon} />
      <a href="" className=" text-white text-sm ">
        {title}
      </a>
    </div>
  );
}
