import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import {faFilm,faHouse,faMusic,faVideo,faFolder,faBars,faCirclePlay,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import './index.css';
import img1 from './1.jpg';


function ProjectorSimulation() {
  return (
    <div class="b1">
      <div className="d1">
        <button class="btn1"><FontAwesomeIcon icon={faBars} size="2xl"/></button>
        <button class="btn1"><FontAwesomeIcon icon={faFilm} size="2xl" /></button>
        <button class="btn1"><FontAwesomeIcon icon={faHouse} size="2xl"/></button>
        <button class="btn1"><FontAwesomeIcon icon={faMusic} size="2xl" /></button>
        <button class="btn1"><FontAwesomeIcon icon={faVideo} size="2xl" /></button>
        <button class="btn1"><FontAwesomeIcon icon={faFolder} size="2xl"/></button>
        <button class="btn1"><FontAwesomeIcon icon={faCirclePlay} size="2xl"/></button>
      </div>
      <div className="d2">
        <div class="head1"><button class="btn2"><FontAwesomeIcon icon={faYoutube} size="2xl" style={{color: "#e11414",}} /><span class="s1">YouTube</span></button> 
          <input placeholder='Search'></input><button><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
        </div>
        <div class="content">
          <div class="content1">
            <button class="btn3"><img src={img1} width={'250px'} height={'150px'}></img><p class="p1">Anime "weathering With you"</p><p class="view">1 Year ago</p></button>
            <button class="btn3"><img src={img1} width={'250px'} height={'150px'}></img><p class="p1">Anime "weathering With you"</p><p class="view">1 Year ago</p></button>
            <button class="btn3"><img src={img1} width={'250px'} height={'150px'}></img><p class="p1">Anime "weathering With you"</p><p class="view">1 Year ago</p></button>
          </div>
          <div class="content1">
            <button class="btn3"><img src={img1} width={'250px'} height={'150px'}></img><p class="p1">Anime "weathering With you"</p><p class="view">1 Year ago</p></button>
            <button class="btn3"><img src={img1} width={'250px'} height={'150px'}></img><p class="p1">Anime "weathering With you"</p><p class="view">1 Year ago</p></button>
            <button class="btn3"><img src={img1} width={'250px'} height={'150px'}></img><p class="p1">Anime "weathering With you"</p><p class="view">1 Year ago</p></button>
          </div>
          <div class="content1">
            <button class="btn3"><img src={img1} width={'250px'} height={'150px'}></img><p class="p1">Anime "weathering With you"</p><p class="view">1 Year ago</p></button>
            <button class="btn3"><img src={img1} width={'250px'} height={'150px'}></img><p class="p1">Anime "weathering With you"</p><p class="view">1 Year ago</p></button>
            <button class="btn3"><img src={img1} width={'250px'} height={'150px'}></img><p class="p1">Anime "weathering With you"</p><p class="view">1 Year ago</p></button>
          </div>
        </div>
      </div>
    </div>
  )
};

ReactDOM.render(<ProjectorSimulation/>,document.getElementById('root'));