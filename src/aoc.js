
/**
 * Calls a callback for every two element permutation of the array
 * @param {array} array - The array to permute
 * @param {callback} callback - (object1, object2)
 **/
export function permute2(array, callback) {
  let len = array.length
  for(let i = 0; i < len - 1; i++) {
    for(let j = i + 1; j < len; j++) {
      if(callback(array[i], array[j]) == true)
        return
    }
  }
}


/**
 * Calls a callback for every three element permutation of the array
 * @param {array} array - The array to permute
 * @param {callback} callback - (object1, object2)
 **/
export function permute3(array, callback) {
  let len = array.length
  for(let i = 0; i < len - 2; i++) {
    for(let j = i + 1; j < len - 1; j++) {
      for(let k = j + 1; k < len; k++) {
        if(callback(array[i], array[j], array[k]) == true)
          return
      }
    }
  }
}

export function padDay(day) {
  let str = day.toString()
  if(str.length == 1)
    return `0${str}`
  else
    return str
}
