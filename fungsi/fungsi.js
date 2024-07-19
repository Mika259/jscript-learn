// Projek persendirian saya
// Daniel Hakim 2024

// Fungsi biasa
// sangat disarankan untuk diguna
function test_1(txt){
    console.log("Memaparkan '"+txt+"'")
}


// Fungsi dalam pembolehubah
const test_2 = function(txt){
    console.log("Memaparkan '"+txt+"'")
}


// Fungsi dalam tanda '=>'
var test_3 = (txt) => {
    console.log("Memaparkan '"+txt+"'")
}


// Fungsi dalam binaan
// Ini tidak disarankan untuk diguna
var test_4 = new Function('console.log("Hello, World!")')

// Hasilkan Output
test_1('Saya')
test_2('Rajin')
test_3('Coding')
test_4()
