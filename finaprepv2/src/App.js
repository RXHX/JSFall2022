import {BrowserRouter,Routes,Route } from "react-router-dom";
import Create from './component/Create';
import Edit from './component/Edit';
import Home from './component/Home';
import Update from './component/Update';
import Header from './component/Header';
import Delete from './component/Delete';
import Consume from './component/Consume';
function App() {
  return (
    <div> 
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/create"  element={<Create/>}/>
      <Route path="/edit"  element={<Edit/>}/>
      <Route path="/update"  element={<Update/>}/>
      <Route path="/delete"  element={<Delete/>}/> 
      <Route path="/consume" element={<Consume/>}/>
     </Routes>
     </BrowserRouter>      
    </div>
  );
}

export default App;
