import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContainerCategory({ title, icon }) {
  return (
    <div className="container flex w-40 h-40 group hover:bg-[#DB4444] rounded-md border-2 flex-col justify-center items-center gap-5">
      <FontAwesomeIcon
        className="text-4xl group-hover:text-white"
        icon={icon}
      />
      <p className="text-base font-normal group-hover:text-white">{title}</p>
    </div>
  );
}
