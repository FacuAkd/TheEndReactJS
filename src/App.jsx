import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import Redes from './components/Redes'
import Footer from './components/Footer'
import Carrusel from './components/Carousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer/>
      <Redes/>
      <Carrusel/>
      <Footer/>
    </div>
  )
}

export default App
