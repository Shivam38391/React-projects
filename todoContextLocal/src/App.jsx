import { useState } from "react";

import "./App.css";
import { TodoProvider } from "./contexts"; // by default index.js is called
import { useEffect } from "react";
import { TodoForm, TodoItem } from "./components";

function App() {
  const [todos, setTodos] = useState([]); //by default empty arrays

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updatedTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((eachTodo) => {
        if (eachTodo.id === id) {
          todo;
        } else {
          eachTodo;
        }
      })
    );
  };


  const deleteTodo = (id) => {
    setTodos( (prev) => prev.filter( (eachTodo) => eachTodo !== id ) ) // filter works when value is true
  }



  const toggleComplete = (id) => {

    setTodos( (prev) => prev.map((eachTodo) => eachTodo.id === id ? {...eachTodo , completed: !eachTodo.completed} : eachTodo ) )

  }


  useEffect(() => {
    const todos = JSON.parse( localStorage.getItem('todos'))
    if ( todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])
  


useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))
}, [todos]) //state wala todo



  return (
    <TodoProvider
      value={{ todos, addTodo, updatedTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
            </div>
          <div className="flex flex-wrap gap-y-3">
            
            {/*Loop and Add TodoItem here */}


            {/* <TodoItem/> */}

          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
