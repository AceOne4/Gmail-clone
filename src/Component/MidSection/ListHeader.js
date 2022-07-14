import React from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import HeaderCard from "../UI/HeaderCard";
import style from "./ListHeader.module.css";
import InboxIcon from "@mui/icons-material/Inbox";
import PersonIcon from "@mui/icons-material/Person";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import MailRows from "./MailRows";

function ListHeader(props) {
  return (
    <>
      <div className={style.List}>
        <HeaderCard>
          <div>
            <CheckBoxOutlineBlankIcon />
            <IconButton>
              <ArrowDropDownIcon />
            </IconButton>
            <IconButton>
              <RefreshIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
          <div>
            <IconButton>
              <NavigateBeforeIcon />
            </IconButton>
            <IconButton>
              <NavigateNextIcon />
            </IconButton>
          </div>
        </HeaderCard>
        <div className={style.sections}>
          <section className={style.active}>
            <InboxIcon />
            <p>Primary</p>
          </section>
          <section>
            <PersonIcon />
            <p>Social</p>
          </section>
          <section>
            <LocalOfferIcon />
            <p>Promotion</p>
          </section>
        </div>
        <div className={style.mail_Container}>
          {props.mails.map((mail) => {
            return (
              <MailRows
                key={mail.id}
                title={mail.title}
                message={mail.message}
                time={mail.time}
                description={mail.description}
                id={mail.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ListHeader;
