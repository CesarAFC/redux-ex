import {Provider} from 'react-redux';
import store from './store';
import './App.css'
import Contador from './components/Contador';

function App() {

  return (
    <Provider store={store}>
      <div>
        <h1>Redux</h1>
        <Contador />
        <hr />
      </div>
    </Provider>
  )
}

export default App
