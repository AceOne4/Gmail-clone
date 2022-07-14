import React from "react";
import { useParams } from "react-router-dom";
import MailHeader from "../Component/MidSection/MailHeader";
import { useFethData } from "../hooks/useFetchData";

function Mail() {
  const [message, Loading] = useFethData();

  const params = useParams();
  const mails = message.find((mail) => mail.id === params.mailId);

  return Loading ? (
    <p>LOADING...</p>
  ) : (
    <MailHeader
      title={mails.title}
      message={mails.message}
      description={mails.description}
      time={mails.time}
    />
  );
}

export default Mail;
