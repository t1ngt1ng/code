/**
 *  author      : t1ng
 *  createTime  : 2018/11/28
 *  description :  圆角矩形
 *  example:    code/canvas/drawShape/drawMoon.html
 */

function Moon(r = 200, color) {
    this.x = 0;
    this.y = 0;
    this.color = color || 'yellow';
    this.r = r;//圆角半径
    this.rotation = 0;//旋转角度，传入弧度值，默认指向向右
    this.lineWidth = 1;//默认线宽
    this.lineColor = color;
}

/**
 * 绘制方法
 * arguments：   context     canvas.getContext
 * 这个类还是决定有边线，不使用缩放，所以把传入r作为半径
 * 此处的控点直接写成了二倍，可能Moon1更灵活一些
 * 也可以调整传入，但此处不修改了
 * */
Moon.prototype.draw = function (context) {
    context.save();
    context.translate(this.x, this.y);//将图形移动到传入的x,y坐标
    context.rotate(this.rotation);//旋转角度
    context.lineWidth = this.lineWidth;
    context.fillStyle = this.color;
    context.strokeStyle = this.lineColor;
    context.lineJoin = this.lineJoin;
    //绘制的箭头方形和三角形部分相同，均为总长一半
    context.beginPath();

    context.arc(0, 0, this.r, Math.PI / 2, 3 * Math.PI / 2, true);
    context.moveTo(0, -this.r);
    let lineAC = Math.sqrt(Math.pow(2 * this.r, 2) + Math.pow(this.r, 2));
    //lineAC / 2角度相同情况下斜边比对边的比例相同得出的,因为控点是r的二倍所以约分了
    context.arcTo(2 * this.r, 0, 0, this.r, lineAC / 2);

    context.fill();
    this.lineWidth > 0 ? context.stroke() : null;
    context.restore();

};




