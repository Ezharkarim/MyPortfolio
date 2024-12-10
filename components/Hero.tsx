import { FiDownload } from "react-icons/fi";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import Social from "./Social";
import Photo from "./Photo";
import Stats from "./Stats";

const Hero = () => {
  return (
    <div className="pb-20 pt-8 h-full">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className=" container mx-auto h-full z-50 relative ">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24">
          <div className=" text-center lg:text-left w-full lg:w-[55%]  order-2 lg:order-none">
            <span className="text-xl">Software Engineer</span>
            <h1 className=" text-[48px] xl:text-[80px] leading-[1.1] font-semibold mb-6">
              Hello I&apos;m <br />
              <span className=" text-[#CBACF9]">Ezhar karim</span>
            </h1>
            <p className=" max-m-[500px] mb-5 lg:mb-9 text-white-100">
              I execl at crafting elegant digital experiences and I am
              proficiant in various programming languages and technologies.
            </p>
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div>
                <MagicButton
                  title="DOWNLOAD CV"
                  icon={<FiDownload />}
                  position="right"
                />
              </div>

              <div className=" mt-0 lg:mt-10  mb-8 lg:mb-0">
                <Social />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-none mb-8 lg:mb-0">
            <Photo />
          </div>
        </div>
        <Stats />
      </div>
    </div>
  );
};

export default Hero;
