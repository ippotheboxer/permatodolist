import React, {useEffect, useState} from "react";
import EditTodo from "./EditTodo";
import { SiTicktick } from "react-icons/si";

const ListTodos = () => {

    const [todos, setTodos] = useState([]);

    const deleteTodo = async(id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: 'DELETE'
            });
            setTodos(todos.filter(todo => todo.todo_id !== id));
            window.location = "/todos";
        } catch (error) {
            console.log("Error deleting todo: ", error);
        }
    }

    const getTodos = async() => {
        try {
            const response = await fetch("http://localhost:5000/todos")
            const jsonData = await response.json();
            console.log(jsonData);
            setTodos(jsonData);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getTodos();
    }, []);

    return (<>
    <table>
    <thead>
  <tr>
    <th>Task</th>
    <th>Edit</th>
    <th>Complete</th>
    </tr>
    </thead>
    <tbody>
        {todos.map(todo => (
            <tr key={todo.todo_id}>
            <td>{todo.task}</td>
            <td><EditTodo todo={todo}/></td>
            <td><button className="btn" onClick={() => deleteTodo(todo.todo_id)}>
            <SiTicktick />
                </button></td>
          </tr>
        ))}
  
  </tbody>

    </table>
    </>)
}

export default ListTodos;

