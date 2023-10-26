import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todo() {

    const todos =  useSelector((state)=> state.todos)
    const dispatch = useDispatch()


  return (
    <>
    

    {todos.map((todo)=>(
        <li className='flex justify-between rounded bg-gray-500 px-4 py-2 text-white font-serif font-semibold m-2' key={todo.id}>{todo.text}
        
        <button
        onClick={()=> dispatch(removeTodo(todo.id)) }
        >Delete</button>
        </li>
    ))}

    </>
  )
}

export default Todo