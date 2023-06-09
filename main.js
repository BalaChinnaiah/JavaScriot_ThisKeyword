// This keyword

// Implicit binding
const  person = {
    name : 'Sagar',
    saymyname : function()
    {
        console.log('My name is ' + this.name)
    }
}

person.saymyname()

globalThis.name = 'bala Sagar'
// Explicit Binding
function saymyname()
{
    console.log('Hello my name is ' + this.name)
}

saymyname.call(person)


// New Binding 

function Person(name)
{
    this.name=name
}

const p1 = new Person('Bala')
const p2 = new Person('sagar')

console.log(p1.name, p2.name)


// Default Binding
saymyname()