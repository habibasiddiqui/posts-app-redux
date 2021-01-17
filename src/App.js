import { Provider } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar';
import store from './store/Store'
import Home from './components/Home';
import Posts from './components/Posts';
import AddPost from './components/AddPost' 
import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Router>
        <Navbar />

        <Switch>
                 <Route path='/posts'><Posts /></Route>
                 <Route path='/add-post'><AddPost /></Route>
                 <Route path='/'><Home /></Route>

        </Switch>
        </Router>

      </div>
    </Provider>

  );
}

export default App;
