import { useState } from 'react'
import Header from './components/Head/Header'
import Mixes from './components/Mixes/Mixes'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Mixes heading={"Your Mixes"}></Mixes>
      <Mixes heading={"Recently added"}></Mixes>
      <Footer></Footer>
    </>
  )
}

export default App
