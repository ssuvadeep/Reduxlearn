import { createRoot } from 'react-dom/client'
import store from './store.js'
import { Provider } from 'react-redux'
import App from './App.jsx'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')).render(

  <Provider store={store}>
      <App />
    </Provider>
   
)
