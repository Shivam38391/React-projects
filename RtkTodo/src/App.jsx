import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import { Provider } from 'react-redux'
import Todo from './components/Todo'
import { store } from './app/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store} >
      <h1>Learn Readux toolkit</h1>
      <AddTodo/>
      <Todo/>

    </Provider>
  )
}

export default App
