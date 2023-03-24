import React from 'react'
import SeriesModal from './SeriesModal'

export default function SeriesCard({id, name, poster, description}) {
  return (
    <div className="seriesCard">
      <SeriesModal name={name} poster={poster} description={description}>
        <img className="poster" src={poster}/>
        <div className="name">{name}</div>
      </SeriesModal>
    </div>
    
  )
}

//poster and name are children of seriesModal so I acpect it in modal