import React from 'react'
// Import Component
import Todo from './Todo'

export default function TodoList( {todos, setTodos, filteredTodos} ) {

    return (
        <div className='todo-container'>
            <ul className='todo-list'>
                {filteredTodos.map(todo => (
                    <Todo 
                        setTodos={setTodos} 
                        todos={todos} 
                        text={todo.text} 
                        todo={todo}
                        key={todo.id} />
                ))}
            </ul>
        </div>
    )
}
