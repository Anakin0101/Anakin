import React ,{Component} from 'react';
import Ninjas from "./Ninjas";
import AddNinja from "./AddNinja";

class App extends Component {

  state = {
    ninjas : [
      {name : "Anakin" ,age :"24" , skills : "Kungfu-Master" , id :"1"} ,
      {name : "Luke" , age :"22" , skills : "Drunk-Master" , id :"2"} ,
      {name : "wazzup" , age :"10" , skills : "crying a lot" , id : "3"}
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas , ninja]
    this.setState({
      ninjas : ninjas
    })
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    })
    this.setState({
      ninjas: ninjas
    })
  }
  render() {
    return(
      <div className="app">
        <h1>
          Redux
        </h1>
        < Ninjas deleteNinja={this.deleteNinja} ninjas ={this.state.ninjas} />
        <AddNinja addNinja ={this.addNinja}/>
      </div>
    )
  }
}

export default App;
