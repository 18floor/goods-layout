import './App.css';
import {products} from "./data/Products";
import Store from "./components/Store";

function App() {
  return (
    <div>
      <Store products={products}/>
    </div>
  );
}

export default App;
