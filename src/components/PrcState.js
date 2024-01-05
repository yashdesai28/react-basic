import React, { Component } from 'react';

export default class PrcState extends Component {

    constructor() {
        super();

        this.state = {
            name: "yash",
            age: "30",
            deg: "msc it"
        };
    }

    handleClick = () => {
        // Using arrow function to maintain the correct 'this' context
        console.log(this.state);
        this.setState({ name: "dev",age:"20",deg:"11"},()=>{
          console.log(this.state);
        });
    }

    render() {
        return (
            <div>
                <h1>hello i am {this.state.name}   age=  {this.state.age} deg=  {this.state.deg}</h1>
                <button onClick={this.handleClick}>Click to change name</button>
            </div>
        );
    }
}
