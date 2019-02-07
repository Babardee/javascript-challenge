// Part 1 First Array- Find all users older than 24
const texasss = [
  {
    name: 'Mike',
    age: 23,
    gender: 'm',
    us: false,
  },
  {
    name: 'Liz',
    age: 20,
    gender: 'f',
    us: true,
  },
  {
    name: 'Chris',
    age: 102,
    gender: 'm',
    us: true,
  },
  {
    name: 'Chuloo',
    age: 27,
    gender: 'm',
    us: false,
  },
  {
    name: 'Annie',
    age: 30,
    gender: 'f',
    us: true,
  },
]

// Part 1 - solution

let olderThan24 = texasss.filter(function (olderthan) {
  return olderthan.age > 24 ;});
console.log (olderThan24) ;
  



// Part 2 - Find the total age of all users
// Part 2 - Solution
let sumOfAllAges = texasss.reduce ((acc, val) => acc + val.age);                           


console.log(sumOfAllAges);


// Part 3 - List all female coders
// Part 3 - Solution
let allFemaleCoders = texasss.filter ((femaleCoders) => femaleCoders.gender === 'f');
console.log(allFemaleCoders);


// Array2 question and solution
const newieyork = [
    {
        name: 'Michelle',
        age: 19,
        coder: true,
        gender: 'f',
        us: true,
    },
    {
        name: 'Sam',
        age: 25,
        coder: false,
        gender: 'm',
        us: false,
    },
    {
        name: 'Ivy',
        age: 26,
        coder: true,
        gender: 'f',
        us: false,
    },
    {
        name: 'Nick',
        age: 32,
        coder: true,
        gender: 'm',
        us: true,
    },
    {
        name: 'Jim Beglin',
        age: 65,
        coder: false,
        gender: 'm',
        us: true,
    },
]
// Part 1 - List all users in US in ascending order
let US_User = newieyork.filter(users => users.us === true).sort((a,b) => {
    if (a.name > b.name){
        return 1;
    }else{
        return -1;
    }
});
console.log(US_User);
// Part 2 - Sort all users by age
let AgeSort = newieyork.sort((a,b) => {
    if (a.age > b.age){
        return 1;
    }else{
        return -1;
    }
});
console.log(AgeSort);
// Part 3 -  List all female coders
let Female_Coder = newieyork.filter(coder => coder.gender === 'f');
console.log(Female_Coder);