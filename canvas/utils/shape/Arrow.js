/**
 *  author      : t1ng
 *  createTime  : 2018/11/3
 *  description :  箭头
 *  example:    code/canvas/drawShape/drawArrow.html
 */

function Arrow(width = 100, color) {
    this.x = 0;
    this.y = 0;
    this.color = color || '#000';//填充颜色
    this.rotation = 0;//旋转角度，传入弧度值，默认指向向右
    this.width = width;//整个箭头宽
    this.lineWidth = 1;//默认线宽
    this.lineColor = color;//边线颜色
}

/**
 * 绘制方法
 * arguments：   context     canvas.getContext
 * */
Arrow.prototype.draw = function (context) {
    context.save();
    context.translate(this.x, this.y);//将图形移动到传入的x,y坐标
    context.rotate(this.rotation);//旋转角度
    context.lineWidth = this.lineWidth;
    context.fillStyle = this.color;
    context.strokeStyle = this.lineColor;
    //绘制的箭头方形和三角形部分相同，均为总长一半
    context.beginPath();
    context.moveTo(-(this.width / 2), -(this.width / 4));
    context.lineTo(0, -(this.width / 4));
    context.lineTo(0, -(this.width / 2));
    context.lineTo(this.width / 2, 0);
    context.lineTo(0, this.width / 2);
    context.lineTo(0, this.width / 4);
    context.lineTo(-(this.width / 2), this.width / 4);
    context.lineTo(-(this.width) / 2, -(this.width / 4));
    context.closePath();
    context.fill();
    this.lineWidth > 0 ? context.stroke() : null;
    context.restore();

}


