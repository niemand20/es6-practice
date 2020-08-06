class Student{
    constructor(sid,sname) {
        this.id = sid;
        this.name = sname;
        this.school = "abcd"
    }

}

const student = new Student(12,"go");
const student2 = new Student(23,"come");

console.log(student.name,student2.id);