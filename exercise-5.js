function ubahHuruf(kata) {
    // you can only write your code here!
    var encoded = ""
    for(var i = 0; i < kata.length; i++) {
        if(kata[i] === 'z') {
            encoded += 'a';
        } else if(kata.charCodeAt(i) >= 97 && kata.charCodeAt(i) < 122){
            encoded += String.fromCharCode(kata.charCodeAt(i)+1)
        } else {
            encoded += kata[i];
        }
    }
    return encoded;
}
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu