import React from 'react'
import '../components/Card.css'

export default function Card ({name, lastName, photo, nationality, bio}) {
  return (
    <div className='card-container'>
        <img src={photo} alt={name} className='card-image'/>
        <div className='text-container'>
            <h2>{name} {lastName}</h2>
            <p>{nationality}</p>
            <p>{bio}</p>
        </div>      
    </div>
  )
}


