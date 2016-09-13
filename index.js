import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducer, initState } from './reducer/reducer.js'
import App from './component/component.js'

let store = createStore(reducer, initState);

render(
    <Provider store={store}>
        <table />
        <form />
    </Provider>,
    document.getElementById('app')
)
