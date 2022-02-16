import Buysell from '../images/s1.png';
import rent from '../images/s2.png';
import service from '../images/s3.png';
import files from '../images/file.gif';
import logo from '../images/CPSN.png';
function Services ()
{
    return(

/* service page*/
<div>
<section className="servicespage" id='servicespage'>
        <div>
            <h2>OUR SERVICES</h2>
            <h1>OUR SERVICES</h1>
        </div>
        <div className="row">
                <div className="Column">
                    <img class="card-img-top" src={Buysell} alt="Card image cap"/>
                    <div class="card-body">
                    <button className="buttonservice">
                    <h2> Buying/Selling</h2>
                        </button>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

                <div className="Column">
                  <img class="card-img-top" src={rent} alt="Card image cap"/>
                     <div class="card-body">
                          <button className="buttonservice">
                                <h2> Services</h2>
                            </button>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
        </div>
            <div className="Column">
                 <img class="card-img-top" src={service} alt="Card image cap"/>    
                    <div class="card-body">
                        <button className="buttonservice">
                            <h2>Renting Property</h2>
                        </button>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
            </div>
        </div>
        </section>

        <section>
            <div className="Loginpage">
                    <h1> Register Now with us</h1>
                    <h3>Showcase your services, Offices for rent, Buy and sell properties just at one step!</h3>
                    <h3>Call Now (1)-212-333-4343</h3>

                    <button className="buttonlogin">
                        <h2>Learn More</h2>
                            </button>
                    

            </div> 
        </section>


        <section className="howitworks">
        <div className="work">
            <h2>HOW IT WORKS</h2>
            <h1>HOW IT WORKS</h1>
        </div>
        
        <div className="works">
                <div className="imagework">
                    <img class="worksimage" src={files} alt="Card image cap"/>
                </div>
                <div className="worksdata">
                    <p> <span className="headingworks">  1 - Select The services<br/> </span>  
                        <h3 className="workspara">   Select the services you want from the homepage from the drop down menu.</h3>
                        <br/>
                        <span className="headingworks">  2 - Scroll and Select<br/> </span> 
                        <h3 className="workspara">   Find out according to reviews and your preferences that which service provider will suit you best.</h3>
                            <br/>
                            <span className="headingworks"> 3 - Contact Directly<br/> </span>
                            <h3 className="workspara">   you will be able to watch Service provider details</h3>
                    </p>    
                </div>
            
        </div>
</section>
<footer>
                <div className="footerhome">
                        <div className="logo1">
                        <img class="logoimage" src={logo} alt="logoimage"/>
                              <h2>  329 Queensberry Street, North Melbourne VIC 3051, Australia.<br/>
                                    123 456 7890.<br/>
                                    support@prodrive.com.<br/></h2>  
                        </div>
                        <div className="footerdata">
                                <i class="fa fa-facebook"></i>  
                                <i class="fa fa-instagram"> </i>
                                <i class="fa fa-twitter"> </i>
                        </div>

                </div>



</footer>
    </div>
    )
}
export default Services;