import { saveMeetingMsg } from '@/api/meeting'
export default {
  namespaced: true,
  state: {
    params: {
      meetingId: '', // 会议id
      msg: '',
      type: '',
      topics: '' // 话题
    },
    speakList: [] // 历史发言列表
  },
  getters: {
    params: state => state.params,
    topics: state => state.params.topics,
    speakList: state => state.speakList
  },
  mutations: {
    SET_PARAMS: (state, info) => {
      Object.assign(state.params, info)
    },
    SET_TOPICS: (state, topics) => {
      state.topics = [...topics]
    },
    ADD_TOPIC: (state, topic) => {
      state.topics.push(topic)
    },
    DELETE_TOPIC: (state, index) => {
      state.topics.splice(index, 1)
    },
    SET_SPEAKLIST: (state, list) => {
      state.speakList = [...list]
    },
    ADD_SPEAKLIST: (state, speak) => {
      state.speakList.push(speak)
    }
  },
  actions: {
    setParams: ({ commit }, data) => {
      commit('SET_PARAMS', data)
    },
    // 获取发言记录
    getHistorySpeech: ({ commit }) => {
      commit('SET_SPEAKLIST', [])
    },
    addTopic: ({ commit, state }, topic) => {
      let has = false
      for (let t of state.topics) {
        if (t.id == topic.id) {
          has = true
        }
      }
      if (!has) {
        commit('ADD_TOPIC', topic)
      }
    },
    send: ({ state }) => {
      return new Promise((resolve, error) => {
        saveMeetingMsg(state.params).then(res => {
          if (res.data) {
            resolve()
          } else {
            error()
          }
        })
      })
    },
    deleteTopic: ({ commit, state }, topic) => {
      for (let i = 0; i < state.topics.length; i++) {
        if (state.topics[i].id == topic.id) {
          commit('DELETE_TOPIC', i)
        }
      }
    }
  }
}
