import React, { useState, useEffect } from 'react'
import Card from './Card'
import '../components/WomenCards.css'

export default function WomenCards() {
  const [womenData, setWomen] = useState([])

  useEffect(() => {
    const fetchWomenData = async () => {
      try {
        const response = await fetch('https://66562e799f970b3b36c48e76.mockapi.io/women');
        console.log(response)
        const data = await response.json();
        console.log(data)
        setWomen(data);

      } catch (error) {
        console.error('Error fetching data', error)
      }
    }
    fetchWomenData();
  }, [])

  return (
    <div className='container'>
      <h1>Lista de Mujeres</h1>
      <ul>
        {womenData.map(woman => (
          <li key={woman.id}>
            <Card name={woman.name}
            lastName={woman.lastName}
            photo={woman.photo}
            nationality={woman.nationality}
            bio={woman.bio}
            />            
          </li>
        ))}
      </ul>
    </div>
  )
}


