import React from 'react';
import Background from './components/Background';
import Foreground from './components/Foreground';
function App() {
  return (
    <>
      <div className = 'relative flex w-full h-screen bg-zinc-900 text-white'>
        <Background/>
        <Foreground/>
      </div>
    </>
  )
}

export default App;
