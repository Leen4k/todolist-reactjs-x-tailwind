import "./index.css"
import TodoList from './Todolist';
import { useState, useEffect } from "react";



function App() {
  const getTheme = () =>{
    // setDarkMode based on window settings
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return(JSON.parse(localStorage.getItem("DARK_MODE"))||prefersDarkMode)
  }
  const [darkMode, setDarkMode] = useState(getTheme());
  console.log(darkMode)




  useEffect(() => {
    console.log(`Is in dark mode? ${darkMode}`);
    localStorage.setItem("DARK_MODE",JSON.stringify(darkMode));  
  },[darkMode]);


  return (
    <div className="py-16">
      {/* <Todo /> */}
      <TodoList darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;
