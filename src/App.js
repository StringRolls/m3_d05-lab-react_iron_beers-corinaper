
import './App.css';
import Home from './components/Homepage';
import {Routes, Route} from "react-router-dom"
import { useState, useEffect } from "react";
import AllBeers from './components/AllBeers';
import Beers from "../src/components/Beers"
import BeerDetails from './components/BeerDetails';

function App(props) {
  const [beers, setBeers] = useState([]);
  
  useEffect(() => {
    Beers.getAllBeers()
    .then(allBeers=>setBeers(allBeers))
    .catch(err=>{
        console.log(err)
        return {error: err}
    })
  }, []); 
 


  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/beers" element={<AllBeers beers={beers} />}></Route>
        {beers.map((beer)=>{
          return(
            <Route path={`/beers/${beer._id}`} element={<BeerDetails beer={beer}/>}></Route> 
          )
        })}
        
        <Route path="/random-beer" element={<Home />}></Route>
        <Route path="/new-beer" element={<Home />}></Route>
      </Routes>

    </div>
  );
}

export default App;
