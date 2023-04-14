import "./App.css";
import Logo from "./Logo";
import shoppingBag from "./assets/shopping-bag.svg";
import burgerMenu from "./assets/burger-menu.svg";
import leftImage from "./assets/pexels-photo-4173140.jpeg";
import rightImage from "./assets/pexels-photo-5560290.jpeg";
import firstImage from "./assets/pexels-photo-10767063.jpeg";
import secondImage from "./assets/pexels-photo-6141242.jpeg";
import thirdImage from "./assets/pexels-photo-1906818.jpeg";
import fourthImage from "./assets/pexels-photo-2181872.jpeg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  return (
    <>
      <div className="w-full h-[4.5rem] 2xl:h-20 3xl:h-28 px-10 lg:px-36 flex justify-between items-center">
        <div className="w-1/5">
          <Logo />
        </div>

        <div className="hidden lg:flex justify-center font-jost text-lg 3xl:text-2xl">
          <a href="#">
            <p className="px-6 py-6">HOME</p>
          </a>
          <a href="#">
            <p className="px-6 py-6">ABOUT</p>
          </a>
          <a href="#">
            <p className="px-6 py-6">CONTACT</p>
          </a>
          <a href="#">
            <p className="px-6 py-6">BLOG</p>
          </a>
        </div>

        <div className="flex">
          <img src={shoppingBag} alt="bag-logo" />
          <img
            src={burgerMenu}
            alt="burger-menu"
            className="h-8 w-8 ml-8 block lg:hidden"
          />
        </div>
      </div>

      <div className="parallax min-h-[450px] 2xl:min-h-[700px] 3xl:min-h-[999px] flex flex-col justify-center items-center">
        <p className="text-[50px] lg:text-[80px] 2xl:text-[100px] 3xl:text-[120px] leading-none text-white font-jost">
          I AM 120 PX
        </p>
        <p className="text-lg lg:text-2xl 2xl:text-3xl 3xl:text-4xl text-white font-jost">
          MAKE SURE WE LOOK THE SAME
        </p>
        <button className="mt-10 px-10 py-2 2xl:px-14 3xl:px-16 3xl:py-4 bg-white font-jost">
          SHOP NOW
        </button>
      </div>

      <div className="mb-10 px-10 py-5 lg:px-32 lg:py-16">
        <p className="mb-10 text-base lg:text-2xl 2xl:text-3xl 3xl:text-[40px] font-jost text-center">
          I am 40px, make sure I look the same
        </p>

        <div className="w-full lg:flex">
          <img
            src={leftImage}
            className="w-full h-[345px] lg:w-1/2 lg:h-[455px] 2xl:h-[685px] 3xl:h-[815] mb-3 lg:mb-0 lg:mr-1 2xl:mr-2 3xl:mr-3 object-cover"
          />
          <img
            src={rightImage}
            className="w-full h-[345px] lg:w-1/2 lg:h-[455px] 2xl:h-[685px] 3xl:h-[815] mb-3 lg:mb-0 lg:ml-1 2xl:ml-2 3xl:ml-3 object-cover"
          />
        </div>

        <p className="mt-16 mb-6 font-jost text-xl lg:text-2xl text-center">
          THIS IS THE COLLECTION
        </p>

        <div className="hidden w-full lg:flex">
          <img
            src={firstImage}
            className="w-[200px] h-[300px] md:w-1/4 2xl:h-[550px] 3xl:h-[800px] mr-1 object-cover"
          />
          <img
            src={secondImage}
            className="w-[200px] h-[300px] md:w-1/4 2xl:h-[550px] 3xl:h-[800px] mx-1 object-cover"
          />
          <img
            src={thirdImage}
            className="w-[200px] h-[300px] md:w-1/4 2xl:h-[550px] 3xl:h-[800px] mx-1 object-cover"
          />
          <img
            src={fourthImage}
            className="w-[200px] h-[300px] md:w-1/4 2xl:h-[550px] 3xl:h-[800px] ml-1 object-cover"
          />
        </div>

        <div className="block lg:hidden w-full">
          <Carousel
            showStatus={false}
            dynamicHeight={false}
            swipeScrollTolerance={50}
            centerSlidePercentage={30}
            showThumbs={false}
            useKeyboardArrows={true}
            infiniteLoop
          >
            <img
              src={firstImage}
              className="w-[200px] h-[300px] md:w-1/4 2xl:h-[550px] 3xl:h-[800px] object-cover"
            />
            <img
              src={secondImage}
              className="w-[200px] h-[300px] md:w-1/4 2xl:h-[550px] 3xl:h-[800px] object-cover"
            />
            <img
              src={thirdImage}
              className="w-[200px] h-[300px] md:w-1/4 2xl:h-[550px] 3xl:h-[800px] object-cover"
            />
            <img
              src={fourthImage}
              className="w-[200px] h-[300px] md:w-1/4 2xl:h-[550px] 3xl:h-[800px] object-cover"
            />
          </Carousel>
        </div>

        <div className="flex justify-center">
          <button className="mt-10 px-20 py-1 font-jost border">
            See the collection
          </button>
        </div>
      </div>

      <div className="w-full h-72 px-5 lg:px-32 py-8 font-jost lg:flex bg-[#FAFAFA]">
        <div className="w-full lg:w-1/5 mb-10 flex justify-center lg:justify-start">
          <Logo />
        </div>
        <div className="w-full lg:w-1/5 border-b lg:border-none">
          <h1 className="my-2 lg:mb-5 text-center lg:text-left">Something</h1>
          <p className="hidden lg:block">lorem ipsum</p>
          <p className="hidden lg:block">lorem ipsum</p>
          <p className="hidden lg:block">lorem ipsum</p>
          <p className="hidden lg:block">lorem ipsum</p>
          <p className="hidden lg:block">lorem ipsum</p>
        </div>
        <div className="w-full lg:w-1/5 border-b lg:border-none">
          <h1 className="my-2 lg:mb-5 text-center lg:text-left">Something</h1>
          <p className="hidden lg:block">lorem ipsum</p>
          <p className="hidden lg:block">lorem ipsum</p>
          <p className="hidden lg:block">lorem ipsum</p>
          <p className="hidden lg:block">lorem ipsum</p>
          <p className="hidden lg:block">lorem ipsum</p>
        </div>
        <div className="w-full lg:w-1/5 border-b lg:border-none">
          <h1 className="my-2 lg:mb-5 text-center lg:text-left">Something</h1>
          <p className="hidden lg:block">lorem ipsum</p>
          <p className="hidden lg:block">lorem ipsum</p>
          <p className="hidden lg:block">lorem ipsum</p>
          <p className="hidden lg:block">lorem ipsum</p>
        </div>
        <div className="w-full lg:w-1/5 border-b lg:border-none">
          <h1 className="my-2 lg:mb-5 text-center lg:text-left">Something</h1>
          <p className="hidden lg:block">lorem ipsum</p>
          <p className="hidden lg:block">lorem ipsum</p>
          <p className="hidden lg:block">lorem ipsum</p>
          <p className="hidden lg:block">lorem ipsum</p>
        </div>
      </div>
    </>
  );
}

export default App;
