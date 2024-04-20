import React, { useState } from 'react'

class Clock extends React.Component {

    constructor(props) {    
        super(props);    
        this.state = {date: new Date(), visible: true};  
    }

    tick() {  
        this.setState({      
            date: new Date()    
        });
        console.log(this.state.date.getSeconds());  
        if(this.state.date.getSeconds() === 59){
            console.log("ZMIZIM");
            this.setState({      
                visible: false   
            });
            clearInterval(this.timerID);
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => {
            this.tick()
        },
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }

    render() {
      return (
        <div>
          {this.state.visible && <h1>Hello, world!</h1>}
          {this.state.visible && <h2>It is {this.state.date.toLocaleTimeString()}. I will dissapear at 59 seconds mark!</h2>}
        </div>
      );
    }
  }
export default Clock