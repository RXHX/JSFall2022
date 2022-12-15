import {BrowserRouter,Routes,Route } from "react-router-dom";
import Create from './component/Create';
import Edit from './component/Edit';
import Home from './component/Home';
import Update from './component/Update';
function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/create" element={<Create/>}/>
      <Route path="/edit" element={<Edit/>}/>
      <Route path="/update" element={<Update/>}/>
     </Routes>
     </BrowserRouter>      
    </div>
  );
}

export default App;
