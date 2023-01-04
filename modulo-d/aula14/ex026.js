function sent(){
    //current year
    var actyear = new Date()
    var nowyear = actyear.getFullYear()
    //input's values
    //age
    var yearsent = window.document.getElementById('iyear')
    var year = Number(yearsent.value)
    var age = nowyear - year
    //message
    var textyear = window.document.getElementById('msg')
    //images
     var boychild = window.document.getElementsByClassName('boychild')[0]
     var girlchild = window.document.getElementsByClassName('girlchild')[0]

     var boyteen = window.document.getElementsByClassName('boyteen')[0]
     var girlteen = window.document.getElementsByClassName('girlteen')[0]

     var menyoung = window.document.getElementsByClassName('menyoung')[0]
     var womanyoung = window.document.getElementsByClassName('womanyoung')[0]

     var mensenior = window.document.getElementsByClassName('mensenior')[0]
     var womansenior = window.document.getElementsByClassName('womansenior')[0]

     var menaged = window.document.getElementsByClassName('menaged')[0]
     var womanaged = window.document.getElementsByClassName('womanaged')[0]
    //output
    if (year >= nowyear || age == 0){
        window.alert("[Error] verify the data")
    } else {
    var imgspace=  window.document.querySelector('div#img')
    imgspace.innerHTML = ''
    //gender
    var genderSent = window.document.getElementsByName('gender')
    if (genderSent[0].checked){ //male
        gender = "masc"
        if (age <= 10){
        textyear.innerHTML = `You are ${age} years old.`
        boychild.style.display = 'block'}
        else if (age <= 18){
        textyear.innerHTML = `You are ${age} years old.`
        boyteen.style.display = 'block'}
        else if (age <= 35){
        textyear.innerHTML = `You are ${age} years old.`
        menyoung.style.display = 'block'}
        else if (age <= 60){
        textyear.innerHTML = `You are ${age} years old.`
        mensenior.style.display = 'block'}
        else if (age >= 61){
        textyear.innerHTML = `You are ${age} years old.`
        menaged.style.display = 'block'}
    } else if (genderSent[1].checked){ //female
        gender = "fem"
        if (age <= 10 ){
        textyear.innerHTML = `You are ${age} years old.`
        girlchild.style.display = 'block'}
        else if (age <= 18 ){
        textyear.innerHTML = `You are ${age} years old.`
        girlteen.style.display = 'block'}
        else if (age <= 35 ){
        textyear.innerHTML = `You are ${age} years old.`
        womanyoung.style.display = 'block'}
        else if (age <= 60 ){
        textyear.innerHTML = `You are ${age} years old.`
        womansenior.style.display = 'block'
        } else{
            textyear.innerHTML = `You are ${age} years old.`
            womanaged.style.display = 'block'}
    
}
}
}