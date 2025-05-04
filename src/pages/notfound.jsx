import Advise from "../components/advise";
import Header from "../components/header";

export default function NotFound() {
  return (
    <div className="">
      <Advise />

      <Header />

      <div className="container m-auto flex flex-col justify-center items-center gap-5 h-96">
        <h1 className="text-8xl">404 Not Found</h1>
        <p>Your visited page not found. You may go home page.</p>
        <button className="font-medium rounded-md px-10 py-3 text-white bg-[#DB4444]">
          Back to Home Page
        </button>
      </div>
    </div>
  );
}
