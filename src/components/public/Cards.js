import React from 'react'
import Card from './Card'
import rickandmorty from '../../services/RyM.service'

const Cards = ({rick}) => {

    const cardList = rick.map( (m)=> <Card/> )
  

    console.log(rick)

  return (
    <div className="album py-5 bg-light">
          <div className="container">
        
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

            {cardList}

            </div>
          </div>
        </div>
  )
}

export default Cards
