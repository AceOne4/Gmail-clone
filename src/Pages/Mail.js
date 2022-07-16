import React from "react";
import { useParams } from "react-router-dom";
import MailHeader from "../Component/MidSection/MailHeader";
import { useSelector } from "react-redux/es/exports";
// const DUMMY_DATA = [
//   {
//     id: "p1",
//     title: "Amazon",
//     message: "We Are Happ To",
//     description:
//       "molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
//     time: "10 : 00 PM",
//   },
//   {
//     id: "p2",
//     title: "FaceBook",
//     message: "We sadly inform You",
//     description:
//       "molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
//     time: "10 : 00 PM",
//   },
// ];
function Mail() {
  const MailMassages = useSelector((state) => state.Messages);

  const params = useParams();
  const mails = MailMassages.EMessages.find(
    (mail) => mail.id === params.mailId
  );

  return (
    <MailHeader
      title={mails.title}
      message={mails.message}
      description={mails.description}
      time={mails.time}
    />
  );
}

export default Mail;
