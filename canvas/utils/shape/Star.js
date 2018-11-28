/**
 *  author      : t1ng
 *  createTime  : 2018/11/26
 *  description :  星星
 *  example:    code/canvas/drawShape/drawStar.html
 */

function Star(r1 = 160, r2 = 80, color) {
    this.x = 0;
    this.y = 0;
    this.color = color||"yellow";//填充颜色
    this.rotation = 0;//旋转角度，传入弧度值，默认指向向右
    this.lineWidth = 1;//默认线宽
    this.lineColor = color;//边线颜色
    this.r1 = r1;//大圆半径
    this.r2 = r2;//小圆半径
}

/**
 * 绘制方法
 * arguments：   context     canvas.getContext
 * */
Star.prototype.draw = function (context) {
    context.save();
    context.translate(this.x, this.y);//将图形移动到传入的x,y坐标
    context.rotate(this.rotation);//旋转角度
    context.lineWidth = this.lineWidth;
    context.fillStyle = this.color;
    context.strokeStyle = this.lineColor;
    context.lineJoin = this.lineJoin;
    //绘制的箭头方形和三角形部分相同，均为总长一半
    context.beginPath();

    let step = 2 * Math.PI / 5,
        angle1 = 3 * Math.PI / 2,
        angle2 = Math.PI / 2 - 2 * step;

    for (let i = 0; i <= 5; i++) {
        let
            x1 = Math.cos(angle1) * this.r1,
            y1 = Math.sin(angle1) * this.r1,
            x2 = Math.cos(angle2) * this.r2,
            y2 = Math.sin(angle2) * this.r2;

        context.lineTo(x1, y1);
        context.lineTo(x2, y2);

        angle1 += step;
        angle2 += step;

    }


    context.closePath();
    context.fill();
    this.lineWidth > 0 ? context.stroke() : null;
    context.restore();

};


