/**
 *  author      : t1ng
 *  createTime  : 2018/12/30
 *  description :装饰器模式
 */

class Circle {

    draw() {
        console.log('draw a circle')
    }
}

class ShapDecorator {
    constructor(shap) {
        this.shape = shap
    }

    draw() {
        this.shape.draw();
        this.setRedBorder(this.shape);
    }

    setRedBorder(shape) {
        console.log(this.shape, 'draw red line');
    }
}

let circle = new Circle();
let decCircle = new ShapDecorator(circle);

decCircle.draw();

//------------es7decorator-------------------
//要运行需要安装babel-plugin-transform-decorators-legcy(具体对应安装的babel-core版本)
function log(target,name,descriptor){
    let oldValue=descriptor.value;
    descriptor.value=function(){
        console.log(`calling ${name} with `,arguments)
        return oldValue.apply(this,arguments);
    }
    return descriptor
}
class Math{
    @log
    add(a,b){
        return a+b;
    }
}

let math=new Math()
const result=math.add(2,3);
console.log(result)