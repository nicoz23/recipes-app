import Pages from './pages/Pages'
import Category from './components/Category'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Search from './components/Search'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  )
}

export default App
