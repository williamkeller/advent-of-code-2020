
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

Array.prototype.uniq = function() {
  return [...new Set(this.valueOf())]
}

Array.prototype.histogram = function() {
  let histo = {}

  for(let value of this.valueOf()) {
    if(histo[value] === undefined)
      histo[value] = 1
    else
      histo[value] += 1
  }

  return histo
}
