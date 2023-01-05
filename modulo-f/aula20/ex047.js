let citizen = {
name: 'Jim',
age: 30,
nationality: 'brazilian',
vote(v){
    if (age < 16){
        return 'can not vote.'
    } else if(age >= 16 && age <= 18){
        return 'can vote'
    } else if(age < 60){
        return 'vote is mandatory'
    } else {
        return 'can vote'
    }
}
} 
console.log(citizen)