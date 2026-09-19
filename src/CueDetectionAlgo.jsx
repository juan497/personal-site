import React from 'react'
import "./CueDetectionAlgo.css"

function CueDetectionAlgo() {
    return (
        <div>
            <h1>Cue Generating Algorithm for a Music Visualizer</h1>
            <section>
                <h3>Objective</h3>
                <p> Make a unique music visualizer that can synchronize visuals to the mood a song.</p>
            </section>
            <section>
                <h3>Exploratory Data Analysis</h3>
                <p>I analyzed several amplitude over time graphs and noticed that many of these songs had major spikes or drops in amplitude that are correlated with a change in mood. </p>
                <p>Example of “Song of Healing” by Koji Kondo at 150 sec, the song goes from high energy to low energy, then spikes back up to a climactic section.</p>
                <img className='CDA__graph' src='src/assets/sh_0.png'></img>
            </section>
        </div>
    )
}

export default CueDetectionAlgo
