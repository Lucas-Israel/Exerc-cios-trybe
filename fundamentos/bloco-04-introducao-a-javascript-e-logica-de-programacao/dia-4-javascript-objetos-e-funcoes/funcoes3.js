let array = [2, 4, 6, 7, 10, 0, -3];;

function menor(arr){
  let largest = 0;
  for (let i in arr){
    if (arr[largest] > arr [i]){
      largest = i;
      }
  }
  return largest;
}

console.log(menor(array));
