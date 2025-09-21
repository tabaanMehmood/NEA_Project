import Header from "./components/Header/Header";
import Register from "./components/Register/Register";

function App() {
  const [selectedTab, setSelectedTab] = useState(null); // no default tab selected

  return (
    <div>
      <Header />
      <Register/>
    </div>
  );
}
export default App;