/**
 *  author      : t1ng
 *  createTime  : 2019/1/1
 *  description :代理模式
 */

class RealImg {
    constructor(fileName) {
        this.fileName = fileName;
        this.loadImg();
    }

    loadImg() {
        console.log('loading....' + this.fileName)
    }

    display() {
        console.log('display...' + this.fileName)
    }
}

class ProxyImg {
    constructor(fileName) {
        this.realName = new RealImg(fileName)
    }

    display() {
        this.realName.display();
    }
}

let image = new ProxyImg('xx.jpg');
image.display();

//----------------------------------
//es6 proxy

let star = {
    name: 'xx',
    age: 23,
    phone: '12345678901'
};

let agent = new Proxy(star, {
    get: function (target, key) {
        if (key === 'phone') {
            return '22222222222'//代理的电话
        }
        if (key === 'price') {
            return 120000//star中没有价钱，由代理开出
        }
        return target[key];//其他可以从原类获取项，直接返回
    },
    set: function (target, key, val) {
        if (key === 'customPrice') {
            if (val < 100000) {
                throw new Error('price is too low')
            } else {
                target[key] = val;
                return true;
            }
        }
    }
});

console.log(agent.name);
console.log(agent.age);
console.log(agent.phone);
console.log(agent.price);

// agent.customPrice = 90000;