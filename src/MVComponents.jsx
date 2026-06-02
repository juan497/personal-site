import React from 'react'

function MVComponents() {
  return (
    <div>
    <h1>Combining all the Components to Create LED Music Visualizer App</h1>
    <section>
        <h3>The components to integrate: </h3>
        <ul >
            <li>Python user interface that gets mp3s from YouTube</li>
            <li>Python machine learning algorithm that generates cues based on the song. See  <a className='link' href="CueDetectionAlgo">Cue Generating Algorithm </a> for more details.</li>
            <li>Java program that plays a selected song ,and sends data to the micro controller in real time using a serial communication.</li>
            <li>Micro controller that receives the data to control the LEDs to visualize the song</li>
        </ul>
    </section>
    <img className='home__img' src='src/assets/leds.jpg'></img>
    <section>
        <h3>Validation</h3>
        <p>Validation process involved making sure each component works properly on its own before putting it all together. </p>
        <p>Validating if the micro controller could read and process the incoming data fast enough to show fluid visuals. It turns out the Arduino didn’t have enough computing capability to display visuals in a fluid manner, so I had to get another micro controller with more computing capability.</p>
        <p>Making sure the amperage in the circuit never exceed 2 amps because the wires can not safely handle more then 2 amps before being damaged by heat. This Involved using a multimeter and making sure each pattern with each color palette never exceed 2 amps. The color of the LED matters since the color determines how much amps a LED will need.</p>
        <p>Prototyping a proof of concept before I start polishing the visualizer.</p>
    </section>

</div>

  )
}

export default MVComponents
