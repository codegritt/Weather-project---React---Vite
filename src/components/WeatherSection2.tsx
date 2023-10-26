import styles from "./header.module.css";
import FramerMotion from "../utils/FramerMotion";
import weather1 from "../../public/images/coast_stormy_weather-wallpaper-2560x1440.jpg"

const WeatherSection2 = () => {
  return (
    <>
      <div className={styles.hero1bg}>
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <FramerMotion>
                <h1 className="text-white text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-medium mb-2">
                    <span className="block xl:inline">
                      Useful Weather Tools to help you build faster, reliable
                      Interfaces
                    </span>
                  </h1>
                </FramerMotion>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                <FramerMotion>
                  <img
                    src={weather1}
                    width={1200}
                    height={3000}
                    alt="Picture of the author"
                  />
                </FramerMotion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherSection2;
