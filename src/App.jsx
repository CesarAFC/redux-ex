import {Provider} from 'react-redux';
import store from './store';
import './App.css'
import Contador from './components/Contador';
import ShoppinCart from './components/ShoppinCart';

function App() {

  return (
    <Provider store={store}>
      <div>
        <h1>Redux</h1>
        <Contador />
        <hr />
        <ShoppinCart />
      </div>
    </Provider>
  )
}

export default App
