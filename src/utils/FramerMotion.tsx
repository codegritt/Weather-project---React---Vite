import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const FramerMotion = ({ children }: Props) => {
  const mainControls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      mainControls.start("visible");
    }
  }, [mainControls, inView]);
  return (
    <>
      <div ref={ref} style={{ position: "relative", overflow: "hidden" }}>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {children}
        </motion.div>
      </div>
    </>
  );
};

export default FramerMotion;
