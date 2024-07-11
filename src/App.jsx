import { useState } from 'react'
import Header from './components/Header/Header'
import GlobalStyles from './components/GlobalStyles'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import AddVideo from './Pages/AddVideo/AddVideo';
import Footer from './components/Footer/Footer';
function App() {


  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/addVideo' element={<AddVideo/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
