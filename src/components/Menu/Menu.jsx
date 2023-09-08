import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Menu.css";
import Nav from "../Header_Footer/Nav";

const variants = {
  hidden: { opacity: 0, x: "-20px" },
  visible: { opacity: 1, x: "0" },
};

function Menu() {
  const [isActive, setIsActive] = useState(false);

  const handleBoxClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="flex items-center gap-5 ">
      {/* btn */}
      <div
        className={`box ${isActive ? "active" : ""}`}
        onClick={handleBoxClick}
      >
        <div className="btn"></div>
      </div>
      {/* item */}
      <div className="nav-container">
        <AnimatePresence>
          {isActive && (
            <motion.div
              className="nav-item"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants}
            >
              <Nav isActive={isActive} setIsActive={setIsActive} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Menu;
