
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

function App() {


  return (
    <>
     <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='max-w-screen-xl mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 flex-1'>
        <Outlet />
      </div>
      <Footer />
    </div>
    </>
  )
}

export default App
