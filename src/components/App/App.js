import React, { Component } from "react";
import TodoItem from '../TodoItem/TodoItem';
import todosData from '../../todosData';
import './App.css';

class App extends Component {
    constructor () {
        super ();
        this.state = {
            todos: todosData,
        }
        
        this.handleClick=this.handleClick.bind(this)
    }

    handleClick(id){
        this.setState (prevState => {
            const utdatesTodos = prevState.todos.map(todo=>
                {
                    if (todo.id===id) {
                       return {
                            ...todo,
                            completed: !todo.completed
                       }
                    }

                    return todo
                })

            return {
                todos: utdatesTodos
            }
        })
    }

    render () {
        
        const todoItems = this.state.todos.map(item => {
            return <TodoItem key={item.id} 
                            item={item}  
                            handleClick={this.handleClick}/>
        })
    
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )
    }
}

export default App;