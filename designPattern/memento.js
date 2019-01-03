/**
 *  author      : t1ng
 *  createTime  : 2019/1/3
 *  description :备忘录模式
 */

class Memento {
    constructor(content) {
        this.content = content;
    }

    getContent() {
        return this.content;
    }
}

class CareTaker {
    constructor() {
        this.list = [];
    }

    add(memento) {
        this.list.push(memento);
    }

    get(index) {
        return this.list[index];
    }
}

class Editor {
    constructor() {
        this.content = null;
    }

    setContent(content) {
        this.content = content;
    }

    getContent() {
        return this.content;
    }

    saveContentToMemento() {
        return new Memento(this.content);
    }

    getContentFromMemento(memento) {
        this.content = memento.getContent();
    }
}

let editor = new Editor();
let careTaker = new CareTaker();

editor.setContent('111')
editor.setContent('222')
careTaker.add(editor.saveContentToMemento());
editor.setContent('333')
careTaker.add(editor.saveContentToMemento());
editor.setContent('444')
careTaker.add(editor.saveContentToMemento());


console.log(editor.getContent());

editor.getContentFromMemento(careTaker.get(1))

console.log(editor.getContent());

editor.getContentFromMemento(careTaker.get(0))

console.log(editor.getContent());