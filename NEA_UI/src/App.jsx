import Header from "./components/Header/Header";
import TabButton from "./components/TabButton/TabButton.jsx";

function App() {

  return (
    <div>
      <Header />
      <menu>
        <div className="tab-button-container">
        <TabButton label="Sign In" onClick={() => {}} />
        </div> 
      </menu>
    </div>
  );
}
export default App;