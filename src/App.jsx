
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {


  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<h1>Home Page</h1>} />
      <Route path='/product' element={<h1>single page</h1>} />
      <Route path='/create' element={<h1>create Page</h1>} />
      <Route path='/edit' element={<h1>edit Page</h1>} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
