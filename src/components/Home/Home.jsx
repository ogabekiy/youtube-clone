import React from 'react'
import Videos from '../Videos'
import SideBar from '../SideBar'

const Home = () => {
  return (
    <div className='min-h-screen flex bg-primary'>
      <SideBar/>
      <Videos/>
    </div>
  )
}

export default Home