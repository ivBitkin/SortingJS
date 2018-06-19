//selection Sort

var arr = [40, 100, 1, 5, 25, 10,100, 1, 5, 25, 10,100, 1, 5, 25, 10, -3, -33, -333];

function selectionSort(arr){
  var minIdx, temp,
      len = arr.length;
  for(var i = 0; i < len; i++){
    minIdx = i;
    for(var  j = i+1; j<len; j++){
       if(arr[j]<arr[minIdx]){
          minIdx = j;
       }
    }
    temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }
  return arr;
}
selectionSort(arr);
console.log(arr);




//sort bubble
var a = [40, 100, 1, 5, 25, 10];
function bubbleSort(a)
{
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i] > a[i+1]) {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

bubbleSort(a);

console.log(a);
