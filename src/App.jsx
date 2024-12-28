import { store } from './app/store';
import {Provider} from "react-redux";
import Todo from "./component/Todo"
import './App.css'

function App() {
  

  return (
    <>
      <Provider store={store}>

        <Todo/>
        </Provider>
    </>
  )
}

export default App;
