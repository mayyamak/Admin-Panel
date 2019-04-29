export const showMessage = (messageText, messageType = 'error') => {
  console.log('showMessage', messageText);
  return {
    type: 'SHOW_MESSAGE',
    messageText,
    messageType,
  }
}

export const changeStep = () => {
  console.log('changeStep action');
  return {
    type: 'CHANGE_STEP',
  }
}

export const togglePage = () => {
  console.log('togglePage action call ');
  return {
    type: 'TOGGLE_PAGE',
  }
}

export const addLocationBox = () => {
  // console.log('addLocationBox');
  return {
    type: 'ADD_LOCATION_BOX',
    // locationsCount,
  }
}

export const changeLanguage = (language) => {
  console.log('changeLanguage', language);
  return {type: 'CHANGE_LANG', language}
}
