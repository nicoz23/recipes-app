import Pages from './pages/Pages'
import Category from './components/Category'
import { HashRouter as Router} from 'react-router-dom'
import './App.css'
import Search from './components/Search'

function App() {
  return (
    <div className='App'>
      <Router basename={import.meta.env.BASE_URL}>
        <Search />
        <Category />
        <Pages />
      </Router>
    </div>
  )
}

export default App
