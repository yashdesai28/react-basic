import './App.css';
// this file get to the componant folder and use this file in this code using classdemo  
import Classdemo from "./components/Classdemo"
// import function components to a this file 
import Functiondemo from './components/Functiondemo';
// impoert the other syntxt of function declaration to the strict type { function name } use this name is this code 
import { Functionsyntext } from './components/Functionsyntext';
//
import Prcprops from  './components/Prcprops';
// import data props data
import prodata from './data/props'
// import state file 
import PrcState from './components/PrcState';
// impoert a counter file 
import Counter from './components/Counter';
//import date file 
import Date from './components/Date';



function App() {
  return (
    // this is jsx  
    // note :- only one parent 
    <div className="App">
      {/* this is the  component to use  and this is resueable */}
     <Classdemo name="dev"/>
     <Functiondemo name="yash"/>
     <Functionsyntext name="yash"/>
     <br></br>

     <Prcprops text={prodata.text} author={prodata.author.name}  dec={prodata.author.dec} img={prodata.author.img}/>
     <PrcState/>
     <Date/>

     <Counter/>
     

    </div>
  );
}

export default App;
