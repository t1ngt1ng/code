/**
 *  author      : t1ng
 *  createTime  : 2019/1/1
 *  description :观察者模式
 */
class Subject {
    constructor() {
        this.state = 0;
        this.observers = []
    }

    getState() {
        return this.state
    }

    setState(state) {
        this.state = state;
        this.notifiyAllObservers();
    }

    notifiyAllObservers() {
        this.observers.forEach(item => {
            item.update();
        })
    }

    attach(oberver) {
        this.observers.push(oberver);
    }
}

class Observer {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
        this.subject.attach(this);
    }

    update(){
        console.log(`${this.name} update,state:${this.subject.getState()}`)
    }
}

let s = new Subject();
let o1 = new Observer('01', s);
let o2 = new Observer('02', s);
s.setState(1);
s.setState(2);
s.setState(3);

//tool/nodejs下关于文件行，length读取的也是观察者模式