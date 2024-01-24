import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/layout'
import Home from './pages/Home'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route path='' element={<Home/>} />
      </Route>
    </Routes>
  )
}

export default App
