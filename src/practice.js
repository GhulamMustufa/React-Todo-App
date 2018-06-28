import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
clickFunc(){
  console.log('clicked');
  alert('clicked')
}
submitted(event){
  event.preventDefault()
  console.log(this.refs.input.value); 
  alert('submitted')
}
changeHandler(event){
  console.log(event.target.value)
}

  render() {
    const list=['o1','o2','o3']
    return (
      <div className="App">
        
        <h1>{list.map(
          item=>{return <div key={item} onClick={this.clickFunc}>{item}</div>}
        )}</h1>
        <form onSubmit={this.submitted.bind(this)}>
        <input onChange={this.changeHandler} ref='input'/>
        </form>
      </div>
    );
  }
}

export default App;
