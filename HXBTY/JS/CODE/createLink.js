/**
 * @Filename: createLink.js
 * @FilePath: D:\Work\practice\summarize\JS\CODE\createLink.js
 * @Description: 生产链接, 创建a标签实现文件下载功能(例如导出功能, 后端返回的时文件流格式, 前端接收文件流, 在本地生产链接, 创建a标签, 通过a标签点击下载的功能实现文件下载)
 * @Author: lyh
 * @CreateTime: 2021-02-04 17:01:40
 */

/**
 * 需要引入 axios 文件
 * */
class createLink {
    async LocalDefinition(url, method = 'get', params = {}) {
        const res = await axios({
            method,
            url: url,
            data: params,
            headers: {
                'Content-Type': 'application/json'
            },
            responseType: 'blob' // 默认json
        })
        return res
    }

    async customExport(data) {
        const { url, method, params, name, type = '.pdf' } = data
        log(url, method, params, name)
        const res = await createLink.LocalDefinition(url, method, params)
        const tmpUrl = URL.createObjectURL(
            new Blob([res.data], {
                type: 'application/vnd.ms-excel;charset=utf-8'
            })
        )
        const link = document.createElement('a')
        link.style.display = 'none'
        link.href = tmpUrl
        link.setAttribute('download', name + type)
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link) // 下载完成移除元素
        URL.revokeObjectURL(tmpUrl) // 释放掉blob对象
    }
}

export default createLink