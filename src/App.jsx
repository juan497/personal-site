

//add a router to home page and other pages

//add a header class with all the links back to home page

// add margins on the right and left. add color to some texts, 

//add a drop down , click triangle add paragraph comp,   --- do this later


// orfanize the text
// 1. Import HashRouter instead of BrowserRouter
import { HashRouter, Routes, Route } from 'react-router-dom'; 
import Header from './Header'; 
import Home from './Home'; 
import CueDetectionAlgo from './CueDetectionAlgo'; 
import AboutMe from './AboutMe'; 
import DVRPSim from './DVRPSim'; 
import AmiiboSearchApp from './AmiiboSearchApp';

function App() { 
  return ( 
    // 2. Wrap your app in HashRouter
    <HashRouter> 
      <Header/> 
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path='/CueDetectionAlgo' element={<CueDetectionAlgo/>}/> 
        <Route path='/AboutMe' element={<AboutMe/>}/> 
        <Route path='/DVRPSim' element={<DVRPSim/>}/> 
        <Route path='/AmiiboSearchApp' element={<AmiiboSearchApp/>}/> 
        <Route path="*" element={<h1>404</h1>} /> 
      </Routes> 
    </HashRouter> 
  ); 
} 

export default App;

