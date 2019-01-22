/**
 *  author      : t1ng
 *  createTime  : 2019/1/22
 *  description :使用js-pinyin，将城市按照首字母分类
 *  此处的js-pinyin只用了包里的pinyin.js文件，在vue等文件里请正常引用
 *  npm install js-pinyin  https://www.npmjs.com/package/js-pinyin
 *  具体文件见Article／javascript/将城市按照首字母分类.md
 */

const data = require('./data.json');
const py = require('./js-pinyin');

let p, c, d = {}, blocks = [],
    city = data.city,
    pyjs = new py();

city.forEach(item => {
    p = pyjs.getFullChars(item.name).toLocaleLowerCase().slice(0, 1);//获取全拼,转小写，获取首字母
    c = p.charCodeAt(0);
    if (c > 96 && c < 123) {//大写a-z,小写A-Z 65-90
        if (!d[p]) {
            d[p] = []
        }
        d[p].push(item.name)
    }
})

for (let [k, v] of Object.entries(d)) {
    blocks.push({
        title: k.toUpperCase(),
        city: v
    })
}
blocks.sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0))

console.log(blocks)