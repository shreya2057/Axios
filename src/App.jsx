import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Create from './screens/CRUD/Create'
import Home from './screens/Home'
import Read from './screens/CRUD/Read'
import Update from './screens/CRUD/Update'
import Delete from './screens/CRUD/Delete'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/read' element={<Read/>}/>
        <Route path='/update' element={<Update/>}/>
        <Route path='/delete' element={<Delete/>}/>
      </Routes>
    </Router>
  )
}

export default App
