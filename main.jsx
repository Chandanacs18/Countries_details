import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Header from './Components/Header.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Country1 from './Components/Country1.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/:cname' element={<Country1/>}/>
      </Routes>
    </BrowserRouter>,
)
