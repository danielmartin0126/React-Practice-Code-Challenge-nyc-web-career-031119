import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
// const API = "http://localhost:3000/sushis"
let n = 0
let y = 4


class App extends Component {
  state = {
    sushis: [],
    current: [],
    eaten: [],
    money: 100
  }

  componentDidMount() {
    console.log("CDM")
    fetch('http://localhost:3000/sushis')
      .then(r => r.json())
      .then(data => {
        this.setState({ sushis: data,
        current: data.slice(n,y)}, () => {
          console.log("state",this.state.sushis)
        })
      })
    }


    handleCurrent= () => {
      console.log("yoit")
      n += 4
      y += 4
      this.setState({
        current: this.state.sushis.slice(n,y)
      })
    }

    handleSushiClick = (e) => {
      let ate = this.state.sushis.find(sushi => sushi.id == e.target.id)
      this.state.money >= ate.price && !this.state.eaten.includes(ate) ? 
        this.setState({
          eaten: [...this.state.eaten, ate],
          money: (this.state.money-ate.price)
        })
        :
        console.log("fuck outta here")
    }



  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} eaten={this.state.eaten} current={this.state.current} handleSushiClick={this.handleSushiClick} handleCurrent={this.handleCurrent}/>
        <Table eaten={this.state.eaten} money={this.state.money}/>
      </div>
    );
  }
}

export default App;