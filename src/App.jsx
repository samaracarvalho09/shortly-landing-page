import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="wrapper-page">
      <Header />
      <Home />

      <Cards />
    </div>
  );
}

export default App;
