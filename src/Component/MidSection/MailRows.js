import React from "react";
import style from "./MailRows.module.css";
import { IconButton } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import { useNavigate } from "react-router-dom";
function MailRows(props) {
  const navigate = useNavigate();
  const NavigteTo = () => {
    navigate(`/${props.id}`, { replace: true });
  };

  return (
    <div onClick={NavigteTo} className={style.mail_Container}>
      <div className={style.left}>
        <CheckBoxOutlineBlankIcon />
        <IconButton>
          <StarBorderIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
        <h2>{props.title}</h2>
      </div>
      <div className={style.mid}>
        <h4>
          {props.message} <span>- {props.description}</span>
        </h4>
      </div>
      <div className={style.right}>
        <p>{props.time}</p>
      </div>
    </div>
  );
}

export default MailRows;
