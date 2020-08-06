class grandParents{
    constructor(){
        this.fatherName1 = "komm";
    }
}

class Parent{
    constructor(){
        this.fatherName = "sawyer";
    }
}

class Child extends Parent(grandParents){
    constructor(name){
        super ();
       // super ();
        this.name = name;
    }
    getFullName(){
        return this.name+" "+this.fatherName+" "+this.fatherName1;
    }
}
const baby = new Child("arnold");
const baby2 = new Child("tom");
console.log(baby.getFullName());
console.log(baby2.getFullName());