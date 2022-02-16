import './App.css';
import Home from './components/home';
import './components/home.css';
import Services from './components/services';
import './components/home1.css';
import './components/queries.css';
import Working from '../src/components/working';
import '../src/components/working.css';
import './fonts/static/Inter-Bold.ttf';
function App() {
  return (
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
  );
}

export default App;
