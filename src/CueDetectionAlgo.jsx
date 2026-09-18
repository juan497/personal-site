import React from 'react'
import "./CueDetectionAlgo.css"

function CueDetectionAlgo() {
    return (
        <div>
            <h1>Cue Generating Algorithm for a Music Visualizer</h1>
            <img className='home__img' src='src/assets/leds2.gif'></img>
            <a className='home__link' href="https://www.youtube.com/watch?v=ybZva3cibiE" >
            YouTube Link to Music Visualizer
            </a>
            <section>
                <h3>Objective</h3>
                <p> Make a unique music visualizer that can synchronize visuals to the mood a song.</p>
            </section>
            <section>
                <h3>Data Acquisition</h3>
                <p> I used a python package that downloads audio from YouTube to obtain mp3 files of songs from a variety of genres. Genres that I included are electronic dance music, progressive house music, and metal.
                Used Librosa python package music and audio signal analysis audio to obtain  Root-mean-square (RMS) energy tracks audio loudness over time</p>
            </section>

            <section>
                <h3>Exploratory Data Analysis</h3>
                <p>I analyzed several amplitude over time graphs and noticed that many of these songs had major spikes or drops in amplitude that are correlated with a change in mood. </p>
                <p>Example of “Song of Healing” by Koji Kondo at 150 sec, the song goes from high energy to low energy, then spikes back up to a climactic section.</p>
                <img className='CDA__graph' src='src/assets/sh_0.png'></img>
            </section>

            <section>
                <h3>Acting on the Insight</h3>
                <p>With this new insight, I could use the changes in amplitude to detect significant parts of a song and use these as cues for the music visualizer, I could create effects that would play ounce it hit this cue.</p>
                <div className="row">
                <div className="column">
                    <img src="src/assets/circle.gif" alt="Snow" ></img>
                </div>
                <div className="column">
                    <img src="src/assets/pulse.gif" alt="Forest" ></img>
                </div>
                {/* <div className="column">
                    <img src="src/assets/leds.gif" alt="Mountains"></img>
                </div> */}
                </div>
            </section>

            <section>
                <p>The next question was how to detect these significant changes in amplitude, a naive approach would be to calculate the difference between the current amplitude and a amplitude x seconds away and if the difference is greater then a threshold then it is considered significant. The problem is a static threshold would not work for a wide range of songs with different amplitudes. </p>
                <p>I realized I could use the K-means algorithm to split the song into 2 labels, high amps and low amps. </p>
                <p>A Gaussian filter is applied to smooth the raw amplitude before training the model to smooth out micro fluctuations and isolate macro trends in the audio.</p>

                <img className='CDA__graph' src='src/assets/sh_1.png'></img>
                <p>I then partitioned the labels(High amps, Low amps) and trained each partition on another K-means model with k = 3 to get more cues and make the visualizer more interesting.</p>
                <img className='CDA__graph' src='src/assets/sh_2.png'></img>
            </section>
            <section>
                <h3>Evaluation of the Model</h3>
                <p>the silhouette score for each K-means model.</p>
                    <table>
                    <tr>
                        <th>Song Name</th>
                        <th>Score k = 2</th>
                        <th>Score k = 3 (low amps)</th>
                        <th>Score k = 3 (high amps)</th>
                    </tr>
                    <tr>
                        <td>Song of Healing</td>
                        <td>.66</td>
                        <td>.56</td>
                        <td>.54</td>
                    </tr>
                    <tr>
                        <td>Virtual Self</td>
                        <td>.83</td>
                        <td>.67</td>
                        <td>.68</td>
                    </tr>
                    <tr>
                        <td>Goodbye to a World</td>
                        <td>.77</td>
                        <td>.59</td>
                        <td>.70</td>
                    </tr>
                    <tr>
                        <td>I Could Be the One</td>
                        <td>.76</td>
                        <td>.55</td>
                        <td>.69</td>
                    </tr>
                    <tr>
                        <td>Get Your Wish</td>
                        <td>.67</td>
                        <td>.66</td>
                        <td>.72</td>
                    </tr>
                    <tr>
                        <td>Beauty of Annihilation</td>
                        <td>.74</td>
                        <td>.73</td>
                        <td>.55</td>
                    </tr>
                    </table>
            </section>
            <section>
                <h3>Conclusion</h3>
                <p>Using the change in amplitude is a effeective wasy to obtain the energy of the song, and a elegant soultion to genreate cues . using the K- means clustierning algoritm was a elogent soultion at fidning the significant changes in amptuide without having to worry about how high a or the change should be, 
                    and partioning the labels for another k -means algorithm split is a effective way at capturing even more signifactn part of the song.
                </p>
            </section>
            <a className='home__link' href="https://www.youtube.com/watch?v=ybZva3cibiE" >
            YouTube Link to Music Visualizer
            </a>
        </div>
    )
}

export default CueDetectionAlgo
