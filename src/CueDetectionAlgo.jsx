import React from 'react'
import "./CueDetectionAlgo.css"

function CueDetectionAlgo() {
    return (
        <div>
            <h1>RaveBoard</h1>
            <section>
                <div className="row">
                <div className="column">
                    <img src="src/assets/circle.gif" alt="Snow" ></img>
                </div>
                <div className="column">
                    <img src="src/assets/pulse.gif" alt="Forest" ></img>
                </div>
                <div className="column">
                    <img src="src/assets/circle.gif" alt="Snow" ></img>
                </div>
                </div>
            </section>
            <section>
                <div class="container">
  
  <div class="image-box">
  <img className='home__img' src='src/assets/leds.jpg'></img>
  </div>

  <div class="text-content">
    <h1>What is it?</h1>
    
        <p>The RaveBoard is an ambient LED music visualizer. I wanted to build something tactile that could interact with the real world through physical LED lighting. The project contains a variety of LED effects and animations that change based on different parts of a song.</p>
        <p> I created a Python-based user interface that allows the user to provide a YouTube URL, obtain the audio file, and process the song for visualization. One of the most interesting parts of the project was developing and iterating on an algorithm to identify significant changes in the music. The algorithm uses K-means clustering on the song's amplitude over time to separate higher-energy sections from lower-energy sections. The resulting information is written to a JSON file containing cues that are later used to determine when different effects and animations should play.</p>
        <p>RaveBoard taught me a great deal about designing software where multiple components have to interface with one another. It also gave me experience turning an abstract idea into a working system.</p>
  </div>

</div>
            </section>
        </div>
    )
}

export default CueDetectionAlgo
