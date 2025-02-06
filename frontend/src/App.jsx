import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import ChannelList from './components/seminarList'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ChannelList />
    </div>
  )
}

export default App
