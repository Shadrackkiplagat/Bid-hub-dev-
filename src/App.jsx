import React from 'react'
import Home from './components/Home'
import Dashboard from '../../Bid_hub/src/components/Dashboard/dashboard';
import HouseDescription from './components/HouseDescription'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => (

  <div className='App'>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/itemDetails' element={<HouseDescription />} />
        <Route path='/dashboard' element={<Dashboard/>}/>
        {/* <Route path='/item' element={<Items/>}/> */}

      </Routes>

    </Router>

   

  </div>

)

export default App
