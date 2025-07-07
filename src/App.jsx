import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import WatchList from './pages/WatchList'
import { WatchListProvider } from './context/WatchListContext'


function App() {

  return (
    <WatchListProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchList" element={<WatchList />} />
        </Routes>
      </BrowserRouter>
    </WatchListProvider>
  )
}

export default App
