// import { signIn, getSignInInfo } from '@/api/meeting'
// import { userInfo } from '@/api/user'
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
    },
    // 用户发言记录
    historySpeech: []
  },
  getters: {
    signin: state => state.signin,
    userName: state => state.signinInfo.name,
    userHeadImgUrl: state => state.userInfo.headImgUrl,
    historySpeech: state => state.historySpeech
  },
  mutations: {
    // 设置用户信息
    SET_USERINFO: (state, info) => {
      Object.assign(state.userInfo, info)
      state.userInfo = {
        id: state.userInfo.id,
        headImgUrl: state.userInfo.headImgUrl
      }
    },
    // 设置登录信息
    SET_SIGNININFO: (state, info) => {
      Object.assign(state.signinInfo, info)
    },
    // 添加发言记录
    ADD_HISTORYSPEECH: (state, info) => {
      state.historySpeech.push(info)
    }
  },
  actions: {
    // 获取用户的ID、头像
    getUserInfo: ({ commit }) => {
      let data = {
        id: '12',
        headImgUrl: '@/assets/headUrl.png'
      }
      commit('SET_USERINFO', data)
      return new Promise(resolve => {
        resolve()
      })
    },
    // 查询签到记录
    getSignin: ({ state }) => {
      state.signin = false
    },
    // 设置签到信息
    setSigninInfo: ({ commit }, info) => {
      commit('SET_SIGNININFO', info)
    },
    // 签到
    signin: ({ state }) => {
      state.signin = true
    },
    // 获取发言记录
    getHistorySpeech: ({ state }) => {
      state.historySpeech = []
    }
  }
}
