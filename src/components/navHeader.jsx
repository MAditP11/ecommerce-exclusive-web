export default function NavHeader({ name, href, active }) {
  return (
    <div className={`${active === true ? "border-b-2 px-1 " : "px-1"}`}>
      <a className="text-base" href={href}>
        {name}
      </a>
    </div>
  );
}
