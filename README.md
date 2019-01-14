# 介绍
此文件夹主要存放简单的工具代码

## 目录
code  
canvas  
&emsp; - utils(工具类)   
&emsp;&emsp;-- utils.js(基础工具类)  
&emsp;&emsp;-- shape(图形)  
&emsp;&emsp;&emsp;&emsp;---- Arrow.js(箭头)  
&emsp;&emsp;&emsp;&emsp;---- Ball.js(球)   
&emsp;&emsp;&emsp;&emsp;---- Rocket.js(火箭)   
&emsp;&emsp;&emsp;&emsp;---- Star.js(星星)   
&emsp;&emsp;&emsp;&emsp;---- RoundRect.js(圆角矩形)   
&emsp;&emsp;&emsp;&emsp;---- Moon.js(月亮，有边线)   
&emsp;&emsp;&emsp;&emsp;---- Moon1.js(月亮，无边线)   

&emsp;- drawShape(绘制图形)  
&emsp;&emsp;-- drawArrow.html(绘制箭头)  
&emsp;&emsp;-- drawBall.html(绘制球)   
&emsp;&emsp;-- drawRocket.html(绘制火箭)   
&emsp;&emsp;-- drawStar.html(绘制星星)   
&emsp;&emsp;-- starrySky.html(绘制星空)   
&emsp;&emsp;-- drawRoundRect.html(绘制圆角矩形，4x4)   
&emsp;&emsp;-- drawMoon.html(绘制月亮，2种)   
&emsp;&emsp;-- reviewStar.html(同事一个效果的模仿，评星时星星上升再下降，
微信animation好像更好做动画，这里就原生实现了)   

&emsp;- move(移动路径)    
&emsp;&emsp;-- bobbing.html(上下来回运动)    
&emsp;&emsp;-- bobbingInX.html(从左至右，上下来回运动)     
&emsp;&emsp;-- heartbeat.html(心跳，缩放)       
&emsp;&emsp;-- sinWave.html(正弦函数图形)    
&emsp;&emsp;-- round.html(圆周运动)    
&emsp;&emsp;-- oval.html(椭圆运动)  

&emsp;- distance(距离)    
&emsp;&emsp;-- randomPoint.html(获取两个任意点间的距离)    
&emsp;&emsp;-- mouseDistance.html(获取点与鼠标之间的距离)    

&emsp;- others(其他)
&emsp;&emsp;-- changeColor.html(canvas交互例子，点击小球变色)  

&emsp;- gameTool(游戏工具)
&emsp;&emsp;-- index-move-land.html(地面循环移动，截取变化) 
&emsp;&emsp;-- index-move-sky.html(天空循环移动，translate变化) 
&emsp;&emsp;-- sprite-brids.html(小鸟精灵类切换) 
 
 
css  
&emsp;- fontEffect.html (毛玻璃和金属文字效果)  

echarts  （这个其实也属于canvas但是单独放了）    
&emsp;- aiqiyilog.html (实现爱奇艺指数-热度趋势) 
&emsp;- aiqiyiPeopleData.html (实现爱奇艺指数-受0重画像) 
&emsp;- js  
&emsp;&emsp;- hot.js（内容热度option）      
&emsp;&emsp;- dist.js（播放设备option）    
&emsp;&emsp;- people.js (性别、年龄、星座option)   
&emsp;&emsp;- province.js (省份地图（echarts2.0），rank option)   



js   
&emsp;- intersting.js (有意思的代码～)   
 
designPattern    
&emsp;- factory.js (工厂模式)  
&emsp;- signle.js (单例模式)  
&emsp;- adapter.js (适配器模式)  
&emsp;- decorator.js (装饰器模式)  
&emsp;- poxy.js (代理模式)  
&emsp;- observer.js (观察者模式)  
&emsp;- iterator.js (迭代器模式)  
&emsp;- state.js (状态模式)  
&emsp;- response.js (职责链模式)  
&emsp;- command.js (命令模式)  
&emsp;- memento.js (备忘录模式)   
 
&emsp;-test     
&emsp;&emsp;- factory1.js(工厂模式练习)   
&emsp;&emsp;- proxy1.js(代理模式练习，折扣显示)   
&emsp;&emsp;- observer1.js(观察者模式练习，老师学生提问回答)   
&emsp;&emsp;- bridge1.js(桥接模式练习，将动作单元连接在一起工作)   
&emsp;&emsp;- command1.html(命令模式练习，不直接使用canvas创建图形)   
&emsp;&emsp;- flyWeight.js(享元模式练习，抽出运动类)     
&emsp;&emsp;- state1.js(状态模式练习，运动状态，可以对状态修改或者调用)    
&emsp;&emsp;- facade1.html(外观模式练习，封装多个功能，简化底层操作)    


 