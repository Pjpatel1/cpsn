import Home from "./home";
import Services from "./services";
function Landing ()
{
    return(
        <div className="App">
            <div className="parrent">
                <div className="home">
                    <Home/>
                </div>
                <div className="services">
                    <Services/>
                </div>
            </div>
        </div>
    )
}
export default Landing;