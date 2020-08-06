// const person = {name: 'jack',age: 22, phone:2039, gf:"ema", job:"web"};
// //const {gf}  = person;
// const {phone,gf} = person;
// console.log(gf);
// console.log(gf,phone);

// const friend = ["a","b","c","d","e"];
// const [first,second,...rest] = friend;
// console.log(rest);


const complexObj = {
    name: "a",
    info:{
        address : {
            present:{
                num1:"dhaka",
                num2:"sylhet"
            },
            permanent:"efg",
        },
        phone:23,
        age:21,
    }
}

const {phone} = complexObj.info;
const {permanent} = complexObj.info.address;
const {num1} = complexObj.info.address.present;
console.log(num1);
console.log(phone);
console.log(permanent);