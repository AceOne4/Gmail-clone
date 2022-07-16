import React from "react";
import ListHeader from "../Component/MidSection/ListHeader";
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
function ListMail() {
  const MailMassages = useSelector((state) => state.Messages);
  const Mails = MailMassages.EMessages.slice().reverse();
  return <ListHeader mails={Mails} />;
}

export default ListMail;
