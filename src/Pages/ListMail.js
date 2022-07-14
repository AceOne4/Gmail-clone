import React from "react";
import ListHeader from "../Component/MidSection/ListHeader";
import { useFethData } from "../hooks/useFetchData";

function ListMail() {
  const [message, Loading] = useFethData();
  console.log(message);
  return Loading ? <p>LOADING....</p> : <ListHeader mails={message} />;
}

export default ListMail;
