import React from 'react'
import Navbar from './components/Navbar'
import About1 from './components/About1'
import About2 from './components/About2'
import About3 from './components/About3'
import About4 from './components/about4'

const App = () => {
  return(
    <div >
      <Navbar/>
      <main>
        <div id='home'>
          <About1/>
        </div>
        <div>
         <About2/> 
        </div>
        <div>
         <About3/> 
        </div>
        <div>
         <About4/> 
        </div>
      </main>

    </div>
  )
}
export default App