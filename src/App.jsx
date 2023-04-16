import './App.css'

import AppRoutes from './routes/AppRoutes'
import { Provider } from 'react-redux'
import store from './redux/store'


const App = ()=> {


  return (
    <div className="App">
      <Provider store={store}>
        <AppRoutes/>
      </Provider>
    </div>
  )
}

export default App
