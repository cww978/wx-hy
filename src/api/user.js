import request from '@/utils/request'
export default {
  /**
   * 获取用户信息
   */
  userInfo() {
    return request({
      url: '/weixin/user/userInfo',
      method: 'get'
    })
  }
}
