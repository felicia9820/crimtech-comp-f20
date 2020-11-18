import logo from './logo.svg';
import './App.css';
import React from 'react';

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { start_time: 0, ran_once: false, counting: false, true_duration: 0, reaction_time: 0, color: 'green'};
    this.process_click = this.process_click.bind(this);
  }

  handle_color = (c) => {
    // TODO: Your code here!
    
      this.setState({color:c}); // count is 0 here
   
    
  }

  
  start_count() {
    // TODO: Your code here!
    let curr = window.performance.now();
    let td = ((Math.random() * 7000) + 2000)

    this.setState({start_time: this.state.start_time + curr}, () => {
      console.log(this.state.start_time)});
    this.setState({true_duration: this.state.true_duration + td});
    
    this.setState({counting: true});
    this.setState({color:'DarkRed'});
    console.log(curr)
    console.log(td)
    console.log(this.state.true_duration)
    console.log(this.state.start_time) 

    setTimeout(() => {this.handle_color('green')}, this.state.true_duration + td);
    
  }


  
  

  end_count() {
    // TODO: Your code here!
    let time_passed = window.performance.now() - this.state.start_time
    if (time_passed > this.state.true_duration) {
      this.setState({ran_once:true});
      this.setState({counting:false});
      this.setState({reaction_time:time_passed - this.state.true_duration});
    }
  }
  process_click() {
    if (this.state.counting) {
      this.end_count();
    } else this.start_count();
  }
  render() {

    var msg = "Click me to begin!";
    let r = this.state.reaction_time;

    if (this.state.counting && this.state.color === 'DarkRed') {
      msg = "Wait for Green";
    } else if (this.state.counting && this.state.color === 'green') {
      msg = "Click!";
    } else if (this.state.ran_once) {
      msg = "Your reaction time is " + Math.round(r,2) + "ms";
    } else {
      msg = "Click me to begin!";
    }
    // TODO: Your code here!
    return (
      <div className = "PanelContainer" onClick = {this.process_click} style={ { background: this.state.color} }>
        <div className = "Panel">{msg}</div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className =  "Header">How Fast is your Reaction Time?</h1>
        <Panel />
        <p>Click as soon as the red box turns green. Click anywhere in the box to start.</p>
      </header>
    </div>
  );
}

export default App;
