const logger = (store) => (next) => (action) => {
  console.group(action.type)
    console.log('The state before: ', store.getState())
    console.log('The action: ', action)
    const result = next(action)
    console.log('The state after: ', store.getState())
  console.groupEnd()
    return result
}

export default logger