import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reduPlayer, initState } from './reducer/reducer.js'
// import App from '/component'

let store = createStore(reduPlayer, initState);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
