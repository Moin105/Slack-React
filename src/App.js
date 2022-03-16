import "./App.css";
import Header from "./Components/Header/Header";
import SideNav from "./Components/SideNav/SideNav";

function App() {
  return (
    <div className="App">
      <Header />
      {/*Header => (search , history , help and profile modals)*/}
      <div className="wrapper">
        <SideNav />
        {/*Side Nav*/}
        Chat
        {/*Chat */}
      </div>
    </div>
  );
}

export default App;
