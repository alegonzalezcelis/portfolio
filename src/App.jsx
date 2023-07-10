import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="flex flex-col mx-5">
        <Nav />
        <Header />
      </div>
    </>
  );
}

export default App;
