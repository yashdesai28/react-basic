//import the react and component 
import React,{Component} from "react";
// import a function componet 
import Functiondemo from "./Functiondemo";

//this demo is a class base demo 

//create class extend with component  
// note file name and class name must be same with first letter is capital  
class Classdemo extends Component{

    // this is constructor this automatic call this code will be exected 
    Classdemo(props){

    

    }

    // this is render function this is use to rendering a componets 
    render(){

        //this is return statments use to return jsx 
        return(
            
            <div>
                {/*  props using a this.props.attribute-name  */}
                <h2>name : {this.props.name} </h2>
                <h3>age 21</h3>
                <h3>msc.it</h3>
                <Functiondemo name="romit"></Functiondemo>
            </div>

        )
    }

}

// expoert classdemo use for the other file 

export default Classdemo

// summarry of this code is create class using react and component and export this class 

// class base components it's optionly reciving props and return html(jsx) 

// class is a nothing but the this is es6 class in the class managing a states  
// states is the object this is a private object only access the throught the class and this states is store a data throught the calculation 