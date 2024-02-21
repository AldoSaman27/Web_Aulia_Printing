import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Pages/About';
import Product from './Pages/Product';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/product' element={<Product/>}/>
            </Routes>
        </Router>
    );
}

export default App;
