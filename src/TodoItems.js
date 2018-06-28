import React, { Component } from 'react';
// // import logo from './logo.svg';
import './TodoList.css';
import FlipMove from 'react-flip-move'

import './TodoList.css'

class TodoItems extends Component {

    constructor(props){
        super(props);

    }
  createTasks(item){
      return <li onClick={()=>{this.delete(item.key)}} key={item.key}>{item.text}</li>
  
    }
    delete(key){
        this.props.delete(key);
    }
  render() {
      var todoEntries=this.props.entries;
    var listItems=todoEntries.map(this.createTasks.bind(this))

    return (
        <ul className='theList'>
        <FlipMove duration={250} easing='ease-out'>
            {listItems}
        </FlipMove>
        </ul>
    );
  }
}

export default TodoItems;
