const myRemove = (arr, item) => {
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] === item){
      arr.splice([index], 1); 
    }
  }
  return arr;
}



module.exports = myRemove;

// https://love2dev.com/blog/javascript-remove-from-array/
