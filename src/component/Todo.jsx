import { useDispatch, useSelector } from "react-redux";
import Addform from "./Addform";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

export default function Todo(){
   const todo= useSelector((state) => state.todos);
   const dispatch=useDispatch();
   
   const Tododelete = (id)=>{
    dispatch(deleteTodo(id));
   }
   const mark = (id)=>{
    dispatch(markAsDone(id));
   }
    return (
    <>
    <Addform/>
    <h3>Todo List </h3>
    <ul>
        {todo.map((todo)=> 
            (<li key={todo.id} style={{
                textDecoration: todo.isDone ? "line-through" : "none",
              }}>{todo.task}
            <button onClick={() => Tododelete(todo.id)}>Delete</button>
            <button onClick={() => mark(todo.id)}>Mark as done</button>
        </li>))}
        </ul>
    </>)
}