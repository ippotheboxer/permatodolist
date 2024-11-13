import React from "react";
import Title from "../components/Title";
import ListCompletedTodos from "../components/ListCompletedTodos";

export default function UserCompleted() {
    return (
        <>
        <Title />
        <h2>Completed Tasks History</h2>
        <ListCompletedTodos />
        </>
    )
}