/**
 * @Filename: share.js
 * @FilePath: D:\Work\practice\summarize\JS\UNI\CODE\share.js
 * @Description: 通过uni开发微信小程序要实现分享功能时, 可以通过uni提供的 onShareAppMessage 钩子去设置当前页面的分享, 以及指定分享的内容. 但是若是要在全局设置分享, 可以通过这只分享方法, 然后再全局通过 vue混入 的方式引入全局
 * @Author: lyh
 * @CreateTime: 2021-02-04 17:19:11
 */

/**
 * 在main.js中引入该文件, 以Vue.mixin(share)的方式, 全局混入
 * */
export default {
    data() {
        return {
            //设置默认的分享参数
            share: {
                title:  '',
                path: '/pages/home/main/home',
                imageUrl: '',
                desc: '',
                content: ''
            }
        }
    },

    onShareAppMessage(res) {
        return {
            title: this.share.title,
            path: this.share.path,
            imageUrl: this.share.imageUrl,
            desc: this.share.desc,
            content: this.share.content,
            success(res) {
                uni.showToast({
                    title: '分享成功'
                })
            },
            fail(res) {
                uni.showToast({
                    title: '分享失败',
                    icon: 'none'
                })
            }
        }
    }
}
