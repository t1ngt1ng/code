/**
 *  author      : t1ng
 *  createTime  : 2019/1/13
 *  description :桥接模式：将动作单元连接在一起工作
 */

class Speed {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    run() {
        console.log(`运动x:${this.x},y:${this.y}`)
    }
}

class Speak {
    constructor(font) {
        this.font = font;
    }

    say() {
        console.log(`书写字体:${this.font}`)
    }
}

class Color {
    constructor(color) {
        this.color = color
    }

    draw() {
        console.log(`绘制颜色${this.color}`)
    }
}

class People {
    constructor(x, y, font) {
        console.log('创建人物')
        this.speed = new Speed(x, y);
        this.font = new Speak(font);
    }

    init() {
        this.speed.run();
        this.font.say();
    }
}

class Ball {
    constructor(x, y, color) {
        console.log('绘制球形')
        this.speed = new Speed(x, y);
        this.color = new Color(color);
    }

    init() {
        this.speed.run();
        this.color.draw();
    }
}

let p = new People(10, 12, 16);
p.init();
let ball = new Ball(10, 10, 'red');
ball.init();