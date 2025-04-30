import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContainerAdvantage({ icon, title, p }) {
  return (
    <div className="container flex flex-col items-center gap-4">
      <div className="container  w-16 h-16 p-1 rounded-full flex justify-center items-center">
        <div className="bg-black p-3 rounded-full border-8 border-slate-400">
          <FontAwesomeIcon className="text-white text-2xl" icon={icon} />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-semibold">{title}</h2>
        <h5 className="text-sm font-normal">{p}</h5>
      </div>
    </div>
  );
}
