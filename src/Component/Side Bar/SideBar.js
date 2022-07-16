import { Button, IconButton } from "@mui/material";
import React from "react";
import style from "./SideBar.module.css";
import AddIcon from "@mui/icons-material/Add";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import SendIcon from "@mui/icons-material/Send";
import DraftsIcon from "@mui/icons-material/Drafts";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import { ShowMessageBoxAction } from "../../store/Slice";
const SideBar = () => {
  const MailMassages = useSelector((state) => state.Messages);

  const InboxHandler = () => {};
  const dispatch = useDispatch();
  const { open } = ShowMessageBoxAction;
  const MessgaeOpen = () => {
    dispatch(open());
  };
  return (
    <>
      <div className={style.side_bar}>
        <Button
          onClick={MessgaeOpen}
          className={style.Button}
          startIcon={<AddIcon />}
        >
          Compose
        </Button>
        <ul>
          <li className={style.active} onClick={InboxHandler}>
            <InboxIcon />
            <h4>Inbox</h4>
            <p>{MailMassages.amountOfmessages}</p>
          </li>

          <li>
            <StarIcon />
            <h4>Starred</h4>
            <p>54</p>
          </li>
          <li>
            <WatchLaterIcon />
            <h4>Snoozed</h4>
            <p>54</p>
          </li>
          <li>
            <LabelImportantIcon />
            <h4>Important</h4>
            <p>54</p>
          </li>
          <li>
            <SendIcon />
            <h4>Sent</h4>
            <p>54</p>
          </li>
          <li>
            <DraftsIcon />
            <h4>Drafts</h4>
            <p>54</p>
          </li>
          <li>
            <ExpandMoreIcon />
            <h4>More</h4>
          </li>
        </ul>
        <div>
          <div className={style.side_bar_footer}>
            <IconButton>
              <PersonIcon />
            </IconButton>
            <IconButton>
              <DuoIcon />
            </IconButton>
            <IconButton>
              <PhoneIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
