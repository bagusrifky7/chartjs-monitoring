import { useState } from 'react';
import Sidebar from './pages/Sidebar';
import Dashboard from './pages/Dashboard';

function App () {
  const [activeChart, setActiveChart] = useState("");
  const [active, setActive] = useState("")

  return (
  <div className='flex h-screen'>
      <div className='w-1/12 flex'>
        <Sidebar 
        active={active} 
        setActive={setActive} 
        activeChart={activeChart} 
        setActiveChart={setActiveChart}/>
   
      </div>

      <div className='w-15/12 flex flex-1'>
         <Dashboard activeChart={activeChart}/>
      </div>
    </div>
  )
}

export default App;