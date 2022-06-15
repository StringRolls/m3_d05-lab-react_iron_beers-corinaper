import {NavLink} from "react-router-dom"
import "../App.css"

export default function Header(){
    return(
    <NavLink to="/" className="header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Home-icon.svg/1200px-Home-icon.svg.png" alt=""></img>
    </NavLink>
    )
    }