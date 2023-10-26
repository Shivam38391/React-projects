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
    
    <form  onSubmit={ addTodoHandler } className='  mb-4' >

        <input className=' text-gray-50 bg-cyan-300 px-4 py-2 rounded' type="text" name="" id=""
        placeholder='Enter Todo'
        
        value={ input }
        onChange={ (e) => setInput(e.target.value) }
        />

        <button className='px-4 py-2 bg-purple-600 rounded-sm text-yellow-50 font-bold m-2' type="submit">AddTodo</button>

    </form>
    
    </>
  )
}

export default AddTodo