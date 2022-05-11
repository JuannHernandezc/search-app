import { useState } from "react";
import AddNameUser from "./components/AddNameUser";
import CardUsers from "./components/CardUsers";
import './index.css'
function App() {
  const [word, setWord] = useState('');
  return (
    <>
     <h1> Users Search App</h1>
     <hr />
     <AddNameUser setWord = { setWord }/>
     <h5 className="text-center mt-5 text-light">Criterio de busqueda: { word }</h5>
     <CardUsers word = { word }/>
    </>
  );
}
export default App;
