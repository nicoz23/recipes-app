import Pages from './pages/Pages'
import Category from './components/Category'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  )
}

export default App
