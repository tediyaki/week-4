function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var minDigit = Number.MAX_SAFE_INTEGER;
    for(var i = 1; i <= angka; i++) {
        var faktor = [];
        if(angka % i === 0) {
            var totalDigit = digitChecker(i) + digitChecker(angka / i);
            if(minDigit > totalDigit) {
                minDigit = totalDigit;
            }
        }
        
    }
    return minDigit;
}

function digitChecker(num) {
    var digit = 1;

    while(num / 10 >= 1) {
        num /= 10;
        digit++;
    }
    return digit;
}
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2 