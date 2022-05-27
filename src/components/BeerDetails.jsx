import Header from "./Header"



export default function BeerDetails(props){
 

  return(  
            <>
            <Header></Header>
            
                <div key={props.beer._id}>
                    <img src={props.beer.image_url} alt=""></img>
                    <div>
                        <p>{props.beer.attenuation_level}</p>
                        <h2>{props.beer.name}</h2>
                        <h3>{props.beer.tagline}</h3>
                        <p>{props.beer.first_brewed}</p>
                        <p>{props.beer.description}</p>
                        <p>{props.beer.contributed_by}</p>
                    </div>
                </div>)
            </>
        )
 
    
}