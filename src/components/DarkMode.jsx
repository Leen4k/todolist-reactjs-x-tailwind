import { useState, useEffect } from 'react';
import { Switch } from '@headlessui/react';

function DarkMode({darkMode,setDarkMode}) {

  return (
    <div className={`px-4 ${darkMode ? 'dark' : ''}`}>
      <Switch
        checked={darkMode}
        onChange={setDarkMode}
        className={`${darkMode ? 'bg-indigo-400' : 'bg-gray-200'}
          relative inline-flex items-center h-6 rounded-full w-11`}
      >
        <span className="sr-only">Enable dark mode</span>
        <span
          className={`${darkMode ? 'translate-x-6 transition-all' : 'translate-x-1 transition-all'}
            inline-block w-4 h-4 transform bg-white rounded-full`}
        />
      </Switch>
      {/* <p className={darkMode?`text-pink-400`:`text-blue-500`}>This text will be styled differently in dark mode.</p> */}
    </div>
  );
}

export {DarkMode};