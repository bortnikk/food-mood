import React from 'react'


import Vegeterian from '../components/Vegeterian'
import Popular from '../components/Popular'
import TodaysFavorite from '../components/TodaysFavorite' 

function Home() {
  return (
    <section className='home'>
      <TodaysFavorite/>
      <Popular/>
      <Vegeterian />
    </section>
  )
}

export default Home