
import Header from "./Header"
// import { useState, useEffect } from "react";
// import Beers from "./Beers"

export default function AllBeers(props){
    

  return(  
            <>
            <Header></Header>
            {props.beers.map(beer=>
                <div className="beers" key={beer._id}>
                    <img src={beer.image_url} alt=""></img>
                    <div>
                        <h2>{beer.name}</h2>
                        <h3>{beer.tagline}</h3>
                        <p>Contributed by: {beer.contributed_by}</p>
                        <form method="get" action={`/beers/${beer._id}`}>
                            <button type="submit">See more</button>
                        </form>
                    </div>
                </div>)}
            </>
        )
 
    
}