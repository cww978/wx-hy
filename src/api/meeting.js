import request from '@/utils/request'

/**
 * 签到
 * @param {Object} params
 */
export function signIn(params) {
  return request({
    url: '/meeting/actSignInRecord/save',
    method: 'post',
    params
  })
}
/**
 * 查询签到记录
 * @param {Object} params
 */
export function getSignInInfo(params) {
  return request({
    url: '/meeting/actSignInRecord/getActSignInRecord',
    method: 'post',
    params
  })
}
/**
 * 保存发言
 * @param {Object} params
 */
export function saveMeetingMsg(params) {
  return request({
    url: '/meeting/actMeetingMsg/save',
    method: 'post',
    params
  })
}
/**
 * 获取投票列表
 * @param {Object} params
 */
export function getActVoteList(params) {
  return request({
    url: '/meeting/actVote/getActVoteList',
    method: 'get',
    params
  })
}
/**
 * 获取投票详情(未统计投票结果)
 * @param {Object} params
 */
export function getActVoteDetail(params) {
  return request({
    url: '/meeting/actVote/getDetail',
    method: 'get',
    params
  })
}
/**
 *  查询会议内容
 * @param {Object} params
 */
export function getMeetingDetail(params) {
  return request({
    url: '/meeting/getDetail',
    method: 'get',
    params
  })
}
/**
 *  查询会议内容
 * @param {Object} params
 */
export function sendVote(params) {
  return request({
    url: '/meeting/actVoteRecord/save',
    method: 'post',
    params
  })
}
