import TabButton from "../TabButton/TabButton.jsx";
import "../MainPage/MainPage.css";

export default function Classroom() {
  return (
    <div className="MainPage"> 
      <aside className ="sidebar">
        <h2>Students</h2>
          <TabButton label="Arden Mendoza"/>
          <TabButton label="Sanford Martin"/>
          <TabButton label="Sandra Callahan"/>
          <TabButton label="Alexandra Rangel"/>
          <TabButton label="Bridget Duffy"/>
          <TabButton label="Jamaal Lutz"/>
          <TabButton label="Jorge Friedman"/>
          <TabButton label="Frances Bowers"/>
          <TabButton label="Nicholas Arellano"/>
          <TabButton label="Roderick Oliver"/>
      </aside>

      <div className="content">
        <h2>Welcome to your Classroom</h2>
        <p>This is where classroom content will be displayed</p>
      </div>
    </div>
  );
}