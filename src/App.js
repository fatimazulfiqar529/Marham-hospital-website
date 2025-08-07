import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Front from './components/front';
import Login from './components/Login';
import Navbar from './components/navbar';
function App() {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<Front/>}/>
            <Route path='/Login' element={<Login/>}/>
      <Route path='/navbar' element={<Navbar/>}/>

    </Routes>
  </Router>
  );
}

export default App;
