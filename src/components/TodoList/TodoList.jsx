import React from 'react';
import Todo from '../Todo/Todo';
import './TodoList.css'

function TodoList({ todos, toggleComplete, removeTodo }) {
    return (
        <ul className="box">
            {todos.map(todo => (
                <Todo 
                    key={todo.id} 
                    todo={todo} 
                    toggleComplete={toggleComplete}
                    removeTodo={removeTodo} 
                />
            ))}
        </ul>
    );
}

export default TodoList;