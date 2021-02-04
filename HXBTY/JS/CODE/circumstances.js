/**
 * @Filename: circumstances.js
 * @FilePath: D:\Work\practice\summarize\JS\CODE\circumstances.js
 * @Description: 在H5中, 经常会遇到需要判断当前页面在哪种环境中打开的问题
 * @Author: lyh
 * @CreateTime: 2021-02-04 16:27:51
 */

class circumstances {
    /**
     * 用于判断简单的环境, 返回的数据, 若时在哪个环境打开, 则对应的环境名称的值为true
     * @returns {{isWeixin: boolean, isMobile: boolean, isQQ: boolean, isWeibo: boolean, isAndroid: boolean, isPC: boolean, isIOS: (boolean|boolean)}}
     */
    isEquipment() {
        let UA = window.navigator.userAgent,
            isAndroid = /android|adr|linux/gi.test(UA),
            isIOS = /iphone|ipod|ipad/gi.test(UA) && !isAndroid,
            isBlackBerry = /BlackBerry/i.test(UA),
            isWindowPhone = /IEMobile/i.test(UA),
            isMobile = isAndroid || isIOS || isBlackBerry || isWindowPhone;
        return {
            isAndroid: isAndroid,
            isIOS: isIOS,
            isMobile: isMobile,
            isWeixin: /MicroMessenger/gi.test(UA),
            isQQ: /QQ/gi.test(UA),
            isPC: !isMobile,
            isWeibo: /WeiBo/gi.test(UA)
        }
    }
}
export default circumstances