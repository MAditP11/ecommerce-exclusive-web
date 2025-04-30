export default function Button({ Class, title }) {
  return (
    <div className={Class}>
      <button className="px-8 py-3 text-base font-medium text-white rounded-md bg-[#DB4444]">
        {title}
      </button>
    </div>
  );
}
