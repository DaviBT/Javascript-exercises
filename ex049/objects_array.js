 const felines = [
    {
        name: "cat",
        age: 3
    },
    {
        name: "lion",
        age: 10
    }
]
    const aquatics = [
    {
        name: "koi",
        age:1
    },
    {
        name: "whiteShark",
        age: 5
    }
]

let animals = {
    felines,
    aquatics,
} 
console.log(animals.felines[1]) /* will show: lion properties */
