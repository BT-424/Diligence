/**
 * @Filename: deepClone.js
 * @FilePath: D:\Work\practice\summarize\JS\CODE\deepClone.js
 * @Description: 深拷贝方法 在对接后端树形数据的时候, 后端返回的数据中没有子级children的时候, 也返回了一个children的空数组, 因此需要过滤
 * @Author: lyh
 * @CreateTime: 2021-02-04 16:22:21
 */

export function deepClone(obj) {
    const objClone = Array.isArray(obj) ? [] : {}
    if (obj && typeof obj === 'object') {
        for (const key in obj) {
            // eslint-disable-next-line no-prototype-builtins
            if (obj.hasOwnProperty(key)) {
                if (key === 'children') {
                    if (obj[key].length === 0) {
                        delete obj[key]
                    }
                }
                if (obj[key] && typeof obj[key] === 'object') {
                    objClone[key] = deepClone(obj[key])
                } else {
                    objClone[key] = obj[key]
                }
            }
        }
    }
    return objClone
}

