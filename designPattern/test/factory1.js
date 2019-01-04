/**
 *  author      : t1ng
 *  createTime  : 2019/1/4
 *  description :简单工厂模式练习
 *  内容：steam游戏
 */

class Game {
    constructor(name, productor, publishDate) {
        this.name = name;
        this.productor = productor;
        this.publishDate = publishDate;
    }

    getDetail() {
        console.log(`${this.name} 开发商：${this.productor} 发行日期：${this.publishDate}`)
    }
}

class OverCooked1 extends Game {
    constructor() {
        super('OverCooked1', 'Ghost Town Games Ltd.', '\n' +
            '2016年8月4日')
    }
}

class OverCooked2 extends Game {
    constructor() {
        super('OverCooked2', 'Ghost Town Games Ltd.', '\n' +
            '2018年8月8日')
    }
}

class GameFactory {
    NO1() {
        return new OverCooked1();
    }

    NO2() {
        return new OverCooked2();
    }
}

let factory = new GameFactory();
let no1 = factory.NO1();
let no2 = factory.NO2();

no1.getDetail();
no2.getDetail();