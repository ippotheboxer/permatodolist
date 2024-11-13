import React from "react";

let greeting;
let style = {};

const TimeGreeting = () => {
    const today = new Date();
    const timeNow = today.getHours();
    console.log(timeNow);
    if (timeNow < 12) {
        greeting = "Good Morning";
        style = {
            backgroundImage: "linear-gradient(to bottom, #aa5486, #c25981, #d6607a, #e76a70, #f37864, #f78863, #fa9864, #fba867, #fab979, #fac98d, #fbd9a3, #fde7bb)"
        }
    } else if (timeNow < 18) {
        greeting = "Good Afternoon";
        style = {
            backgroundImage: "rgb(255,156,115)",
            backgroundImage: "linear-gradient(0deg, rgba(255,156,115,1) 0%, rgba(252,245,150,1) 100%)"
        }
    } else if (timeNow < 20) {
        greeting = "Good Evening";
        style = {
            backgroundImage: "linear-gradient(to bottom, #cb9df0, #ee9fd9, #ffa7c4, #ffb5b7, #ffc5b3, #ffceb4, #ffd8b6, #ffe2bb, #ffe7bb, #ffedbc, #fff3bd, #fff9bf)"
        }
    } else {
        greeting = "Good Night";
        style = {
            backgroundImage: "rgb(67,56,120)",
            backgroundImage: "linear-gradient(0deg, rgba(67,56,120,1) 0%, rgba(228,177,240,1) 100%)"}
    
    }
    return <h2 className="time-greeting" style={style}>{greeting}</h2>;
}

export default TimeGreeting;