import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import TodoForm from '../ToDo/TodoForm';
import TodoList from '../ToDo/TodoList';

const TodoIndex = () => {

    const [todos, setTodos] = useState([]);

    return (
       <div className="TodoIndex">
           <Typography component= "h1" variant="h2">
           ToDoS
           </Typography>
            <TodoForm 
            saveTodo={todoText => {
                const trimmedText = todoText.trim();
                if(trimmedText.length > 0) {
                    setTodos([...todos, trimmedText]);
                }
            }} />
            <TodoList 
            todos={todos}
            deleteTodo={todoIndex => {
                const newTodos = todos
                .filter((_, index) => index !== todoIndex);
                setTodos(newTodos);
            }}
             />
       </div>
    )


}

// eslint-disable-next-line import/no-anonymous-default-export
export default { TodoIndex }