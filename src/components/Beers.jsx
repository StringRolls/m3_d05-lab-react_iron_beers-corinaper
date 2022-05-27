import axios from "axios"

class Beers{
    api = axios.create({
        baseURL: process.env.API_URL || "https://ih-beers-api2.herokuapp.com" 
    })
   

getAllBeers(){
   return this.api.get("/beers")
    .then((AllBeers)=>{
        console.log(AllBeers)
        return AllBeers.data
    
    })
    .catch(err=>{
        console.log(err)
        return {error: err}
    })
}

getOneBeer(id){
    return this.api.get(`/beers/${id}`)
    .then((OneBeer)=>{
        console.log(OneBeer)})
    .catch(err=>{
        console.log(err)
        return {error: err}
    })

}

getRandomBeer(){
    return this.api.get("/beers/random")
    .then((RandomBeer)=>{
        console.log("Class console",RandomBeer.data)
    return RandomBeer.data})
    .catch(err=>{
        console.log(err)
        return {error: err}
    })
}

createNewBeer(beerInfo){
    return this.api.post("/beers/new", beerInfo)
    .then((newBeer)=>{
        console.log(newBeer)})
    .catch(err=>{
        console.log(err)
        return {error: err}
    })
}
}

export default new Beers()