import React from 'react'
import Header from './Header'
import "./Home.css"
import { Link } from 'react-router-dom'

export default function Home(props) {
  return (
    <div>
      <h1>Juan Hernandez</h1>
      <details >
        <summary>About Me</summary>
        <p>
          I specialize in building software, machine learning, UX, design, product, solving problems, and communicating
          ideas. I've written patents, blog posts, documentation, and specifications. I consistently spend my time
          learning as much as I can, and sharing that knowledge with others.
        </p>
      </details>

      <a className='home__link' href="https://google.com" >
        Visit Google
      </a>

      <br />
      <section>
        <h2>Cue Generating Algorithm for a Music Visualizer</h2>
        <div>
          <a className='home__link' href="/CueDetectionAlgo">more details</a>
          <p>A machine learning algorithm that generates cues to change the visuals based on the energy of a song.</p>
        </div>
      </section>
      <br />
      <section>
        <h2>Combining all the Components to Create LED Music Visualizer App</h2>
        <div>
          <a className='home__link' href="/MVComponents">more details</a>
          <p>How I designed, integrated and validated the components for the creation of the music visualizer App. </p>
        </div>
      </section>
      <br />
      <section>
        <h2>Cue Generating Algorithm for a Music Visualizer</h2>
        <div>
          <a className='home__link' href="/CueDetectionAlgo">more details</a>
          <p>A machine learning algorithm that generates cues to change the visuals based on the energy of a song.</p>
        </div>
      </section>

    </div>
  )
}