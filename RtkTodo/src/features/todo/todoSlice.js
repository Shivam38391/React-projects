import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos: [{ id: 1, text: "hello word" }]                             //this is a State
}


export const todoSlice = createSlice({
    name: "todoName",
    initialState,

    reducers: {
        addTodo: (state, action) => {
            const todo = { id: nanoid(), text: action.payload }
            state.todos.push(todo)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((i) => i.id !== action.payload)  // overwrite todos 
        },
    }

})


export const {addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer