import { useState } from "react";
import AddNameUser from "./components/AddNameUser";
import CardUsers from "./components/CardUsers";
import Navbar from "./components/Navbar";
import './index.css'
function App() {
  const [word, setWord] = useState('');
  return (
    <>
     <Navbar />
     <AddNameUser setWord = { setWord }/>
     <h5 className="text-center mt-5 text-light">Criterio de búsqueda: { word }</h5>
     <CardUsers word = { word }/>
    </>
  );
}
export default App;
