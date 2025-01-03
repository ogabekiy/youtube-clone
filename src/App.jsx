import React from 'react'
import useStore from './store'
import { Home, Navbar, VideoDetails } from './components'
import { Route, Routes } from 'react-router-dom'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App = () => {
  const {count, inc, random} = useStore()
  
  return (
    <div className='font-[Roboto] pt-20 bg-primary'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/video/:id' element={<VideoDetails/>}/>
      </Routes>
    </div>
  )
}

export default App