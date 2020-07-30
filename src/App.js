import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      one: 'white',
      two: 'white',
      three: 'white',
      lastClicked: 'white',
      colour: "white"
    }
  }

  getRandomColour = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  handleClick = (box) => {
    switch(box) {
      case "one": 
        if (this.state.one == "white") {
          let colour = this.getRandomColour()
          setTimeout( () => {
            this.setState({
              one: colour, 
              lastClicked: colour
          })}, Math.floor(Math.random() * 1000))
            return colour      
          }
          this.setState({one: 'white', lastClicked: 'white'})
        break;
        case "two": 
          if (this.state.two == "white") {
            let colour = this.getRandomColour()
            setTimeout( () => {
              this.setState({
                two: colour, 
                lastClicked: colour
              })
            }, Math.floor(Math.random() * 1000))
              return colour      
            }
            this.setState({two: 'white', lastClicked: 'white'})
          break;
          case "three":
            if (this.state.three == "white") {
              let colour = this.getRandomColour()
              setTimeout( () => {
                this.setState({
                  three: colour, 
                  lastClicked: colour
                })
              }, Math.floor(Math.random() * 1000))
                return colour      
              }
              this.setState({three: 'white', lastClicked: 'white'})
          break;
          default: break;
    }
  }

  componentDidUpdate = () => {
    let myPromise = new Promise((resolve, reject) => {
      if (this.state.lastClicked !== "white") {
        this.setState({lastClicked: "white"})
        resolve(this.state.lastClicked)
      }
    })
    
    myPromise
    .then(result => {
      console.log(result)
      this.setState({colour: result})
    })
    .catch((err) => console.log(err))
  }
  

  render() {
    return(
      <div className="App" style={{backgroundColor: this.state.colour}}>
        <h1>Promises</h1>
        <div className="container">
          <div className="box" id="box1" 
            style={{backgroundColor: this.state.one}} 
            onClick={() => this.handleClick('one')}>

          </div>
          <div className="box" id="box2" 
            style={{backgroundColor: this.state.two}} 
            onClick={() => this.handleClick('two')}>

          </div>
          <div className="box" id="box3" 
            style={{backgroundColor: this.state.three}} 
            onClick={() => this.handleClick('three')}>

          </div>
        </div>
      </div>
      );
    }
}

export default App;
