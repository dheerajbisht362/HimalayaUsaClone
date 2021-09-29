// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import  {Navbar} from "./Navbar"

function App() {
  return (
    <div>
      <>
      <BrowserRouter>
         <Navbar/>
         <Switch>
           <Route path="./" exact >Home</Route>
         </Switch>
      </BrowserRouter>
      
      </>
    </div>
  );
}

export default App;
