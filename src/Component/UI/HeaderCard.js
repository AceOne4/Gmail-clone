import React from "react";
import style from "./HeaderCard.module.css";
function HeaderCard(props) {
  return <div className={style.headercard}>{props.children}</div>;
}

export default HeaderCard;
