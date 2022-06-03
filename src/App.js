import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import React from 'react';

import Home from './pages/Home'
import Cuisine from './pages/Cuisine'
import Navbar from './components/Navbar'
import Searched from './pages/Searched';
import RecipeDetails from './pages/RecipeDetails'
import Error from './pages/Error'

function App() {
  return (
    <Router>

      <Navbar />
      
      <Routes>

        <Route path="/" element={<Home />} />
        
        <Route path="/cuisine/:type" element={<Cuisine />} />

        <Route path="/searched/:search" element={<Searched />} />
        
        <Route path='/recipes/:id' element={<RecipeDetails />} />
        
        <Route path='*' element={<Error />} />
        
      </Routes>
      
    </Router>

  );
}

export default App;
