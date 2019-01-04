/**
 *  author      : t1ng
 *  createTime  : 2019/1/4
 *  description : 使用es6 proxy 做一个价格优惠显示的代理
 */

let list = [
    {
        "id": 1,
        "name": "overcooked1",
        "price": 57
    },
    {
        "id": 2,
        "name": "overcooked2",
        "price": 90
    },
    {
        "id": 3,
        "name": "overcooked1+overcooked2",
        "price": 147,
        "discount": 0.9
    }
]

list.forEach(item => {
    let obj = item;
    if (item.discount) {
        obj = getDiscount(item);
    }
    console.log(obj.name, obj.price);
})

function getDiscount(item) {
    return new Proxy(item, {
        get: function (target, key) {
            if (key === 'name') {
                return `${target[key]}【折扣】`
            }
            if (key === 'price') {
                return parseInt(target[key] * item.discount)||target[key];
            }
            return target[key]
        }
    })
}