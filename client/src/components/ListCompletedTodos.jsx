import React, {useEffect, useState} from "react";

const ListCompletedTodos = () => {
    const [todos, setTodos] = useState([]);

    const getTodos = async() => {
        try {
            const response = await fetch("http://localhost:5000/completedtodos")
            const jsonData = await response.json();
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
        <th>Completed Tasks</th>
        </tr>
        </thead>
        <tbody>
            {todos.map(todo => (
                <tr key={todo.todo_id}>
                <td>{todo.task}</td>
              </tr>
            ))}
      </tbody>
        </table>
        </>);
}

export default ListCompletedTodos;