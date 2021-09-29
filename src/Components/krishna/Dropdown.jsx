import {useState} from "react"
import {shopDropdown1, shopDropdown2} from "./NavItems"
import {Link} from "react-router-dom"
import "./Dropdown.css"

export const Dropdown=({dropdown,setDropdown })=>{
    // const [dropdown,setDropdown] =useState(false);
    return(
         <>
         {
        //   <ul className={dropdown?"shop-submenu-clicked":"shop-submenu"} onClick={()=>setDropdown(!dropdown)}>
        //     {shopDropdown1.map((item)=>{
        //         return(<li key={item.id}><Link to ={item.path} className={item.cName} onClick={()=>setDropdown(false)}>{item.title}</Link></li>);
        //     })}
        //   </ul>
         }
          <h5>Health Interest</h5>
          <ul className={dropdown?"shop-submenu-clicked":"shop-submenu"} style={{listStyle:"none", textDecoration:"none", display:"flex",flexDirection:"row", top:"60px"}} onClick={()=>setDropdown(!dropdown)}>
          {shopDropdown2.map((item)=>{
              return(<li key={item.id}><Link to ={item.path} style={{margin:"10px"}} className={item.cName} onClick={()=>setDropdown(false)}>{item.title}</Link></li>);
          })}
        </ul>
         </>

    )
}

