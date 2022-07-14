import React from "react";
import style from "./Header.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import logo from "../../Gmail2020.logo.png";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
function Header() {
  return (
    <div className={style.Header}>
      <div className={style.left}>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src={logo} alt="Gmail" />
      </div>
      <div className={style.mid}>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input type="search" placeholder="Search Mail" />
      </div>
      <div className={style.right}>
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <div className={style.image}>
          <p>A</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
