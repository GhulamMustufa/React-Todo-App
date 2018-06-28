import React, { Component } from 'react';
import Todoitems from './TodoItems.js';
import TodoItems from './TodoItems.js';
import './TodoList.css'

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state={
            items:[]
        };


        // this.addItem=this.addItem.bind(this)
    }
    additem(event){
            if(this.refs.inputElement.value!==''){
                let newItem={
                    text: this.refs.inputElement.value,
                    key: Date.now()
                };
                this.setState((prevState)=>{
                    return{  
                        items:prevState.items.concat(newItem)
                    }
                })
            
            this.refs.inputElement.value='';
            console.log(this.state.items)
            event.preventDefault();
    }
}

deleteItems(key){
    var filteredItems=this.state.items.filter((item)=>{
        return (item.key!==key)
    })
    this.setState({
        items: filteredItems
    });
}

 
  render() {
    return (
      <div className="todoListMain">
      <div className='header'>
       <form onSubmit={this.additem.bind(this)}>
            <input ref='inputElement' placeholder='enter task'/>
            <button type='submit'>Add</button>
       </form>
      </div>
      
      <TodoItems 
      delete={this.deleteItems.bind(this)}
      entries={this.state.items}/>
      
      </div>
    );
  }

    }
export default TodoList;
