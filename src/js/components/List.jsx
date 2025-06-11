import React, { useState } from "react";

const List = () => {

    const [input, setInput] = useState("");
    const [tasks, setTask] = useState([]);

    const addInput = (e) => {
        setInput(e.target.value)
    }

    const validateInput = () => {
        if (!input.trim()) {
            alert("Debes añadir una nueva tarea")
        } else {
            setTask([...tasks, input])
        }
        setInput("")
    }

    const handleKeyDow = (e) => {
        if (e.key === "Enter"){
            validateInput()
        }
    } 

    const deleteTask = (indexToDelete) => {
        setTask(tasks.filter((task, index) => index !== indexToDelete))
    }


    return (
        <div>
            <h1>To do List</h1>

            <input type="text" value={input} onChange={addInput} onKeyDown={handleKeyDow}></input>
            <button onClick={validateInput}>Add task</button>

            <ul>
                {tasks.map((task, index) => (
                    <li
                        key={index}>{task}

                        <span
                            style={{ marginLeft: "10px", color: "red", cursor: "pointer" }}
                            onClick={() => deleteTask(index)}
                        >
                            ❌
                        </span>
                    </li>

                ))}
            </ul>

            <h4>{tasks.length} tasks left</h4>
        </div>
    );
    ;
}

export default List