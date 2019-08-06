import { signIn, getSignInInfo } from '@/api/meeting'
import { userInfo } from '@/api/user'
export default {
  namespaced: true,
  state: {
    // 是否签到
    signin: false,
    // 人物信息
    userInfo: {
      id: '',
      headImgUrl: ''
    },
    // 人物签到信息
    signinInfo: {
      id: '',
      deptName: '',
      name: '',
      meetingId: '',
      num: '',
      longitude: '',
      latitude: ''
    }
  },
  getters: {
    signin: state => state.signin,
    userName: state => state.signinInfo.name,
    userHeadImgUrl: state => state.userInfo.headImgUrl,
    signinInfo: state => state.signinInfo
  },
  mutations: {
    // 设置用户信息
    SET_USERINFO: (state, info) => {
      Object.assign(state.userInfo, info)
    },
    // 设置签到信息
    SET_SIGNININFO: (state, info) => {
      Object.assign(state.signinInfo, info)
    },
    SET_SIGNIN: (state, e) => {
      state.signin = e
    }
  },
  actions: {
    // 获取用户的ID、头像
    getUserInfo: ({ commit }) => {
      return new Promise(resolve => {
        userInfo().then(res => {
          commit('SET_USERINFO', res.data)
          resolve()
        })
      })
    },
    // 更新签到信息
    updateSigninInfo: ({ commit }, meetingId) => {
      getSignInInfo({ meetingId: meetingId }).then(res => {
        if (res.data) {
          commit('SET_SIGNININFO', res.data)
          commit('SET_SIGNIN', true)
        } else {
          commit('SET_SIGNIN', false)
        }
      })
    },
    // 签到
    signin: ({ dispatch }, params) => {
      return new Promise(resolve => {
        signIn(params).then(res => {
          if (res.data) {
            dispatch('updateSigninInfo', params.meetingId)
          }
          resolve(res)
        })
      })
    }
  }
}
