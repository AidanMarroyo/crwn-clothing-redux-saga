import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.scss'
import App from './App'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Elements } from '@stripe/react-stripe-js'
import { stripePromise } from './utils/stripe.utils'

import { store, persistor } from './store/store'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </BrowserRouter>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()