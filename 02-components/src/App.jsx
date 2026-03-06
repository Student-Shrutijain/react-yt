import React from 'react'
import Card from './component/card';

const App = () => {
  return (
    <div>
      <div className='card'>
        <h1>Shruti Jain</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ab!</p>
      </div>
      {Card()}
      
    </div>
  )
}

export default App
