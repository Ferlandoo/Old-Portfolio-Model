import { motion } from "framer-motion";

const PageHeader = ({ title }) => (
  <>
    <motion.h3
      className="pageTitle"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {title}
    </motion.h3>
  </>
);

export default PageHeader;
