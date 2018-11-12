var utils = {
    //获取鼠标位置
    captureMouse: function (element) {
        let mouse = {x: 0, y: 0, event: null},
            body_scrollLeft = document.body.scrollLeft,
            body_scrollTop = document.body.scrollTop,
            element_scrollLeft = document.documentElement.scrollLeft,
            element_scrollTop = document.documentElement.scrollTop,
            offsetLeft = element.offsetLeft,
            offsetTop = element.offsetTop;
        element.addEventListener('mousemove', function (event) {
            let x, y;
            // console.log(body_scrollLeft, body_scrollTop, element_scrollLeft, element_scrollTop)

            if (event.pageX || event.pageY) {
                x = event.pageX;
                y = event.pageY;
            } else {

                x = event.clientX + (body_scrollLeft || element_scrollLeft);
                y = event.clientY + (body_scrollTop || element_scrollTop);
            }
            x -= offsetLeft;
            y -= offsetTop;

            mouse.x = x;
            mouse.y = y;
        }, false);
        return mouse;
    },
    parseColor(color, toNumber) {
        if (toNumber === true) {
            if (typeof color === 'number') {
                return (color | 0)//去掉小数
            }

            if (typeof color === 'string' && color[0] === '#') {
                console.log(222, color);
                return color = color.slice(1);

            }
        } else {
            if (typeof color === 'number') {
                color = '#' + ('00000' + (color | 0).toString(16)).substr(-6);
            }
            return color;
        }

    }

};


