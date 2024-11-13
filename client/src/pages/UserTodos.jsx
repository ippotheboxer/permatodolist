import React from "react";
import Title from "../components/Title";
import InputTodo from '../components/InputTodo';
import ListTodos from '../components/ListTodos';

export default function UserTodos() {
    return (
        <>
        <div className="container">
            <Title />
            <InputTodo />
            <h2>Your Todos</h2>
            <ListTodos />
        </div>
        </>
    )
}