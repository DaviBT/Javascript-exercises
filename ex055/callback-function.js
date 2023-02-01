function phrase(name){
    console.log("Say my name.");
    name();
    console.log("And you're --- right.");
}
phrase(
    () => {
        console.log("Heisenberg.");
    }
)