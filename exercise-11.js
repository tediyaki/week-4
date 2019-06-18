function shoppingTime(memberId, money) {
    // you can only write your code here!
    if(memberId === "" || memberId === undefined) {
        return "Mohon maaf, toko X hanya berlaku untuk member saja"
    }

    if(money < 50000 || money === undefined) {
        return "Mohon maaf, uang tidak cukup"
    }


    var barang = {
        "Sepatu Stacattu": 1500000,
        "Baju Zoro": 500000,
        "Baju H&N": 250000,
        "Sweater Uniklooh": 175000,
        "Casing Handphone": 50000
    }

    var member = {}
    var listPurchased = []
    member["memberId"] = memberId;
    member["money"] = money;

    for(var merek in barang) {
        if(barang[merek] <= money) {
            listPurchased.push(merek)
            money -= barang[merek]
        }
    }
    member["listPurchased"] = listPurchased
    member["changeMoney"] = money
    return member
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja