import request from '@/utils/request'
export default {
  /**
   * 签到
   * @param {Object} params
   */
  signIn(params) {
    return request({
      url: '/meeting/actSignInRecord/save',
      method: 'post',
      params
    })
  },
  /**
   * 查询签到记录
   * @param {Object} params
   */
  getSignInInfo(params) {
    return request({
      url: '/meeting/actSignInRecord/getActSignInRecord',
      method: 'post',
      params
    })
  },
  /**
   * 保存发言
   * @param {Object} params
   */
  saveMeetingMsg(params) {
    return request({
      url: '/meeting/actMeetingMsg/save',
      method: 'post',
      params
    })
  },
  /**
   * 获取投票列表
   * @param {Object} params
   */
  getActVoteList(params) {
    return request({
      url: '/meeting/actVote/getActVoteList',
      method: 'get',
      params
    })
  }
}
