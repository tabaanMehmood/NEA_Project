import Header from "./components/Header/Header";
import Register from "./components/Register/Register";
import MainPage from "./components/MainPage/MainPage";
import UserStartUp from "./components/GetStarted/GetStarted";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import GetStarted from "./components/GetStarted/GetStarted";
import SubjectToBoard from "./components/GetStarted/SubjectToBoard/SubjectToBoard";
import Classroom from "./components/Classroom/Classroom";
import HeadingHome from "./components/Header/HeadingHome";
import Studyroom from "./components/Studyroom/Studyroom";

function App() {
  const location = useLocation();
  return (
    <> 
    {location.pathname === "/MainPage" || location.pathname === "/" ? <Header /> : <HeadingHome />}
      <Routes>
        <Route path="/" element={<Register />} />       
        <Route path="/MainPage" element={<MainPage />} /> 
        <Route path="/GetStarted" element={<GetStarted/>} />
        <Route path="/Classroom" element={<Classroom/>} />
        <Route path="/Studyroom" element={<Studyroom/>} />
      </Routes>
    </>
  );
}

export default App;