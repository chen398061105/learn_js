/**
 *
 * @param obj 要添加的class元素对象
 * @param cn class值
 */
function addClass(obj, cn) {
    if (!hasClass(obj, cn)) {
        obj.className += " " + cn;
    }
}

/**
 *判断obj里面是否cn属性值
 * @param obj
 * @param cn
 * 有true 没有false
 */
function hasClass(obj, cn) {
    var reg = new RegExp("\\b" + cn + "\\b");
    return reg.test(obj.className);
}

/**
 * 删除一个class样式
 * @param obj
 * @param cn
 */
function remove(obj, cn) {
    var reg = new RegExp("\\b" + cn + "\\b");
    obj.className = obj.className.replace(reg, "");
}

/**
 * 切换样式  没有则添加 有则删除
 * @param obj
 * @param cn
 */
function toggleClass(obj, cn) {
    if (hasClass(obj, cn)) {
        remove(obj, cn);
    } else {
        addClass(obj, cn);
    }
}