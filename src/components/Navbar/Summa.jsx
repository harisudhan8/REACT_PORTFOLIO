import React from 'react';
import { BrowserRouter as Router,Route,Link, Routes } from 'react-router-dom';
function Summa() {
  return (
<Router>
           <nav>
             <ul>
               <li>
                <Link to='/'>Home</Link>
               </li>
               <li>
                 <Link to='/into'>About</Link>
               </li>
               <li>
                 <Link to='works'>Portfolio</Link>
               </li>
               <li>
                 <Link to='/contact'>Clients</Link>
               </li>
             </ul>
           </nav>
           <Routes>
               <Route exact path='/' element={<navbar/>}/>
               <Route exact path='/intro' element={<intro/>}/>
               <Route exact path='/works' element={<works/>}/>
               <Route exact path='/contact' element={<contact/>}/>
           </Routes>
       </Router>
  );
}

export default Summa

