/**
 *  author      : t1ng
 *  createTime  : 2018/12/30
 *  description :单例模式
 */


class Director {
    constructor() {
        console.log('this is director')
    }

    static getInstance() {
        if (!Director.instance) {
            Director.instance = new Director()
        }
        return Director.instance;
    }
}


let obj1 = Director.getInstance();
let obj2 = Director.getInstance();

