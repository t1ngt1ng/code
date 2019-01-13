/**
 *  author      : t1ng
 *  createTime  : 2019/1/13
 *  description :享元模式：抽出运动类
 *  es6里的享元个人认为是extends，但是抽出的共同部分有的感觉不太适合说成继承
 */

var FlyWeight = {
    moveX: function (x) {
        this.x = x;
    },
    moveY: function (y) {
        this.y = y
    }
}

var Player = function (x, y, c) {
    this.x = x;
    this.y = y;
    this.c = c;
}

Player.prototype = FlyWeight;
Player.prototype.changec = function (c) {
    this.c = c;
}

var Spirit = function (x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
}

Spirit.prototype = FlyWeight;
Spirit.prototype.changeR = function (r) {
    this.r = r;
}

let player1 = new Player(6, 5, 'red');
console.log(player1);
player1.moveX(1)
player1.moveY(2)
player1.changec('pink')
console.log(player1);
let s1 = new Spirit(2, 4, 6);
console.log(s1)
s1.moveX(3)
s1.moveY(3)
s1.changeR(3)
console.log(s1);
