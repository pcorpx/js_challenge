function houseRobber(nums) {
  var x = null;

  //Узнаем максимальное значением в массиве
  var max1 = Math.max.apply(null, nums);
  //Находим индекс элемента с максимальным значением
  nums.forEach(function(element, i) {
      if (nums[i] === max1) {
        x = i;
      }
    })
  /*Создаем новый массив, исключив элемент с максимальным значением
  и соседние элементы*/

  var new_nums = nums.slice(0, nums.length - 1);

  if ((x < (nums.length - 1)) && (x > 0)) {
    new_nums.splice(x - 1, 3);
  }

  else if ((x < (nums.length - 1)) && (x === 0)) {
    new_nums.splice(x, 2);
  }

  else if ((x === (nums.length - 1)) && (x > 0)) {
    new_nums.splice(x - 1, 2);
  }

  else if (nums.length === 1) {
    new_nums = [0];
  }

  //Узнаем максимальное значением в новом массиве
  var max2 = Math.max.apply(null, new_nums);

  //Складываем два максимальных значения и получаем результат
  return result = max1 + max2;

}
