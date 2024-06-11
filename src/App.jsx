// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { About } from './components/About'
import Card from './components/Card'
import { Carousel } from './components/Carousel'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
// import Productos from './components/Productos'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <NavBar/>
      <Carousel/>
      <About/>
      <Card/>
      <Contacts/>
      <Footer/>
      
      
      
    </>
  )
}

export default App
