export default {
  namespaced: true,
  state: {
    meetingInfo: {
      meetingId: '', // 会议id
      meetingTitle: '',
      meetingContent: ''
    },
    topics: [] // 话题列表
  },
  getters: {
    meetingId: state => state.meetingInfo.meetingId,
    meetingInfo: state => state.meetingInfo,
    topics: state => state.topics
  },
  mutations: {
    SET_MEETINGINFO: (state, info) => {
      Object.assign(state.meetingInfo, info)
    },
    SET_TOPICS: (state, topics) => {
      state.topics = topics
    }
  },
  actions: {
    setMeetingInfo: ({ commit }, data) => {
      commit('SET_MEETINGID', data)
    },
    getTopics: () => {
      // 获取话题的API
    }
  }
}
