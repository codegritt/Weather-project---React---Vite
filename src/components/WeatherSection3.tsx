import styles from "./header.module.css";
import FramerMotion from "../utils/FramerMotion";

const WeatherSection3 = () => {
  return (
    <>
      <div className={styles.hero2bg}>
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <FramerMotion>
                <h1 className="text-white text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-medium mb-2">
                    <span className="block xl:inline">
                      It is never been easier to build beautiful websites that
                      convey your message and tell your story.
                    </span>
                  </h1>
                </FramerMotion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherSection3;
