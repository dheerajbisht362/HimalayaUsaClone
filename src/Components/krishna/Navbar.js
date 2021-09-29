import {Link} from "react-router-dom"
import {useState} from "react"
import { navItems, navIcons } from "./NavItems"
import {Dropdown} from "./Dropdown"
// import {logoimg} from "./images/logoimg.svg"
import logoimg from "./images/logoimg.svg";
import cart from "./images/cart.png";


function Navbar(){
    const [dropdown, setDropdown] = useState(false);
    return(
        <>
         <nav className="navbar" style={{
             paddingLeft:"0.0366vw",
             marginLeft:"0px",
             display:"flex",
             flexDirection:"row",
             justifyContent:"flex-start",
             alignItems:"center",
             height:"100px"
             
         }}>
              <div style={{
                 border:"1px solid red",
                 
                display:"flex",
                flexDirection:"row",
                justifyContent:"space-around",
                alignItems:"center"
            }}>
              <Link to="/" className="navbar logo"><img alt="logo" src={logoimg}/></Link>

              <ul className="nav-items" style={{listStyle:"none", textDecoration:"none"}}>
                {navItems.map((item)=>{
                    if(item.title==="Shop"){
                        return( <li style={{float:"left", fontFamily:"sans-serif", fontSize:"18px",textDecoration:"none", letterSpacing:"0.72px", lineHeight:"19.8px", color:"#777777", padding:"0 20px 0 20px"}} key={item.id} className={item.cName} onMouseEnter={()=>setDropdown(true)} onMouseLeave={()=>setDropdown(false)}><Link style={{color:"#777777",textDecoration:"none"}} to={item.path}>{item.title}</Link>
                         
                        </li>
                        );
                    }
                    
                    return (
                        <li key={item.id} style={{float:"left", textDecoration:"none", fontFamily:"sans-serif", fontSize:"18px", letterSpacing:"0.72px", lineHeight:"19.8px", color:"#777777", padding:"0 20px 0 20px"}} className={item.cName}><Link style={{textDecoration:"none"}} to={item.path}>{item.title}</Link>
                  </li>
                  )

                })}
            </ul>
            </div> 
              <div>
              <ul className="nav-icons" style={{listStyle:"none"}}>
            {navIcons.map((item)=>{
               
                return (
                    <li style={{float:"left"}} key={item.id} className={item.cName}><Link to={item.path}><img alt="img" src={item.src}/></Link>
              </li>
              )
            })}
        </ul>
        
        </div> 
         </nav>
         <div style={{display:"grid", gridTemplateColumns:"20px 20px 20px"}}>
                          {dropdown&&<Dropdown dropdown={dropdown} setDropdown={setDropdown}/>}
                          </div>
              
              
        </>
    )
}
export {Navbar}