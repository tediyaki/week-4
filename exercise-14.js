function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var posisi = {}

    for(var i = 0; i < rute.length; i++) {
        posisi[rute[i]] = i
    }
    var dataJalan = []
    for(i = 0; i < arrPenumpang.length; i++) {
        var jalan = {} 
        jalan.penumpang = arrPenumpang[i][0]
        jalan.naikDari = arrPenumpang[i][1]
        jalan.tujuan = arrPenumpang[i][2]
        jalan.bayar = (posisi[jalan.tujuan] - posisi[jalan.naikDari]) * 2000
        dataJalan.push(jalan)
    }
    return dataJalan
}
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]