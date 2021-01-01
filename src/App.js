import { Provider } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar';
import store from './store/Store'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
      </div>
    </Provider>

  );
}

export default App;
