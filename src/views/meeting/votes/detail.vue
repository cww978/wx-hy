<template>
  <div class="votes">
    <mu-appbar style="width: 100%;" color="primary">
      <mu-button icon slot="left" @click="back">
        <mu-icon value="arrow_back"></mu-icon>
      </mu-button>
      <font>参与投票</font>
    </mu-appbar>
    <div class="vote-header">
      <span class="vote-title">{{ title }}</span>
    </div>
    <vote-single v-if="isSingle == 1" :hasImg="hasImg" :list="list" v-model="emptyVote"></vote-single>
    <vote-multiple type="show" :min="minNum" :max="maxNum" :hasImg="hasImg" :list="list" v-else v-model="emptyVote"></vote-multiple>
    <div class="footer">
      <mu-button v-if="voteState == 1" color="success" disabled>
        已投票
      </mu-button>
      <mu-button v-else-if="voteState == 2" :disabled="!voteButtonSwitch" @click="sendVote" color="success">
        确定投票
      </mu-button>
      <mu-button v-else color="success" disabled>投票结束</mu-button>
    </div>
  </div>
</template>
<script>
import VoteMultiple from './components/VoteMultiple'
import VoteSingle from './components/VoteSingle'
import { getActVoteDetail, sendVote } from '@/api/meeting'
export default {
  name: 'VoteDetail',
  components: { VoteSingle, VoteMultiple },
  data() {
    return {
      voteButtonSwitch: false,
      voteState: 2, // 目前的投票状态
      isSingle: 0, // 是否是单选
      title: '',
      hasImg: false,
      maxNum: 3,
      minNum: 1,
      emptyVote: null, // 临时选择结果
      params: {
        meetingId: '',
        voteId: '',
        votingResults: ''
      },
      list: []
    }
  },
  computed: {
    meetingId() {
      return this.$store.getters['meeting/meetingId']
    }
  },
  watch: {
    emptyVote(val) {
      if (val instanceof Array && this.isSingle == 0) {
        // 投票选项数必须在范围内
        if (val.length >= this.minNum && val.length <= this.maxNum) {
          this.voteButtonSwitch = true
        } else {
          this.voteButtonSwitch = false
        }
      } else if (this.isSingle == 1) {
        if (val != '') {
          this.voteButtonSwitch = true
        } else {
          this.voteButtonSwitch = false
        }
      }
    }
  },
  mounted() {
    this.params.voteId = this.$route.qurey.id
    this.params.meetingId = this.meetingId
    // 获取投票详情
    getActVoteDetail({ id: this.$route.qurey.id }).then(res => {
      this.minNum = res.data.minNum
      this.maxNum = res.data.maxNum
      this.isSingle = res.data.ifSingle
      this.title = res.data.title
      this.list = res.data.options
    })
  },
  methods: {
    // 投票
    sendVote() {
      sendVote(this.params).then(res => {
        if (res.data) {
          this.voteState = 1
        }
      })
    },
    back() {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.vote-header {
  padding: 5px 10px;
}
.vote-header .vote-title {
  font-size: 0.85rem;
}
.footer {
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
