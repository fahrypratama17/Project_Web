"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, input]);
    setInput("");
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col justify-center items-center gap-y-5">
      <h1 className="text-[30px] text-center">My To-Do List</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tambahkan tugas..."
        />
        <button onClick={addTask}>Tambah</button>
      </div>
      <ul className="flex flex-col gap-y-5 mt-[20px]">
        {tasks.map((task, i) => (
          <li key={i}>
            {task} <button onClick={() => removeTask(i)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}