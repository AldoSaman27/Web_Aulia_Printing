import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Pages/About';
import Product from './Pages/Product';
import Contact from './Pages/Contact';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/product' element={<Product/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </Router>
    );
}

export default App;
