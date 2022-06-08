import React from 'react';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        
        }; 
    }
    //componentDidMount means its work after render just like documnet.ready in jQuery
    componentDidMount() {
        this.clockTimer = setInterval(() =>{this.tick()}, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }
    tick(){
        this.setState({ date:new Date(), });
    }
  render(){
    return(
      <h1>Hello  
      {this.props.name}
        {this.state.date.toLocaleTimeString(this.props.local)}
      </h1>
    );
  }
}
export default App;