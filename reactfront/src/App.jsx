import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
//importamos los componentes
import CompShowBlogs from './blog/ShowBlogs'
import CompCreateBlog from './blog/CreateBlog'
import CompEditBlog from './blog/EditBlog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<CompShowBlogs/>} />
            <Route path='/create' element={<CompCreateBlog/>} />
            <Route path='/edit/:id' element={<CompEditBlog/>} />

          </Routes>
        </BrowserRouter>
      </div>

    </>
  )
}

export default App
