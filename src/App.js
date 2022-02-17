import './App.css';
import Home from './components/home';
import './components/home.css';
import Services from './components/services';
import './components/home1.css';
import './components/queries.css';
import './components/forms.css'
import Working from '../src/components/working';
import '../src/components/working.css';
import './fonts/static/Inter-Bold.ttf';
import Landing from './components/landing';
import {Router, Route, Routes, BrowserRouter} from 'react-router-dom';
import Form1 from './components/service_reg';
function App() {
  return (
    <div>
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Landing />}>
            </Route>
            <Route exact path='/form' element={<Form1 />}>
            </Route>
        </Routes>
    </BrowserRouter>
                </div>
  );
}

export default App;
