import TabButton from "../TabButton/TabButton.jsx";
import "../MainPage/MainPage.css";
import { useNavigate } from "react-router-dom";
import HomeLogo from '../../assets/ReturnHome.png';
import HeadingHome from "../Header/HeadingHome.jsx";

export default function Studyroom() {
  const navigate = useNavigate();
  return (
    <div className="MainPage"> 
      <aside className ="sidebar">
        <h2>Members</h2>
          <TabButton label="Sanford Martin"/>
          <TabButton label="Alexandra Rangel"/>
          <TabButton label="Bridget Duffy"/>
          <TabButton label="Jorge Friedman"/>
      </aside>
      <div className="content">
        <h2>Welcome to your Studyroom</h2>
        <p>This is where studyroom content will be displayed</p>
      </div>
    </div>

  );
}