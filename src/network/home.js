import { request } from "./request"

// 在做一层封装
export function getHomeMultidata() {
    return request({
        url:'/home/multidata'
    })
}