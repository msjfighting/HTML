window.onload = function () {
    var objDemo = document.getElementById("demo");
    var objSmallBox = document.getElementById("small-box")
    var objMark = document.getElementById("mark")
    var objFloatBox = document.getElementById("float-box")
    var objBigBox = document.getElementById("big-box")
    var objBigBoxImage = objBigBox.getElementsByTagName("img")[0];

    objMark.onmouseover = function () {
        objFloatBox.style.display = "block";
        objBigBox.style.display = "block";
    }

    objMark.onmouseout = function () {
        objFloatBox.style.display = "none";
        objBigBox.style.display = "none";
    }

    objMark.onmousemove = function (ev) {
        // 解决IE兼容问题
        var _event = ev || window.event;
        // 鼠标的x坐标 - demo的left - small的left - 放大镜的宽度/2(鼠标距离放大镜边框长度)
        var left = _event.clientX - objDemo.offsetLeft - objSmallBox.offsetLeft - objFloatBox.offsetWidth / 2;
        // 鼠标的y坐标 - demo的top - small的top - 放大镜的高度/2(鼠标距离放大镜边框长度)
        var top = _event.clientY - objDemo.offsetTop - objSmallBox.offsetTop - objFloatBox.offsetHeight / 2;

        if (left < 0) {
            left = 0;
        } else if (left > (objMark.offsetWidth - objFloatBox.offsetWidth)){
            // 放大镜移动到最右边时 left最大为small宽度 - 放大镜的宽度
            left = objMark.offsetWidth - objFloatBox.offsetWidth;
        }

        if (top < 0) {
            top = 0;
        } else if (top > (objMark.offsetHeight - objFloatBox.offsetHeight)){
            top = objMark.offsetHeight - objFloatBox.offsetHeight;
        }

        objFloatBox.style.left = left + "px";
        objFloatBox.style.top = top + "px";

        var percentX = left / (objMark.offsetWidth - objFloatBox.offsetWidth);
        var percentY = top / (objMark.offsetHeight - objFloatBox.offsetHeight);

        objBigBoxImage.style.left = -percentX * (objBigBoxImage.offsetWidth - objBigBox.offsetWidth) +"px";
        objBigBoxImage.style.top = -percentY * (objBigBoxImage.offsetHeight - objBigBox.offsetHeight) + "px";
    }
}