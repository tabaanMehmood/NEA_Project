import HomeLogo from '../../assets/ReturnHome.png';
import './Header.css';

export default function HeadingHome() {
  return (
    <header>
      <img src={HomeLogo} alt='logo'/>
      <h1>StudySmarter</h1>
      <h2>Your Ultimate Study Companion</h2>
    </header>
  );
}
