
export const clearMessage = () => {
  return {type: 'MESSAGE_CLEAR'}
}

export const clearUser = () => {
  return {type: 'USER_CLEAR'}
}

export const reserveData = () => {
  return {type: 'DATA_RESERVE'}
}

export const resetData = () => {
  return {type: 'DATA_RESET'}
}

export const defaultExists = (category, name) => {
  return {
    type: 'DEFAULT_EXISTS',
    category,
    name,
  }
}
