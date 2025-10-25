import HomeLogo from '../../assets/ReturnHome.png';
import './Header.css';
import WebsiteLogo from '../../assets/icon.png';
import './HeadingHome.css';
import { useNavigate } from "react-router-dom";

export default function HeadingHome() {
  const navigate = useNavigate();
  return (
    <header className = "HeadingHome">
      <img src= {HomeLogo} alt='Home' className = 'HomeLogo'
            onClick ={() => { navigate("/MainPage"); }}
            />
      <img src={WebsiteLogo} alt='logo' className='WebsiteLogo'/>
      <h1>StudySmarter</h1>
      <h2>Your Ultimate Study Companion</h2>
    </header>
  );
}
