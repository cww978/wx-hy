<template>
  <div class="votes">
    <mu-appbar style="width: 100%;" color="primary">
      <mu-button icon slot="left" @click="back">
        <mu-icon value="arrow_back"></mu-icon>
      </mu-button>
      <font>参与投票</font>
    </mu-appbar>
    <vote-single
      :hasImg="hasImg"
      :list="list"
      v-model="emptyVote"
      v-if="isSingle == 1"
    ></vote-single>
    <vote-multiple
      :hasImg="hasImg"
      :list="list"
      v-else
      v-model="emptyVote"
    ></vote-multiple>
    <div class="footer">
      <mu-button v-if="voteState == 1" color="success" disabled>
        已投票
      </mu-button>
      <mu-button
        v-else-if="voteState == 2"
        :disabled="!voteButtonSwitch"
        color="success"
      >
        确定投票
      </mu-button>
      <mu-button v-else color="success" disabled>投票结束</mu-button>
    </div>
  </div>
</template>
<script>
import VoteMultiple from './components/VoteMultiple'
import VoteSingle from './components/VoteSingle'
export default {
  name: 'VoteDetail',
  components: { VoteSingle, VoteMultiple },
  data() {
    return {
      voteButtonSwitch: false,
      voteState: 2, // 目前的投票状态
      isSingle: 0, // 是否是单选
      title: '投票标题1',
      hasImg: false,
      maxNum: 0,
      minNum: 1,
      number: 0, // 目前投票了多少票
      emptyVote: null, // 临时选择结果
      params: {
        meetingId: '',
        voteId: '',
        votingResults: ''
      },
      list: [
        {
          option: 'qwed',
          serialNum: 1,
          checkbox: false
        },
        { option: 'sda', serialNum: 2, checkbox: false },
        { option: 'rf', serialNum: 3, checkbox: false },
        { option: 'sxc', serialNum: 4, checkbox: false },
        { option: 'azv', serialNum: 5, checkbox: false },
        { option: 'd1', serialNum: 6, checkbox: false }
      ]
    }
  },
  watch: {
    emptyVote(val) {
      if (val instanceof Array && this.isSingle == 0) {
        if (val.length >= this.minNum) {
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
  methods: {
    getVotedNumber() {
      let num = this.votedList.length
      return num
    },
    // 获取投票
    getVotedString() {
      return this.votedList.join(',')
    },
    back() {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.footer {
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
