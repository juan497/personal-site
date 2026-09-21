import React from 'react'
import Header from './Header'
import "./Home.css"
import { Link } from 'react-router-dom'

import GitHubIcon from '@mui/icons-material/GitHub';

export default function Home(props) {
  return (
    <div>
      <section>
        <h2>RaveBoard_</h2>
        <div>
          <p className='home__des'>A LED Music Visualizer that uses a unique Cue Generating Algorithm on mp3 files.<Link className='home__link' to="/CueDetectionAlgo">more details</Link></p>
          <div className="video-container"> 
  <iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/wODsZoH66hM?autoplay=1&mute=1&playsinline=1&rel=0" 
    title="YouTube Video Player" 
    frameBorder="0" 
    allow="autoplay; encrypted-media; picture-in-picture" 
    allowFullScreen 
  /> 
</div>

        </div>
      </section>
      <br />
      <section>
        <h2>Distance Vector Routing Protocol Simulation</h2>
        <div>
          <p>A Simulation of the Distance Routing Protocol using sockets and multithreading.<Link className='home__link' to="/DVRPSim">more details</Link></p>
          <img className='home__img' src='./bellman.jpg' alt="Amiibo" />
        </div>
      </section>
      <section>
        <h2>Amiibo Search App</h2>
        <div>
          <p>A Search Application for Nintendo Amiibo figures.<Link className='home__link' to="/AmiiboSearchApp">more details</Link></p>
          <img className='home__img' src='./amiibo.jpg' alt="Amiibo" />
        </div>
      </section>
      <br />
      <br />
      <img className='home__img' src='./downtown.jpg' alt="Amiibo" />
      <br />
      <p>2026 Juan Hernandez</p>
    </div>
  )
}