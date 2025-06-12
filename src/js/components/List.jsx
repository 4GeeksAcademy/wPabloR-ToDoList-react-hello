import React, { useState } from "react";
import './TodoList.css';

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
        <div className="container">
            <h1 className="title">To Do List</h1>

            <div className="todo-box">
                <input
                    type="text"
                    className="todo-input"
                    placeholder="What needs to be done?"
                    value={input}
                    onChange={addInput}
                    onKeyDown={handleKeyDow}
                />

                <ul className="todo-list">
                    {tasks.map((task, index) => (
                        <li key={index} className="todo-item">
                            <span>{task}</span>
                            <span className="delete-btn" onClick={() => deleteTask(index)}>×</span>
                        </li>
                    ))}
                </ul>

                <div className="footer">
                    {tasks.length} item{tasks.length !== 1 && 's'} left
                </div>
            </div>
        </div>
    );
};

export default List;