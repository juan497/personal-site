import { BrowserRouter, Routes, Route,Router } from 'react-router-dom';

//add a router to home page and other pages

//add a header class with all the links back to home page

// add margins on the right and left. add color to some texts, 

//add a drop down , click triangle add paragraph comp,   --- do this later


// orfanize the text
import Header from './Header';
import Home from './Home';
import MusicVisualizer from './MusicVisualizer';
import CueDetectionAlgo from './CueDetectionAlgo';
import MVComponents from './MVComponents';


function App() {
  return (
      <BrowserRouter >
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MusicVisualizer" element={<MusicVisualizer />} />
        <Route path='/CueDetectionAlgo' element = {<CueDetectionAlgo/>}/>
        <Route path='/MVComponents' element ={<MVComponents/>}/>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App

