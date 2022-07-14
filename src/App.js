import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header/Header";
import Mail from "./Pages/Mail";
import SideBar from "./Component/Side Bar/SideBar";
import ListMail from "./Pages/ListMail";
import SendMessageBox from "./Component/SendMessageBox/SendMessageBox";
import { useSelector } from "react-redux";
import { useNewMessage } from "./hooks/useFetchData";
import { useState } from "react";

function App() {
  const [refresh, setRefresh] = useState(0);
  console.log(refresh);
  const globalState = useSelector((state) => state.showBox);

  const NewMessage = (message) => useNewMessage(message);
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
      {globalState.ShowMessageBox ? (
        <SendMessageBox
          refresh={() => setRefresh(refresh + 1)}
          AddNewMessage={NewMessage}
        />
      ) : null}
    </div>
  );
}

export default App;
