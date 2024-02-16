import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import OurMission from './OurMission';
import hanuman from './hanuman.jpg';
function Logo(){
    return <>
    <div className='container bg-light' style={{margin:'40px'}}>
      <div class="row">
  <div class="col">
  <img src={hanuman} width="100%" height="100%" />
  </div>
  <div class="col">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, tempore atque? Ratione in dolore corrupti sapiente, nisi nemo maiores iure doloremque labore aliquam nulla maxime beatae corporis perferendis unde optio!</div>
</div>
</div>
<OurMission></OurMission>
    </>
 }

export default Logo;