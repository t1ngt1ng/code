/**
 *  author      : t1ng
 *  createTime  : 2019/1/12
 *  description :老师提问，学生回答
 */

class Student {
    constructor(name) {
        this.name = name;
        this.sleep = false;
        this.result = '';
    }

    say() {

        this.sleep ? null : this.answer();
        console.log(this.result);
    }

    answer() {
        this.result = `${this.name}回答问题`;
    }

    setSleep() {
        this.sleep = true;
        this.result = `${this.name}睡着了～～～`;
    }
}


class Teacher {
    constructor() {
        this.students = [];
    }

    ask(question) {
        console.log('问题是：', question);
        this.notifiyStudent();
    }

    notifiyStudent() {
        this.students.forEach(item => {
            item.say()
        })
    }

    attach(student) {
        this.students.push(student);
    }
}

let t = new Teacher()
let s1 = new Student('s1');
let s2 = new Student('s2');
t.attach(s1)
t.attach(s2)
s1.setSleep()
t.ask('什么事观察者模式');