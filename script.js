'use strict';

//1.
let user = {
   firstname: "giorgi",
   lastname: "smith",
   age: 25,
   studentstatus: "active"
 };
console.log(user.studentstatus)


//2. 
let names = ['ani', 'nino', 'keti', 'nini', 'levani', 'lasha'];

for(let i=0; i< names.length; i++) {
  console.log(names[i]);
} 

let y=0;
while (y<studentsNames.length) {
 console.log(studentsNames[y]);
 y++
}


//3. 
let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
for (let item of numbers) {
  if (item>5) {
    console.log(item)
  }
}


//4.
let user = {
  name: 'giorgi',
  age:  20,
  studentstatus: 'active'
}

if (user.age<18 && user.studentstatus =='active') {
    console.log('hello');
} else if (user.name =='levan') {
    console.log('hello Levan');
} else if (user.studentstatus =='active' && user.age<25) {
    console.log('hello world');
} else {
  console.log('error')
}


//5.
let array = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]

for (let item of array) {
  for (let positive of item) {
   if (positive > 0)  {
    console.log(positive);
   }
  }
}


//6.
let array = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
for (let item of array) {
  if (item % 2 == 0) {
    console.log(item)
  }
}

for (let item of array) {
  if (item % 2 != 0) {
    console.log(item)
  }
}


//7. 
function sum(...numbers) {
  let sumValue = 0;
  for (let item of numbers) {
    if (item > 0) {
      sumValue += item;
    }
  }
  console.log(sumValue);
  return sumValue;
}

let result = sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
console.log(result);



//8. 
let user = {
  firstname: 'giorgi',
  lastname: 'saakadze',
  age: 32,
  isloggedin: true
}

function printName(obj) {
  if (obj.isloggedin) {
    return obj.firstname + ' ' + obj.lastname
  }
    return false;
}

let result2 = printName(user);
console.log(result2)



//9.
function getMaxValue(...array) {
  let MaxValue = 0;
  for (let x of array) {
    if (x > MaxValue) {
      MaxValue = x;
    }
  }
  return MaxValue;
}

let maxResult = getMaxValue(35,26,2,10,34,55,7,67,1,9)
console.log(maxResult);


function max(...array) {
  console.log(Math.max(...array));
}
max(35,26,2,10,34,55,7,67,1,9);



//10.
let array = [1,2,4,10,34,5,7,87];
for (let item of array) {
  if (item > 0 && item < 10) {
    console.log(item);
  }
}


//11. 
let numbers =[1,2,3,4,5,6,7,8,9,10];

for (let item of numbers) {
  if (item==5) {
    break;
  }
  console.log(item)
}



