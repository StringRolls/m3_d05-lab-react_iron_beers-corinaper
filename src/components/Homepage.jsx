import {NavLink} from "react-router-dom"
import { useState, useEffect } from "react";
import Beers from "./Beers"

export default function Home(){
    const [randomBeer, setrandomBeer] = useState();
  
    useEffect(() => {
      Beers.getRandomBeer()
      .then(random=>{
          console.log("Homepage:", random)
          return setrandomBeer(random)})
      .catch(err=>{
          console.log(err)
          return {error: err}
      })
    }, []);
    
    return(
    <>
    <NavLink to="/beers" className="nav-link">All Beers</NavLink>
    <NavLink to={`/beers/${randomBeer?._id}`} className="nav-link">Random Beer</NavLink>
    <NavLink to="/new-beer" className="nav-link">New Beer</NavLink>
    </>
    )
    }