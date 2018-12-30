/**
 *  author      : t1ng
 *  createTime  : 2018/12/30
 *  description :适配器模式
 */

class Standard {
    constructor() {
        console.log('this is standard');
    }

    request() {
        return 'standard'
    }
}

class Target {
    constructor() {
        this.adapter = new Standard();
    }

    request() {
        let info = this.adapter.request();
        return `${info} -transform-traget`
    }
}

let target = new Target();
let res = target.request();
console.log(res);

