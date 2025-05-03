import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContainerInfoAbout({ icon, count, p }) {
  return (
    <div className="container flex flex-col items-center gap-4 py-4 group hover:bg-[#DB4444] rounded-md border-2">
      <div className="container flex justify-center items-center">
        <div className="w-16 flex justify-center items-center bg-black py-3 px-4 group-hover:bg-white group-hover:border-slate-200 rounded-full border-8 border-slate-400">
          <FontAwesomeIcon
            className="text-white text-2xl group-hover:text-black"
            icon={icon}
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-3xl group-hover:text-white font-bold">{count}</h2>
        <h5 className="text-base group-hover:text-white font-normal">{p}</h5>
      </div>
    </div>
  );
}
