import React from 'react'
import Header from './Header'
import "./Home.css"
import { Link } from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Home(props) {
  return (
    <div>
      <section>
        <h2>RaveBoard</h2>
        <div>
          <p className='home__des'>A LED Music Visualizer that uses a unique Cue Generating Algorithm on mp3 files.<a className='home__link' href="/CueDetectionAlgo">more details</a></p>
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
          <p>A project that predicts weekly coffee shop sales revenue using historical transaction data.</p>
          <img className='home__img' src='src/assets/sales.jpg'></img>
          <a className='home__link' href="/Forecaster">more details</a>
        </div>
      </section>
      <br />
      <section>
        <h2>S</h2>
        <div>
          <p>A project that predicts weekly coffee shop sales revenue using historical transaction data.</p>
          <img className='home__img' src='src/assets/sales.jpg'></img>
          <a className='home__link' href="/Forecaster">more details</a>
        </div>
      </section>
      <br />
      <img className='downtown__img' src='src/assets/downtown.jpg'></img>
      <br />
      <p>2026 Juan Hernandez</p>
    </div>
  )
}