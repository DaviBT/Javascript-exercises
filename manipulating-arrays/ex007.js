// deleting certaing values of the array without knowing were they are

let workers = ["Jones", "Max", "David", "Lewis"]

indexOfTheValueIWantToDelete = workers.indexOf("Max")

workers.splice(indexOfTheValueIWantToDelete, 1) // (index of the starting value I want to delete, number of values I want to delete from the first one)

console.log(workers)

// output: [ 'Jones', 'David', 'Lewis' ]