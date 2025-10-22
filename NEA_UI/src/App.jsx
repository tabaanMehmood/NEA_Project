import Header from "./components/Header/Header";
import Register from "./components/Register/Register";
import MainPage from "./components/MainPage/MainPage";
import UserStartUp from "./components/GetStarted/GetStarted";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GetStarted from "./components/GetStarted/GetStarted";
import SubjectToBoard from "./components/GetStarted/SubjectToBoard/SubjectToBoard";
import Classroom from "./components/Classroom/Classroom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Register />} />       
        <Route path="/MainPage" element={<MainPage />} /> 
        <Route path="/GetStarted" element={<GetStarted/>} />
        <Route path="/Classroom" element={<Classroom/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
