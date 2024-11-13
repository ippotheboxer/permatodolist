import React, {useState} from "react";

function InputTodo() {
    const [description, setDescription] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {description};
            const response = await fetch("http://localhost:5000/todos", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            });
            window.location = "/todos";
        } catch (err) {
            console.log(err);
        }
    }

    return ( <>
    <form onSubmit={onSubmitForm}>
        <input type="text" value={description} onChange={e => setDescription(e.target.value)}/>
        <button>
            Add
        </button>
    </form>
    </>);
}

export default InputTodo;