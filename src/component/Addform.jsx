import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function Addform(){
    const [task,settask]=useState("");
    const dispatch = useDispatch();

    const submit= (e) =>{
        e.preventDefault();
        console.log(task);
        dispatch(addTodo(task));
        settask("");
        
    }

    return(
        <>
        <form onSubmit={submit} >
            <input type="text" onChange={(e) => settask(e.target.value)} />
            <button>Add Task</button>
            </form>
            </>
    )
}