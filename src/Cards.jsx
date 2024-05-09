import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

function Cards(props) {
  return (
   
      <div class="card" >
  <img src={props.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.Desc
    }</p>
    <Link to={props.links} class="btn btn-danger">Read More</Link>
  </div>
</div>
    
  )
}

export default Cards
