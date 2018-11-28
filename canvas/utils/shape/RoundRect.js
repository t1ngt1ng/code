/**
 *  author      : t1ng
 *  createTime  : 2018/11/28
 *  description :  圆角矩形
 *  example:    code/canvas/drawShape/drawRoundRect.html
 */

function RoundRect(width = 100, height = 100, r = 10, color) {
    this.x = 0;//x.y为左上角偏移量
    this.y = 0;
    this.color = color || '#fff';
    this.width = width;//宽高均为算上两个圆角的长度
    this.height = height;
    this.r = r;//圆角半径
    this.rotation = 0;//旋转角度，传入弧度值，默认指向向右
    this.lineWidth = 1;//默认线宽
    this.lineColor = color;
}

/**
 * 绘制方法
 * arguments：   context     canvas.getContext
 * */
RoundRect.prototype.draw = function (context) {
    context.save();
    context.translate(this.x, this.y);//将图形移动到传入的x,y坐标
    context.rotate(this.rotation);//旋转角度
    context.lineWidth = this.lineWidth;
    context.fillStyle = this.color;
    context.strokeStyle = this.lineColor;
    context.lineJoin = this.lineJoin;
    //绘制的箭头方形和三角形部分相同，均为总长一半
    context.beginPath();

    context.arc(this.width - this.r, this.height - this.r, this.r, 0, Math.PI / 2);
    context.lineTo(this.r, this.height);
    context.arc(this.r, this.height - this.r, this.r, Math.PI / 2, Math.PI);
    context.lineTo(0, this.r);
    context.arc(this.r, this.r, this.r, Math.PI, Math.PI * 3 / 2);
    context.lineTo(this.width - this.r, 0);
    context.arc(this.width - this.r, this.r, this.r, Math.PI * 3 / 2, 0);

    context.closePath();
    context.fill();
    this.lineWidth > 0 ? context.stroke() : null;
    context.restore();

};


