import React, { useState } from 'react'
import './Home.css'
import Herotag from '../../components/Herotag'
import Exploremenu from '../../components/Exploremenu'
import Displaymenu from '../../components/Displaymenu'
const Home = () => {
  const [category,setCategory]=useState('All')
  return (
    <div>
        <Herotag/>
        <Exploremenu category={category} setCategory={setCategory}/>
        <Displaymenu category={category} />
        
    </div>
  )
}

export default Home