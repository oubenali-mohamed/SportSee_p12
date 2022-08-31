import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Error from './components/Error/Error'
import Navigation from './components/Navigation/Navigation'
import Profil from './pages/Profil'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        {<Route path="/profil/:id" element={<Profil />} />}
        <Route path="/reglage" element={<Profil />} />
        <Route path="/communaute" element={<Profil />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
