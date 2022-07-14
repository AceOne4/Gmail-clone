import React from "react";
import style from "./TheMail.module.css";
import LabelImportantTwoToneIcon from "@mui/icons-material/LabelImportantTwoTone";
import { Button, IconButton } from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";
import ForwardIcon from "@mui/icons-material/Forward";
function TheMail(props) {
  return (
    <div className={style.container}>
      <div className={style.mail_header}>
        <h2>{props.message}</h2>
        <IconButton>
          <LabelImportantTwoToneIcon />
        </IconButton>
        <h4>{props.title}</h4>
        <p>{props.time}</p>
      </div>
      <div className={style.mail_body}>
        <p>{props.description}</p>
      </div>
      <div className={style.mail_footer}>
        <Button className={style.Button} startIcon={<ReplyIcon />}>
          {" "}
          Reply
        </Button>
        <Button className={style.Button} startIcon={<ForwardIcon />}>
          Forward
        </Button>
      </div>
    </div>
  );
}

export default TheMail;
