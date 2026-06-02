import React from 'react'
import Header from './Header'
import "./Home.css"
import { Link } from 'react-router-dom'

export default function Home(props) {
  return (
    <div>
      <h1>Juan Hernandez</h1>
      <img className='home__icon' src='src/assets/me.jpg'></img>
      <details >
        <summary>About Me</summary>
        <p>
          I specialize in building software, machine learning, UX, design, solving problems, and communication. I consistently spend my time learning as much as I can.
        </p>
      </details>

      <a className='home__link' href="https://github.com/juan497" >
        Visit GitHub
      </a>

      <br />
      <section>
        <h2>Cue Generating Algorithm for a Music Visualizer</h2>
        <div>
          <p>A machine learning algorithm that generates cues to change the visuals based on the energy of a song.</p>
          <img className='home__img' src='src/assets/leds.gif'></img>
          <a className='home__link' href="/CueDetectionAlgo">more details</a>
        </div>
      </section>
      <br />
      <section>
        <h2>Coffee Shop Sales Forecaster Model</h2>
        <div>
          <p>A project that predicts weekly coffee shop sales revenue using historical transaction data.</p>
          <img className='home__img' src='src/assets/sales.png'></img>
          <a className='home__link' href="/Forecaster">more details</a>
        </div>
      </section>
      <br />
      <section>
        <h2>DDDD</h2>
        <div>
          <p>A project that predicts weekly coffee shop sales revenue using historical transaction data.</p>
          <img className='home__img' src='src/assets/sales.png'></img>
          <a className='home__link' href="/Database">more details</a>
        </div>
      </section>
      <br />
      <section>
        <h2>Combining all the Components to Create LED Music Visualizer App</h2>
        <div>
          <p>How I designed, integrated and validated the components for the creation of the music visualizer App. </p>
          <img className='home__img' src='src/assets/leds.jpg'></img>
          <a className='home__link' href="/MVComponents">more details</a>
        </div>
      </section>

      {/* <section>
        <h2>Coffee Shop Customer Segmentation Model</h2>
        <div>
          <p>A machine learning algorithm that generates cues to change the visuals based on the energy of a song.</p>
          <img className='home__icon' src='src/assets/seg.jpg'></img>
          <a className='home__link' href="/Segmentation">more details</a>

        </div>
      </section> */}

    </div>
  )
}