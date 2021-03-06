/**
 *  author      : t1ng
 *  createTime  : 2018/11/3
 *  description : 圆形
 *  arguments:  radius  半径  默认40
 *              color   颜色  默认黑色
 *  example:    code/canvas/drawShape/drawBall.html
 */

function Ball(radius = 40, color) {
    this.x = 0;//x轴位置
    this.y = 0;//y轴位置
    this.radius = radius;//半径
    this.vx = 0;//x轴速度向量
    this.vy = 0;//y轴速度向量
    this.rotation = 0;//旋转
    this.scaleX = 1;//默认x缩放为1
    this.scaleY = 1;//默认y缩放为1
    this.color = utils.parseColor(color) || '#000';//颜色
    this.lineWidth = 1;//默认线宽
    this.lineColor = utils.parseColor(color);//边线颜色

}

/**
 * 绘制方法
 * arguments：   context     canvas.getContext
 * */
Ball.prototype.draw = function (context) {
    context.save();//保存图形到图像状态栈
    context.translate(this.x, this.y);//将图形移动到传入的x,y坐标
    context.rotate(this.rotation);//旋转角度
    context.scale(this.scaleX, this.scaleY);
    context.lineWidth = this.lineWidth;
    context.fillStyle = this.color;
    context.strokeStyle = this.lineColor;
    context.beginPath();
    context.arc(0, 0, this.radius, 0, (Math.PI * 2), true);
    context.closePath();
    context.fill();
    this.lineWidth > 0 ? context.stroke() : null;
    context.restore();
}