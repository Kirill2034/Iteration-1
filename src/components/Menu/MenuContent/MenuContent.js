import React from "react";
import "./MenuContent.scss";
import { ReactComponent as IconTelegram } from "../../../assets/icons/Telegram_white.svg";
import { ReactComponent as IconFacebook } from "../../../assets/icons/Facebook_white.svg";
import { ReactComponent as IconInstagram } from "../../../assets/icons/Instagram_white.svg";

function MenuContent() {
  return (
    <div className="menu-content">
      <div className="menu-content__info">
        <div className="menu-content__info-links">
          <span>Парковка</span>
          <span>Страховка</span>
          <span>Бензин</span>
          <span>Обслуживание</span>
        </div>
        <div className="menu-content__info-icons">
          <div className="menu-content__info-icons-item">
            <IconTelegram />
          </div>
          <div className="menu-content__info-icons-item">
            <IconFacebook />
          </div>
          <div className="menu-content__info-icons-item">
            <IconInstagram />
          </div>
        </div>
      </div>
      <div className="menu-content__opacity"></div>
    </div>
  );
}
export default MenuContent;
