import './App.css';
import React from 'react';
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
import Display from './pages/display'
import Board from './pages/Board';

function App() {

    return (
     
    <Router>
        <Routes>
          <Route  path="/" element={<Display/>}/>
         
                 <Route  path="/Board" element={<Board/>}/>


        </Routes>
      </Router> 
      
    );
      
    
     
}
 

export default App;