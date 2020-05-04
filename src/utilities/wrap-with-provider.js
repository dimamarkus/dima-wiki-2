import React from 'react'
import { createStore as reduxCreateStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from 'src/state'

const createStore = () => reduxCreateStore(rootReducer)
const store = createStore()

export default ({ element }) => {
	return (
	  <Provider store={ store }>{element}</Provider>
	)
}
