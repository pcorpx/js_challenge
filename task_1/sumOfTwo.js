function sumOfTwo(array1, array2, x) {
  isTrue = false;
  array1.forEach(function(element, i) {
    for (var j = 0; j < array2.length; j++) {
      if (array2[j] + array1[i] === x) {
        isTrue = true;
      }
    }
  })
  return isTrue;
}


