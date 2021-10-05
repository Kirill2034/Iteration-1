import React, { useState } from "react";
import { Portal } from "react-portal";
import "./Menu.scss";
import { ReactComponent as MenuBtnIcon } from "../../assets/icons/menu-btn.svg";
import { ReactComponent as MenuCloseIcon } from "../../assets/icons/menu-close.svg";
import { MenuContent } from "./MenuContent";
import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion";

const Menu = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const onMenuButtonClick = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <>
      <div className="menu">
        <button className="menu__btn" onClick={onMenuButtonClick}>
          {menuOpened ? <MenuCloseIcon /> : <MenuBtnIcon />}
        </button>
        <div className={classNames("menu__language", { _opened: menuOpened })}>
          Eng
        </div>
      </div>
      <Portal>
        <AnimatePresence>
          {menuOpened && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MenuContent />
            </motion.div>
          )}
        </AnimatePresence>
      </Portal>
    </>
  );
};
export default Menu;
