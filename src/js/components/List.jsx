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
        if (e.key === "Enter") {
            validateInput()
        }
    }

    const deleteTask = (indexToDelete) => {
        setTask(tasks.filter((task, index) => index !== indexToDelete))
    }



    return (
        <div style={{ maxWidth: "400px", margin: "auto" }}>


            <div className="bg-secondary rounded-3 p-2 m-3">
                <h1>To Do List</h1>

                <input className="m-auto form-check my-4" type="text" value={input} onChange={addInput} onKeyDown={handleKeyDow}></input>
                <button className="btn btn-outline-light p-2 mb-4" onClick={validateInput}>Add task</button>

                <ul style={{ paddingLeft: "20px" }} className="border-top p-3">
                    {tasks.map((task, index) => (
                        <li key={index} className="m-3 my-2">
                            <div className="d-flex justify-content-between align-items-center">
                            <span className="fs-5">{task}</span>
                            <button
                                className="btn p-1"
                                onClick={() => deleteTask(index)}   
                            >
                                ❌
                            </button>
                            </div>
                        </li>

                    ))}
                </ul>

                <h4 className="mb-0 border-top p-2 fs-5 text-white">{tasks.length} tasks left</h4>
            </div>
        </div>
    );
};

export default List