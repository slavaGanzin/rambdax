import { type } from './rambda/type'

//NODOCS
export function allType(targetType) {
  return (...inputs) => {
    let counter = 0

    while (counter < inputs.length) {
      if (type(inputs[ counter ]) !== targetType) {
        return false
      }
      counter++
    }

    return true
  }
}
