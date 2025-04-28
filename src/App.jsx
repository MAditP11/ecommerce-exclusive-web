import jumbotron from "./assets/jumbotron.png";
import jumbotron2 from "./assets/jumbotron2.png";

export default function App() {
  return (
    <div className="contaner w-full">
      <div className="container-navbar container flex flex-row m-auto w-screen p-10 border-b-2">
        <div className="brand container">
          <h1 className="">Exclusive </h1>
        </div>

        <div className="navbar container flex justify-center gap-10 ">
          <a className="" href="">
            Home
          </a>
          <a href="">Contact</a>
          <a href="">About</a>
          <a href="">Sign Up</a>
        </div>

        <div className="container flex justify-end gap-10">
          <button>Search</button>
          <button>Love</button>
          <button>Cart</button>
        </div>
      </div>

      {/*  */}
      <div className="container-jumbotron container m-auto flex flex-row">
        <div className="navside container flex flex-col gap-3 border-r-2 w-1/4 pt-7">
          <a href="">Women Fashion</a>
          <a href="">Men Fashion</a>
          <a href="">Electronics</a>
          <a href="">Home & Lifestyle</a>
          <a href="">Medicines</a>
          <a href="">Support & Outdoor</a>
          <a href="">Baby & Toy</a>
          <a href="">Grocire & Pet</a>
          <a href="">Health & Beauty</a>
        </div>
        <div className="jumbotron container pt-7 pl-7">
          <img src={jumbotron} alt="" />
        </div>
      </div>

      {/*  */}
      <div className="container-view container flex flex-col mx-auto py-20 gap-10 border-b-2">
        <div className="title container pl-5 border-l-8">
          <h2>Today's</h2>
        </div>
        <div className="flash-sale container">
          <div className="container flex flex-row">
            <div className="container">
              <h2>Flash Sales</h2>
            </div>
            <div className="container">
              <h2>Duration time</h2>
            </div>
            <div className="container flex justify-end">
              <button>Navigation</button>
            </div>
          </div>
        </div>
        <div className="view-product container">
          <div className="container flex flex-row gap-5">
            <div className="container flex w-1/5 h-72 rounded-md bg-slate-500"></div>
            <div className="container flex w-1/5 h-72 rounded-md bg-slate-500"></div>
            <div className="container flex w-1/5 h-72 rounded-md bg-slate-500"></div>
            <div className="container flex w-1/5 h-72 rounded-md bg-slate-500"></div>
            <div className="container flex w-1/5 h-72 rounded-md bg-slate-500"></div>
          </div>
        </div>
        <div className="button-view container flex justify-center">
          <button className="px-7 py-2 rounded-md bg-slate-500">
            View All Products
          </button>
        </div>
      </div>

      {/*  */}
      <div className="container-view container flex flex-col mx-auto py-20 gap-10 border-b-2">
        <div className="title container pl-5 border-l-8">
          <h2>Categories</h2>
        </div>
        <div className="categories container">
          <div className="container flex flex-row">
            <div className="container">
              <h2>Browse By Categories</h2>
            </div>
            <div className="container flex justify-end">
              <button>Navigation</button>
            </div>
          </div>
        </div>
        <div className="list-categories container">
          <div className="container flex flex-row gap-5">
            <div className="container flex w-1/6 h-40 rounded-md bg-slate-500"></div>
            <div className="container flex w-1/6 h-40 rounded-md bg-slate-500"></div>
            <div className="container flex w-1/6 h-40 rounded-md bg-slate-500"></div>
            <div className="container flex w-1/6 h-40 rounded-md bg-slate-500"></div>
            <div className="container flex w-1/6 h-40 rounded-md bg-slate-500"></div>
            <div className="container flex w-1/6 h-40 rounded-md bg-slate-500"></div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="container-view container flex flex-col mx-auto py-20 gap-10">
        <div className="title container pl-5 border-l-8">
          <h2>This Month</h2>
        </div>
        <div className="categories container">
          <div className="container flex flex-row">
            <div className="container">
              <h2>Best Selling Products</h2>
            </div>
            <div className="container flex justify-end">
              <button>View All</button>
            </div>
          </div>
        </div>
        <div className="list-categories container">
          <div className="container flex flex-row gap-5">
            <div className="container flex w-1/6 h-40 rounded-md bg-slate-500"></div>
            <div className="container flex w-1/6 h-40 rounded-md bg-slate-500"></div>
            <div className="container flex w-1/6 h-40 rounded-md bg-slate-500"></div>
            <div className="container flex w-1/6 h-40 rounded-md bg-slate-500"></div>
            <div className="container flex w-1/6 h-40 rounded-md bg-slate-500"></div>
            <div className="container flex w-1/6 h-40 rounded-md bg-slate-500"></div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="container flex justify-center mx-auto">
        <img src={jumbotron2} alt="" />
      </div>

      {/*  */}
      <div className="container-view container flex flex-col mx-auto py-20 gap-10">
        <div className="title container pl-5 border-l-8">
          <h2>Our Products</h2>
        </div>
        <div className="flash-sale container">
          <div className="container flex flex-row">
            <div className="container">
              <h2>Explores Our Products</h2>
            </div>
            <div className="container flex justify-end">
              <button>Navigation</button>
            </div>
          </div>
        </div>
        <div className="view-product container">
          <div className="container grid grid-cols-4 gap-5">
            <div className="container flex  h-72 rounded-md bg-slate-500"></div>
            <div className="container flex  h-72 rounded-md bg-slate-500"></div>
            <div className="container flex  h-72 rounded-md bg-slate-500"></div>
            <div className="container flex  h-72 rounded-md bg-slate-500"></div>
            <div className="container flex  h-72 rounded-md bg-slate-500"></div>
            <div className="container flex  h-72 rounded-md bg-slate-500"></div>
            <div className="container flex  h-72 rounded-md bg-slate-500"></div>
            <div className="container flex  h-72 rounded-md bg-slate-500"></div>
          </div>
        </div>
        <div className="button-view container flex justify-center">
          <button className="px-7 py-2 rounded-md bg-slate-500">
            View All Products
          </button>
        </div>
      </div>

      {/*  */}
      <div className="container-view container flex flex-col mx-auto py-20 gap-10">
        <div className="title container pl-5 border-l-8">
          <h2>Featured</h2>
        </div>
        <div className="flash-sale container">
          <div className="container flex flex-row">
            <h2>New Arrival</h2>
          </div>
        </div>
        <div className="view-product container">
          <div className="container flex flex-row gap-5">
            <div className="container flex  h-72 rounded-md bg-slate-500"></div>
            <div className="container flex flex-col items-center h-72 gap-5">
              <div className="container flex  h-36 rounded-md bg-slate-500"></div>
              <div className="container flex flex-row h-36 gap-5">
                <div className="container flex  h-36 rounded-md bg-slate-500"></div>
                <div className="container flex  h-36 rounded-md bg-slate-500"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="button-view container flex justify-center">
          <button className="px-7 py-2 rounded-md bg-slate-500">
            View All Products
          </button>
        </div>
      </div>

      {/*  */}
      <div className="advantage container flex flex-row mx-auto py-20">
        <div className="container flex flex-col items-center gap-2">
          <div className="container bg-slate-400 w-10 h-10 rounded-full"></div>
          <h2>FREE AND FAST DELIVERY</h2>
          <h5>Free delivery for all orders over $140</h5>
        </div>

        <div className="container flex flex-col items-center gap-2">
          <div className="container bg-slate-400 w-10 h-10 rounded-full"></div>
          <h2>FREE AND FAST DELIVERY</h2>
          <h5>Free delivery for all orders over $140</h5>
        </div>

        <div className="container flex flex-col items-center gap-2">
          <div className="container bg-slate-400 w-10 h-10 rounded-full"></div>
          <h2>FREE AND FAST DELIVERY</h2>
          <h5>Free delivery for all orders over $140</h5>
        </div>
      </div>

      {/*  */}
      <div className="footer mx-auto bg-gray-500 pt-10 pb-5 w-screen right-0 left-0">
        <div className="container flex flex-col gap-10 items-center m-auto">
          <div className="container flex flex-row gap-5">
            <div className="container flex flex-col gap-3">
              <h2>Exclusive</h2>
              <h3>Subcribe</h3>
            </div>
            <div className="container flex flex-col gap-3">
              <h2>Exclusive</h2>
              <h3>Subcribe</h3>
            </div>
            <div className="container flex flex-col gap-3">
              <h2>Exclusive</h2>
              <h3>Subcribe</h3>
            </div>
            <div className="container flex flex-col gap-3">
              <h2>Exclusive</h2>
              <h3>Subcribe</h3>
            </div>
            <div className="container flex flex-col gap-3">
              <h2>Exclusive</h2>
              <h3>Subcribe</h3>
            </div>
          </div>
          <h5>Copyright</h5>
        </div>
      </div>
    </div>
  );
}
