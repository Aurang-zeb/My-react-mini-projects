import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-danger ">
  <div class="container-fluid ">
    <Link className="navbar-brand text-white" to="/">Traveler</Link>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="/">Home</Link>
        </li>
       
        <li class="nav-item">
          <Link class="nav-link text-white" to="/about">About</Link>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
