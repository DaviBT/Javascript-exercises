function sent(){
    var txtage = window.document.getElementById('iage');
    var age = Number(txtage.value) 
    res = window.document.getElementsByTagName('p')[0];
    if (age >= 18 && age < 65){
        res.innerText = 'The vote is mandatory in Brazil.'
    } else {
        if (age >= 16 && age < 18 || age >= 65){
            res.innerText = 'The vote is optional in Brazil.'
        } else{
            res.innerText = "You can't vote in Brazil."
        }
    }
}