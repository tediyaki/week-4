function cariModus(arr) {
    // you can only write your code here!
    var num = {}

    for(var i = 0; i < arr.length; i++) {
        if(num[arr[i]] === undefined) {
            num[arr[i]] = 1
        } else {
            num[arr[i]]++
        }
    }
    var equal = 0
    var max = -99
    var nilaiMax
    for(var angka in num) {
        if(max < num[angka]) {
            max = num[angka]
            nilaiMax = angka
        }
        equal++
    }

    if(equal === arr.length || equal === 1) {
        return -1
    }
    return nilaiMax;
}
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1