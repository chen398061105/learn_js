/*
     * 定义一个函数，用来获取指定元素的当前的样式
     * 参数：
     * 		obj 要获取样式的元素
     * 		name 要获取的样式名
     */
function getStyle(obj, name) {
    if (window.getComputedStyle) {
        //正常浏览器的方式，具有getComputedStyle()方法
        return getComputedStyle(obj, null)[name];
    } else {
        //IE8的方式，没有getComputedStyle()方法
        return obj.currentStyle[name];
    }
}

/**
 *
 * @param obj 要执行的对象
 * @param attr 要执行的对象的样式 left 左 top下 width左拉宽 height下拉宽
 * @param target 目标
 * @param speed 速度  + 向右 - 向左
 * @param callback  动画执行完毕后执行
 */
// var timeOut;
function move(obj,attr,target, speed,callback) {
    //点击后移动
    clearInterval(obj.timeOut);//再次点击前要关闭
    //只判断speed的正负值，默认正值
    //获取当前的坐标位置
    var current = parseInt(getStyle(obj,attr));
    if (current > target){// 当前位置小于目标位置则为负值
        speed = -speed;
    }
    //向执行对象添加停止器，这样就会各自执行* 不要使用全局变量
    obj.timeOut = setInterval(function () {
        var oldValue = parseInt(getStyle(obj, attr));
        var newValue = oldValue + speed;
        //当向左移动 newValue < target
        //当向右移动 newValue > target
        if ((speed < 0 && newValue < target) || speed > 0 && newValue > target) {
            newValue = target;
        }
        //最大点给最新值
        obj.style[attr] = newValue + 'px';
        //设置到线终点停止
        if (newValue == target) {
            clearInterval(obj.timeOut);
            //如果有则调用
            callback && callback();
        }
    }, 30);
}


