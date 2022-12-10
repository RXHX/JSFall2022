import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Component/Navbar';
import About from './Component/About';
import Consume from './Component/Consume';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path = "/" exact element={<Navbar/>} />
    <Route path = "/about" exact element={<About/>} />
    <Route path = "/consume" exact element={<Consume/>} />
    </Routes>
    </BrowserRouter> 
    
    </>
  );
}

export default App;
