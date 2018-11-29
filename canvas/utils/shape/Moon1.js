/**
 *  author      : t1ng
 *  createTime  : 2018/11/28
 *  description :  圆角矩形
 *  example:    code/canvas/drawShape/drawMoon.html
 */

function Moon1(d = 2, r = 200, color) {
    this.x = 0;
    this.y = 0;
    this.d = d;//控点，r的倍数
    this.color = color || 'yellow';
    this.r = r;//圆角半径
    this.rotation = 0;//旋转角度，传入弧度值，默认指向向右
    this.lineWidth = 1;//默认线宽
    this.lineColor = color;
}

/**
 * 绘制方法
 * arguments：   context     canvas.getContext
 * 这个类是仿照慕课写的，因为没有边线，所以使用缩放也不用担心边线被放大
 * */
Moon1.prototype.draw = function (context) {
    context.save();
    context.translate(this.x, this.y);//将图形移动到传入的x,y坐标

    context.rotate(this.rotation);//旋转角度
    context.scale(this.r, this.r);
    context.fillStyle = this.color;
    //绘制的箭头方形和三角形部分相同，均为总长一半
    context.beginPath();

    context.arc(0, 0, 1, Math.PI / 2, 3 * Math.PI / 2, true);
    context.moveTo(0, -1);
    let lineAC = Math.sqrt(Math.pow(this.d, 2) + Math.pow(1, 2));
    //之后lineAC / this.d值是角度相同情况下斜边比对边的比例相同得出的，因为r是1所以不用乘r
    context.arcTo(this.d, 0, 0, 1, lineAC / this.d);
    context.closePath();


    context.fill();
    context.restore();

};




