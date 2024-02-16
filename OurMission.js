import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import hanuman from './hanuman.jpg';
import Yourproduct from "./Yourproduct";
import Centerheading3 from "./Centerheading3";
import Centerheading2 from "./Centerheading2";
function OurMission() {
    return <>
    <Centerheading2></Centerheading2>
        <div className='container bg-light' style={{ margin: '40px' }}>
            <div class="row">
                <div class="col">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, tempore atque? Ratione in dolore corrupti sapiente, nisi nemo maiores iure doloremque labore aliquam nulla maxime beatae corporis perferendis unde optio!</div>
                <div class="col"><img src={hanuman} width="100%" height="100%" /></div>

            </div>
        </div>
        <Centerheading3></Centerheading3>

        <Yourproduct></Yourproduct>
    </>
}

export default OurMission;