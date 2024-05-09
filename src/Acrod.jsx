import React from 'react'
import './Acord.css'

function Acrod() {
  return (
    <div class='acordian' > 
      <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Tre Cime of Itlay
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Tre Cime di Lavaredo: Tre Cime di Lavaredo, also known as the Drei Zinnen, is a striking mountain group in the Italian Dolomites, attracting hikers and climbers worldwide with its breathtaking views.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Trams In Luxumberg
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Luxembourg City: Luxembourg City, the capital of the Grand Duchy of Luxembourg, boasts a stunning medieval old town and dramatic fortifications, including the Bock Casemates and the Grand Ducal Palace.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Swiss Mountains And Caves
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Swiss Alps: The Swiss Alps offer some of the most iconic mountain scenery globally, providing opportunities for skiing, hiking, and mountaineering, as well as breathtaking vistas of landmarks like the Matterhorn and the Jungfrau region.
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Acrod
