import { Button } from "@mui/material";
import React, { useRef, useState } from "react";
import style from "./SendMessageBox.module.css";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import { ShowMessageBoxAction } from "../../store/Slice";

function SendMessageBox(props) {
  const [shrink, setshrink] = useState(false);
  const title = useRef();
  const message = useRef();
  const description = useRef();
  const minHanlder = () => {
    setshrink(true);
  };
  const maxHanlder = () => {
    setshrink(false);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(title.current.value);
    // console.log(message.current.value);
    // console.log(description.current.value);
    const messageContent = {
      title: title.current.value,
      message: message.current.value,
      description: description.current.value,
    };
    props.AddNewMessage(messageContent);
    props.refresh();
    title.current.value =
      message.current.value =
      description.current.value =
        "";
  };
  const dispatch = useDispatch();
  const { close } = ShowMessageBoxAction;
  const MessgaeClose = () => {
    dispatch(close());
  };

  return (
    <div className={style.container}>
      {shrink && (
        <div>
          <div className={style.miniform}>
            <h2>New message</h2>
            <div>
              <RemoveIcon onClick={maxHanlder} className={style.Icon} />
              <CloseIcon onClick={MessgaeClose} className={style.Icon} />
            </div>
          </div>
        </div>
      )}

      {!shrink && (
        <form className={style.form} onSubmit={submitHandler}>
          <div>
            <h2>New message</h2>
            <div>
              <RemoveIcon onClick={minHanlder} className={style.Icon} />
              <CloseIcon onClick={MessgaeClose} className={style.Icon} />
            </div>
          </div>
          <input ref={title} placeholder="To" type="Email" />
          <input ref={message} placeholder="Subject" type="text" />
          <textarea ref={description} type="text" />
          <Button type="submit" className={style.Button}>
            Send
          </Button>
        </form>
      )}
    </div>
  );
}

export default SendMessageBox;
