/**
 * Write an algorithm to perform insertion sort on an array of integers.
 */

function selectionSort(arr)
{
    console.log(arr.length);
    
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let value = i - 1;
        while (value >=0 && arr[value] > key) {
            arr[value + 1] = arr[value];
            value--;
        }
        arr[value + 1] = key;
    }
    return arr;
}
console.log(selectionSort([4, 25, 12, 22])); // [4, 11, 12, 22, 25]


