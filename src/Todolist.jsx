import { useState } from 'react';
import {RxCross1} from "react-icons/rx"
import {AiFillHeart} from "react-icons/ai"
import { DarkMode } from './components/DarkMode';

function TodoList({darkMode,setDarkMode}) {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);
  

  function handleSubmit(event) {
    event.preventDefault();
    addTodo();
    setValue('');
  }


  function addTodo() {
    const newTodo = value;
    setTodos([...todos, newTodo]);
    console.log([...todos, newTodo]);
  }

  function removeTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className={`${darkMode?`bg-[#232323]`:`text-blue-500`} w-[90%] h-[100%] p-4 md:w-[60%] lg:w-[50%] flex flex-col justify-center m-auto shadow-lg rounded-lg`}>
      <h1 className={`${darkMode?"text-indigo-400":""} my-6 text-center text-3xl font-bold tracking-tight text-gray-900`}>Todo List</h1>
      {/* button */}
      <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
      {/* form */}
      <form onSubmit={handleSubmit} className="flex justify-center gap-2 p-4">
      <input
        placeholder='Enter your TODO'
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className={`${darkMode?"bg-indigo-400 text-white placeholder:text-white":"text-black"} block w-full px-2 rounded-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6`}
      />
      <button type="submit" className='group relative justify-center rounded-md bg-indigo-400 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400'>Add</button>
    </form>
     
      <ul className='w-full flex flex-col justify-center gap-4 my-4 p-4'>
        {todos.map((todo, index) => (
          <li key={index}
              className={`${darkMode?"text-white":""} flex w-full m-auto px-2 justify-between rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6`}
          >
            
            <p className='flex justify-center align-center text-center'><AiFillHeart className='text-indigo-500 m-auto mr-2'/>{todo}</p>
            <button 
            onClick={() => removeTodo(index)}
            className="text-indigo-500"
            >
                <RxCross1 />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;