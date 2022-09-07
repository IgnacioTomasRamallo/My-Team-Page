import "./App.css";
import Card from "./components/Card/Card";
import {useState, useEffect} from 'react';
import {personaInfo} from './data/personas';



function App() {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    personaInfo().then(personas =>{
      setPersonas(personas);
    })
    
},[])
  

  return (
    <>
      <div className="poppins d-flex align-items-center justify-content-center m-5 ">
        <h2 className="pt-serif fw-bold">The creative crew</h2>
        <div className="ps-5">
          <h3 className="fw-bold">Who we are</h3>
          <p className="fw-semibold">
            We are team of creatively diverse. driven. innovative individuals
            working in various locations from the world.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="d-flex flex-wrap">
          {personas.map(p => <Card {...p}/>)}

        </div>
      </div>
    </>
  );
}

export default App;
