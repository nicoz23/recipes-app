import Pages from './pages/Pages'
import Category from './components/Category'
import { HashRouter as Router} from 'react-router-dom'
import './App.css'
import Search from './components/Search'

function App() {
  const basename = process.env.NODE_ENV === "production" ? "/recipes-app" : "/";
  return (
    <div className='App'>
      <Router basename={basename}>
        <Search />
        <Category />
        <Pages />
      </Router>
    </div>
  )
}

export default App
