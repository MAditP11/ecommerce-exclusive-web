import { useState } from "react";

export default function FormAccount({ label, type, name, placeholder, v }) {
  const [value, setValue] = useState(v);
  const changeValue = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
  };
  return (
    <form action="" className="container flex flex-col gap-7">
      <div className="container gap-3 flex flex-col">
        <label className="text-base font-normal text-black" htmlFor={name}>
          {label}
        </label>
        <input
          className="focus:outline-none bg-[#F5F5F5] placeholder:opacity-50 py-2 px-3 text-base font-normal"
          type={type}
          placeholder={placeholder}
          id={name}
          name={name}
          value={value}
          onChange={changeValue}
        />
      </div>
    </form>
  );
}
