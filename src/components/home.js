import logo from '../components/dropdowns/Polygon5.png';
import Hamburger from '../components/dropdowns/nav.svg';
import React,{useState} from 'react';
import Services from './services';
import { Link } from "react-scroll";




function Home ()
{
    
    return(
        
        <div className="container">
            <div className="color-overlay"></div>
            
                <div className="navbar">
                        <img src={Hamburger} alt="Imagine i am Hamburger" className="option"></img>
                    <div className="login">Login/Register</div>
                    <img src={logo} alt="Imagine i am logo" className="logo"></img>
                </div>
                <div className="heading1">
                    CONNECTING PROFFESIONAL SERVICE NEARBY
                </div>
                <div className="tag-line">
                To develop a WebSite that provides local search for different services nearby in order to profit both the Buyer and Seller using categories
                </div>
                <div className="dds">
                        <select name="cars" id="cars" className="car1">
                            <option value="" selected disable>-- Buying/Selling --</option>                    
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>
                    <select name="cars" id="cars" className="car1">
                        <option value="" selected disabled>-- Service --</option>                    
                        <option value="volvo" >Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                    <select name="cars" id="cars" className="car1">
                        <option value="" selected disabled>-- Renting --</option>                    
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                    
                </div>
               <div className='btn'>
                  <Link to = "servicespage"
                    smooth={true}
                    duration={1000}
                    > Get services</Link>
               </div>
               
        </div>
       
    )
}
export default Home