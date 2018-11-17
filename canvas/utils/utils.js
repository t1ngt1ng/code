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
    captureMouse2: function (canvas) {
        let mouse = {x: 0, y: 0},
            bbox = canvas.getBoundingClientRect(),
            body_scrollLeft = document.body.scrollLeft,
            body_scrollTop = document.body.scrollTop,
            element_scrollLeft = document.documentElement.scrollLeft,
            element_scrollTop = document.documentElement.scrollTop;

        canvas.addEventListener('mousemove', function (event) {
            let x, y;
            if (event.pageX || event.pageY) {
                x = event.pageX;
                y = event.pageY;

            } else {
                x = event.clientX + (body_scrollLeft || element_scrollLeft);
                y = event.clientY + (body_scrollTop || element_scrollTop);
            }
            mouse.x = x - (bbox.left * (canvas.width / bbox.width))
            mouse.y = y - (bbox.top * (canvas.height / bbox.height))

        }, false);
        console.log(mouse)
        return mouse;
    }

};


