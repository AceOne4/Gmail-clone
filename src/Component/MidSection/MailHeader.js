import React from "react";
import style from "./MailHeader.module.css";
import HeaderCard from "../UI/HeaderCard";
import { IconButton } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArchiveIcon from "@mui/icons-material/Archive";
import ReportIcon from "@mui/icons-material/Report";
import DeleteIcon from "@mui/icons-material/Delete";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import AddTaskIcon from "@mui/icons-material/AddTask";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import LabelIcon from "@mui/icons-material/Label";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import TheMail from "./TheMail";
function MailHeader(props) {
  const navigate = useNavigate();
  const backHandler = () => {
    navigate("/", { replace: true });
  };
  return (
    <div className={style.list}>
      <HeaderCard>
        <div className={style.icon_Container}>
          <div>
            <IconButton onClick={backHandler}>
              <ArrowBackIcon />
            </IconButton>
            <IconButton>
              <ArchiveIcon />
            </IconButton>
            <IconButton>
              <ReportIcon />
            </IconButton>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </div>
          <div>
            <IconButton>
              <MarkAsUnreadIcon />
            </IconButton>
            <IconButton>
              <AccessTimeFilledIcon />
            </IconButton>
            <IconButton>
              <AddTaskIcon />
            </IconButton>
          </div>
          <div>
            <IconButton>
              <DriveFileMoveIcon />
            </IconButton>
            <IconButton>
              <LabelIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
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
      <TheMail
        title={props.title}
        message={props.message}
        description={props.description}
        time={props.time}
      />
    </div>
  );
}

export default MailHeader;
