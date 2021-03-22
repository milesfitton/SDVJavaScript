const person = `Joe`;
switch (person) 
{
case `Jane`:
console.log(`Hi Jane`)
break;
case `John`:
console.log(`Hi John`);
break;
case `Joe`:
console.log(`Hi Joe`);
break;
case `Mary`:
Console.log(`Hi Mary`);
break;
default:
console.log (`Hi`);
break;
}

const mark = 70
switch (mark) 
{
case 90:
console.log (`A+`)
break;
case 80:
console.log (`A-`)
break;
case 70:
console.log (`A`)
break;
case 60:
console.log (`B+`)
break;
case 50:
console.log (`B-`)
break;
default:
    console.log (`you failed`)
    break;

}

const foo = 5;
switch (foo)
{
case 1:
case 2:
case 3:
case 4:
console.log (`I like this number`);
break;
case -1:
case -2:
console.log (`I love this number`)
break;
default:
console.log (`I don't like this number`)
break;
}

const boo = 0;
let output = "";
switch (boo) {
case 0:
output += "So "
case 1:
output += "How "
output += "Old "
case 2:
output += "are ";
case 3:
output += "you ";
case 4:
output +="?";
console.log (output);
break;
default:
console.log('Please pick a number from 0 to 5!');

}

let persons = {
    name: 'Tony',
    age : 17,
    drivers: null
    }
if (persons.age>=16){
    persons.drivers = "yes"
}
else 
{persons.driver = "no";
}
console.log (persons.driver)
console.log (persons)

let x =5
let y = 5<=x ? 5+5: x
console.log (y)

let isStudent = true

let price = isStudent ? 8: 12
console.log (price);
