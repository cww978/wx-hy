import request from '@/utils/request'
/**
 * 获取用户信息
 */
export function userInfo() {
  return request({
    url: '/weixin/user/userInfo',
    method: 'get'
  })
}
