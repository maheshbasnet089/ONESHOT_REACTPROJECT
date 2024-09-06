
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Product from './pages/product/Product'
import Create from './pages/create/Create'
import Edit from './pages/edit/Edit'

function App() {


  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product' element={<Product />} />
      <Route path='/create' element={<Create />} />
      <Route path='/edit' element={<Edit />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
