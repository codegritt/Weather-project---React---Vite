import styles from "./header.module.css";
import FramerMotion from "../utils/FramerMotion";

const WeatherSection1 = () => {
  return (
    <>
      <div className={styles.showBox}>
        <div className={styles.herobg}>
          <div className="float-right leading-snug">
            <div className="container px-4 mx-auto">
              <div className="text-center max-w-2xl mx-auto">
                <FramerMotion>
                  <h1 className="text-white text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-medium mb-2">
                    Get the latest weather forecast updates live on your screen
                  </h1>
                </FramerMotion>
                <FramerMotion>
                  <button className="bg-stone-800 text-white py-2 px-6 rounded-full text-xl mt-6">
                    Get Started
                  </button>
                </FramerMotion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherSection1;
