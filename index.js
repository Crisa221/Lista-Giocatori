import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducer/reducer.js'

const store = createStore( rootReducer );

render(
    <Provider store={store}>
        <table />
        <form />
    </Provider>,
    document.getElementById('root')
)
