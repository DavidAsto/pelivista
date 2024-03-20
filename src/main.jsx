import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import InfoPage from './components/info-page/infoPage.jsx'
import Body from './pages/index.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route index element={<Body/>}/>
        <Route path='peliculas/:id' element={<InfoPage url="movie/"/>}/>  
        <Route path='tv/:id' element={<InfoPage url="tv/"/>}/>    {/*PUEDO TRAER 1 COMPONENTE PARA RENDERIZAR 2 DIFERENTES DATOS
                                                                    , SOLO TENGO QUE CAMBIAR LAS RUTAS COMO TV/:id*/}
      </Route>
    </Routes>
  </BrowserRouter>
)
