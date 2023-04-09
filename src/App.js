import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetail from "./Components/ItemDetail/ItemDetail";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos"} />
      <ItemDetail />
    </div>
  );
}

export default App;
