import WebsiteLogo from '../../assets/icon.png';
import './Header.css';

export default function Header() {
  return (
    <header>
      <img src={WebsiteLogo} alt='logo'/>
      <h1>StudySmarter</h1>
      <h2>Your Ultimate Study Companion</h2>
    </header>
  );
}