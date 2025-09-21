import Header from "./components/Header/Header";
import Register from "./components/Register/Register";
import MainPage from "./components/MainPage/MainPage";
import UserStartUp from "./components/GetStarted/GetStarted";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GetStarted from "./components/GetStarted/GetStarted";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Register />} />       
        <Route path="/MainPage" element={<MainPage />} /> 
        <Route path="/GetStarted" element={<GetStarted/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
