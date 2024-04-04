import { useState } from 'react'
import './App.css'


import { Route, Routes } from 'react-router-dom'
import CustomerRoutes from './routes/CustomerRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/*' element={<CustomerRoutes/>}></Route>
      </Routes>
      
      
      
    </>
  )
}

export default App
