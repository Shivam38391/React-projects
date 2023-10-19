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

    console.log(id, "updated");
    setTodos((prev) => prev.map((eachTodo) => (eachTodo.id === id ? todo: eachTodo)))
  };


  // const updatedTodo = (id, todo) => {

  //   console.log(id, "updated");
  //   setTodos((prev) => prev.map((eachTodo) => {
  //     if(eachTodo.id === id){
  //      return todo  //when we use currly braces we need to put return
  //     }else{
  //       return eachTodo
  //     }
  //   } ))
  // };







  const deleteTodo = (id) => {
    console.log(id, 'delete')
    setTodos( (prev) => prev.filter( (eachTodo) => eachTodo.id !== id ) ) // filter works when value is true
    console.log(todos);
  }



  const toggleComplete = (id) => {

    setTodos( (prev) => prev.map((eachTodo) => eachTodo.id === id ? {...eachTodo , completed: !eachTodo.completed} : eachTodo ) )

  }


  useEffect(() => {
    const todos = JSON.parse( localStorage.getItem('todos'))
    console.log("useEffect is run",todos);
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


            {todos.map((todo)=> (
              <div key={ todo.id }   className="w-full">
                <TodoItem todo = {todo}/>
              </div>

            ))}

          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
