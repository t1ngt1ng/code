/**
 *  author      : t1ng
 *  createTime  : 2018/11/9
 *  description :火箭，可选择是否显示助推火焰
 */

function Rocket(width = 25, height = 20) {
    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height;
    this.rotation = 0;
    this.showFlame = false;//是否显示火焰
}

Rocket.prototype.draw = function (context) {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.lineWidth = 1;
    context.strokeStyle = '#000000';
    context.beginPath();
    let w = this.width / 2;
    context.moveTo(w, 0);
    context.lineTo(-w, w);
    context.lineTo(-w / 2,0);
    context.lineTo(-w, -w);
    context.lineTo(w, 0);
    context.stroke();
    if (this.showFlame) {
        context.beginPath();
        context.moveTo(-w * 3 / 4, -w / 2);
        context.lineTo(-w * 3 / 2, 0);
        context.lineTo(-w * 3 / 4, w / 2);
        context.stroke()
    }
    context.restore();

}
