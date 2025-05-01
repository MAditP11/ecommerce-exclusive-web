export default function FormCheckout({ label, type, name }) {
  return (
    <form action="" className="flex flex-col gap-7">
      <div className="container gap-3 flex flex-col">
        <label
          className="text-base font-normal opacity-40 text-black"
          htmlFor={name}
        >
          {label}
        </label>
        <input
          className="focus:outline-none bg-[#F5F5F5] py-2 px-3 text-base font-medium"
          type={type}
          id={name}
          name={name}
        />
      </div>
    </form>
  );
}
