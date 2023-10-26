import { useState } from 'react'
import React  from 'react'
import { useDispatch, useSelector ,  } from 'react-redux'

import { addTodo } from "../features/todo/todoSlice"
 
function AddTodo() {

    const [input, setInput] = useState('')

    const dispatch = useDispatch()
    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input)) // call reducer in dispatch

        setInput('')
    }

  return (
    <>
    
    <form onSubmit={ addTodoHandler } className='' >

        <input className='' type="text" name="" id=""
        placeholder='Enter Todo'
        
        value={ input }
        onChange={ (e) => setInput(e.target.value) }
        />

        <button type="submit">AddTodo</button>

    </form>
    
    </>
  )
}

export default AddTodo