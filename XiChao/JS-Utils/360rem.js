/*
 * @Email: nicexch@126.com
 * @Author: 汐潮
 * @Date: 2020-12-21 09:12:15
 * @LastEditors: 汐潮
 * @LastEditTime: 2021-01-22 16:05:27
 */
; (function (win, doc) {
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        html,
        htmlW,
        fontSize,
        rem,
        recalc = function () {
            html = doc.documentElement
            htmlW = html.clientWidth < 1920 ? html.clientWidth : 1920
            fontSize = htmlW / 19.2
            rem = doc.getElementById('rem') || null
            if (rem) {
                rem.parentNode.removeChild(rem)
            }
            /* 创建style标签并添加到Head标签里去 */
            if (doc.all) {
                // IE兼容性写法
                win.style = "html{font-size:" + fontSize + "px;}"
                win.style.id = 'rem'
                doc.createStyleSheet("javascript:style")
            } else {
                //标准浏览器
                var style = doc.createElement('style')
                style.id = 'rem'
                style.type = 'text/css'
                style.innerHTML = "html{font-size:" + fontSize + "px;}"
                doc.getElementsByTagName('HEAD').item(0).appendChild(style)
            }
        }
    if (!doc.addEventListener) {
        return
    }
    win.addEventListener(resizeEvt, recalc, false)
    doc.addEventListener('DOMContentLoaded', recalc, false)
})(window, document)

