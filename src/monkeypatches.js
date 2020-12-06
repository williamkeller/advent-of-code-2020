
String.prototype.sort = function() {
  return this.valueOf().split('').sort().join('')
}



Array.prototype.permute2 = function(callback) {
  let array = this.valueOf()
  let len = array.length
  for(let i = 0; i < len - 1; i++) {
    for(let j = i + 1; j < len; j++) {
      if(callback(array[i], array[j]) == true)
        return
    }
  }
}


Array.prototype.permute3 = function(callback) {
  let array = this.valueOf()
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
