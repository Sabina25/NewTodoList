import React from "react";
import TodoItem from '../TodoItem/TodoItem';
import todosData from '../../todosData';
import './App.css';

function App() {
    
    const todoItems = todosData.map(item => {
        return <TodoItem key={item.id} item={item}/>
    })

    return (
        <div className="todo-list">
            {todoItems}
        </div>
    )
}

export default App;