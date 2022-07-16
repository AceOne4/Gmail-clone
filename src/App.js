import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header/Header";
import Mail from "./Pages/Mail";
import SideBar from "./Component/Side Bar/SideBar";
import ListMail from "./Pages/ListMail";
import SendMessageBox from "./Component/SendMessageBox/SendMessageBox";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { NewMessage, FethData } from "./store/Messsages-actions";
let intital = true;
function App() {
  const globalState = useSelector((state) => state.showBox);
  const MailMassages = useSelector((state) => state.Messages);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FethData());
  }, []);

  useEffect(() => {
    if (intital) {
      intital = false;
      return;
    }
    if (MailMassages.change) dispatch(NewMessage(MailMassages));
  }, [MailMassages, dispatch]);
  return (
    <div className="App">
      <Header />
      <div className="Body">
        <SideBar />

        <Routes>
          <Route path="/:mailId" element={<Mail />} />

          <Route path="/" element={<ListMail />} />
        </Routes>
      </div>
      {globalState.ShowMessageBox ? <SendMessageBox /> : null}
    </div>
  );
}

export default App;
