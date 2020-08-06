// function doubleIt(num){
//     return num*2;

// }

// const doubleIt = function myFunc(num){
//     return num*2
// }

const doubleIt = num=>num*2;

const add = (n1,n2)=> n1+n2;
const give5 = ()=>5;
const result2 = give5();
const result = add(101,32);


const doMath = (x,y,z)=>{
    const sum = x+y+z;
    const diff = x-y+z ;
    const result = sum*diff;
    return result;

}
const result3 = doMath(5,8,7);

console.log(result3);