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

//let persons = {
  //  name: 'Tony',
  //  age : 17,
  //  drivers: null
 //   }
//if (persons.age>=16){
//    persons.drivers = "yes"
//}
//else 
//persons.driver = "no";
//}
//console.log (persons.driver)
//console.log (persons)

//let x =5
//let y = 5<=x ? 5+5: x
//console.log (y)

//let isStudent = true
//let isSenior = true

//let price = isStudent ? 8 : isSenior ? 6 : 10

//let isStudent = true;
//let price = 12;isStudent ? (
  //price = 8,
 // alert('Please check for student ID')
//) : (
  //alert('Enjoy the movie')
//);

for (i =0; i <5; i++) {
  console.log (" this is a loop}")
}
let arr = [1,2,3,4,5,6,7]
console.log (arr.length)

for (let i = 0;;i++){
     console.log ("loop,i="+1);
  if(i>1)
  break;
}

let counter =0;
function inc () {counter++;} for (let i = 0; i<10; i++, inc());
console.log (counter)

for (var i = 0; i<10; i++) 
{let x =i;
console.log (x)
}

for (let y=0; y<2; y++)
for (let x=0; x<2; x++)
console.log(y, x);


for (let i=0; i<10; i++) {
  if (i===5)continue; console.log(i);
}

for (let i=0;;i++) {
  console.log ("Loop:");
  break;
  }
  
  for (let step = 0; step < 5; step++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log('Walking east one step')};

let string = `Miles Fitton`; for (let value of string)
console.log(value);
console.log (string.length)

let array = [0,1,2,];

//let object = {a:1,b:2, c:3};
//for (let value of object)// won't work because objects is not iterable

let object = {a:1, b:2, c:3, method:()=>{}};
for (let value in object)
console.log(value,object[value]);

let c = 0;
while ( c++ < 5)
console.log (c);

//let c = 0;
//while (c++ < 1000)
//{if (c > 1)
//continue;
//console.log(c);
//}