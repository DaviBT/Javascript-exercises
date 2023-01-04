var hour = new Date()
var time = hour.getHours()

    if (time >= 12 && time <= 18){
        console.log(`Good afternoon! It's ${time}pm.`)
    } else if(time > 5 && time < 12 ){
        console.log(`Good morning! It's ${time}am.`)
    } else if(time > 18 && time <= 20){
        console.log(`Good evening! It's ${time}pm.`)
    } else if(time > 20 && time < 24){
        console.log(`Good night! It's ${time}pm.`)
    } else{
        console.log(`Good morning! We are in the early hours of the morning! It's ${time}am.`)
    }
