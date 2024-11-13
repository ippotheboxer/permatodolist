import React from "react";
import Title from "../components/Title";
import TimeGreeting from "../components/TimeGreeting";

export default function Home() {
    return (
        <>
        <div className="container">
        <Title />
        <TimeGreeting />
        </div>
        </>
    )
}