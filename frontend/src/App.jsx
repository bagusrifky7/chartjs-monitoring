import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App () {
  return (
  <div className='flex h-screen'>
      {/* Left box */}
      <div className='w-2/12 flex'>
        <Sidebar />
   
      </div>

      {/* Right box */}
      <div className='w-10/12 flex flex-1'>
         <Dashboard />
      </div>
    </div>
  )
}

export default App;