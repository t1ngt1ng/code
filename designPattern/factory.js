/**
 *  author      : t1ng
 *  createTime  : 2018/12/30
 *  description :工厂模式
 */

class Product {
    constructor(name) {
        this.name = name;
    }

    init() {
        console.log('Product init')
    }
}

class Creator {
    createProduct(name) {
        return new Product(name)
    }
}

let creator = new Creator();
let p = creator.createProduct('xxx');
p.init();