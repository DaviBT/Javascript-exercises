var now = new Date()
var day = now.getDay()

/*
0 == sunday
1 == monday
2 == tuesday
3 == wednesday
4 == thursday
5 == friday
6 == saturday
*/

switch (day){
    case 0:
        console.log("It's sunday!");
    break
    case 1:
        console.log("It's monday!")
    break
    case 2:
        console.log("It's tuesday!")
    break
    case 3:
        console.log("It's wednesday!")
    break
    case 4:
        console.log("It's thursday!")
    break
    case 5:
        console.log("It's friday!")
    break
    case 6:
        console.log("It's saturday!")
    break
    default:
        console.log("[ERROR] invalid date")
}