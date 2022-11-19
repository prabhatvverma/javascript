function getPerson(fn) {
    var p = {
        name: "raghav",
        address: "bihar",
        age: 30
    };
    fn(p);
    // return p;
}

function processPerson(fn, person) {
    const duplicatePerson = Object.assign({}, person);
    duplicatePerson.id = "xyz";
    fn(duplicatePerson);
}

function prettifyPerson(fn, person) {
    var { id, name, address, age } = person;
    console.log("Person Details... ... ...");
    const str = "id : " + id + "\n" + "name : " + name + "\n" + "address : " + address + "\n" + "age : " + age;
    // return str;
    fn(str);
}

// const person = getPerson();
// const updatedPerson = processPerson(person);
// const prettyPerson = prettifyPerson(updatedPerson);
// console.log(prettyPerson);

getPerson(function(person){
    processPerson(function(duplicatePerson){
        prettifyPerson(function(prettyStr){
            console.log(prettyStr);
        },duplicatePerson)
    },person)
});
