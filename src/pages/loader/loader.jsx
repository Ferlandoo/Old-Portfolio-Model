import { useEffect } from "react";
import { motion } from "framer-motion";

const Loader = ({ setShowLoader }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 1400);
  }, [setShowLoader]);

  const iconVariant = {
    hidden: {
      pathLength: 0,
      fill: "rgb(19, 26, 34)",
    },
    visible: {
      pathLength: 5,
      fill: "rgb(243, 243, 243)",
      stroke: "rgb(243, 243, 243)",
      strokeWidth: 3,
      scale: 0,
      transition: {
        default: { duration: 1.5, ease: "easeIn" },
        fill: { duration: 1.5, ease: [1, 0, 0.8, 1] },
        stroke: { duration: 1.5, ease: [1, 0, 0.8, 1] },
        scale: { duration: 1.5, ease: [1, 1, 0.5, 0] },
      },
    },
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 435.1"
        style={{ width: "30vw", height: "30vw" }}
      >
        <motion.path
          d="M362.4,238.4H241.1l60.3,105.9l-51.8,89.6L137.6,238.4L92,158.8h316.8C408,159.6,362.4,238.4,362.4,238.4z
          M500,1.2H0l45.6,79.6h408L500,1.2z"
          variants={iconVariant}
          initial="hidden"
          animate="visible"
        />
      </motion.svg>{" "}
    </div>
  );
};

export default Loader;
