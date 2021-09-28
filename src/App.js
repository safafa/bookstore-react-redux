import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/navbar';
import Categories from './components/categories';
import Books from './components/books';
import store from './redux/configureStore';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route path="/">
            <Books store={store} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
