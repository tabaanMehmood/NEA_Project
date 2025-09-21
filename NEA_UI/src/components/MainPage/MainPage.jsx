import TabButton from "../TabButton/TabButton";
import "./MainPage.css";
import { useNavigate } from "react-router-dom";


export default function MainPage() {
  const navigate = useNavigate();
  return (
    <div className="MainPage">
      <aside className="sidebar">
        <h2>Menu</h2>
          <TabButton label="Get Started" 
          onClick={() => { navigate("/GetStarted"); }}
          />
          <TabButton label="+ Classroom" />
          <TabButton label="+ Studyroom" />
          <TabButton label="Economics" />
          <TabButton label="Maths" />
          <TabButton label="Computer Science" />
      </aside>
        
      <div className="content">
        <h2>Welcome to Your Dashboard</h2>
        <p>This is your main content area</p>
      </div>
    </div>
  );
}