import Header from './components/header/header'
import Banner from './components/banner/banner'
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/footer'
import usePetition from './hooks/usePetition'

function App() {
  
  
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
