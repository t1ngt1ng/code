/**
 *  author      : t1ng
 *  createTime  : 2019/1/20
 *  description :访问者模式：让object拥有数组的方法
 */

class Visitor {
    splice() {
        //从原参数的第二个参数开始算起
        let args = Array.prototype.splice.call(arguments, 1);
        return Array.prototype.splice.call(arguments[0], args);
    }

    push() {
        //强化累数组对象，使他拥有length属性
        let len = arguments[0].length;
        let args = this.splice(arguments, 1);
        arguments[0].length = len + arguments.length - 1;
        return Array.prototype.push.apply(arguments[0], args);
    }

    pop() {
        return Array.prototype.pop.apply(arguments[0]);
    }
}

let a = new Object();
console.log(a.length);
let visitor = new Visitor();
visitor.push(a, 1, 2, 3, 4);
console.log(a.length);

visitor.push(a, 4, 5, 6);
console.log(a)
console.log(a.length);

visitor.pop(a)
console.log(a)

console.log(a.length);
visitor.splice(a, 2)
console.log(a)