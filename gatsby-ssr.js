import React from 'react'
import Chrome from 'src/components/chrome/Chrome'

export const wrapPageElement = ({ element, props }) => {
  return <Chrome { ...props }>{ element }</Chrome>
}

export const wrapRootElement = ({ element }) => {
  // const { Provider } = require("react-redux")
  // const createStore = require("./src/state/createStore")
  // const store = createStore()
  //  return (
  //    <Provider store={ store }>
  //      { element }
  //    </Provider>
  //  )
}
