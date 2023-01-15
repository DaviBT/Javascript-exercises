var citizen = {
    nam: 'Jim',
    age: 30,
    nationality: 'brazilian'
}
let vote = function() {
    if (citizen.age < 16){
        return 'can not vote.';
    } else if(citizen.age >= 16 && age <= 18){
        return 'can vote';
    } else if(citizen.age < 60){
        return 'vote is mandatory';
    } else {
        return 'can vote';
}
}
console.log(vote)
console.log(citizen)