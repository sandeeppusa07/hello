import First from './first'
import Second from './second'
import {Six }from './second'
import { Navbar } from './navbar'
import {Third,Five} from './third'
// import { Five } from './five';
import { BrowserRouter,Route,Routes } from 'react-router-dom'


function App() {
 
  return (
    <>
     <BrowserRouter>

     <Navbar/>
     <Routes>
      <Route path='/a' element={<First/>} />
      <Route path='/b' element={<Second/>}></Route>
      <Route path='/c' element={<Third/>}/>
      <Route path="/d" element={<Five />} />
      <Route path="/e" element={<Six />} />
     </Routes>
     </BrowserRouter>
      
    </>
  )
}

export default App
