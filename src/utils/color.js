
export const percentColor = (used, total) => {
  // if (used && total) {
  percent = Math.round((used / total) * 100)
  // }
  if (percent >= 0 && percent < 20) {
    return 'blue'
  } else if (percent >= 20 && percent < 40) {
    return 'aqua'
  } else if (percent >= 40 && percent < 60) {
    return 'green'
  } else if (percent >= 60 && percent < 80) {
    return 'yellow'
  } else if (percent >= 80 && percent < 100) {
    return 'red'
  }
  return 'gray'
}

export const changeBaseColor = (newColor) => {
  const newSkinClass = `skin-${newColor}`
  const bodyClasses = document.getElementsByTagName('body')[0].classList
  const oldSkinClass = Array.from(bodyClasses).filter(item => item.includes('skin'))[0]
  console.log('changeBaseColor', newSkinClass, oldSkinClass, bodyClasses);
  bodyClasses.remove(oldSkinClass)
  bodyClasses.add(newSkinClass)
}
