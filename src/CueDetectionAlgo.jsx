import React from 'react'
import "./CueDetectionAlgo.css"

function CueDetectionAlgo() {
    return (
        <div>
            <h1>Cue Generating Algorithm for a Music Visualizer</h1>
            <section>
                <p>I wanted to make a music visualizer that displays unique visuals and patterns. One way to make it unique was to add an effect every time a song suddenly changes from low amplitude to high amplitude. A sudden change in amplitude is significant part of a song because it marks a transition in mood. For example, a song building towards a energetic climax, or a song transitioning from a climax to a more relaxed part.</p>
                <p>The next challenge was going to be how to detect these sudden changes in amplitude. Questions arise like how big should the change in amplitude be to be considered significant? As well as how small should the time frame be between a low amp and high amp be to be considered significant?</p>
                <p>I ultimately landed on using k means clustering algorithm on the amplitude over time to separate high amplitudes from low amplitudes.</p>

            </section>
            <section>
                <h3>The process of the algorithm</h3>
                <ul >
                    <li><strong>Data Extraction: </strong>Raw audio is read to obtain amplitude over time.</li>
                    <li><strong>Preprocessing the data: </strong>A Gaussian filter is applied to smooth out micro fluctuations and isolate macro trends in the audio.</li>
                    <li><strong>Clustering: </strong> A K-means model with k = 2 is trained on the smoothed data to categorize the song's energy into "high" and "low" states.</li>
                    <li><strong>Cue Generation: </strong>The output from the clustering algorithm is then traversed to generate cues for the front-end visualizer</li>
                </ul>
            </section>
            <section>
                <h1>Results of the model for Song of Healing by Koji Kondo</h1>
                <img className='CDA__graph' src='src/assets/sh_1.png'></img>
                <p>Later iterations involved me partitioning the data set by its labels(High amp, Low amp) and training each partition on another K-means model with k = 3 to get more cues and make the visualizer more interesting.</p>
                <img className='CDA__graph' src='src/assets/sh_2.png'></img>
            </section>

        </div>
    )
}

export default CueDetectionAlgo
