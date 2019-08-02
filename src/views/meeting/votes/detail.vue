<template>
  <div class="votes">
    <mu-appbar style="width: 100%;" color="primary">
      <mu-button icon slot="left" @click="back">
        <mu-icon value="arrow_back"></mu-icon>
      </mu-button>
      <font>参与投票</font>
    </mu-appbar>
    <!-- 投票列表 -->
    <div class="vote-grid">
      <mu-row>
        <template v-for="(item, index) in list">
          <mu-col span="4" :key="index">
            <vote-card
              :title="item.option"
              :number="item.optionsSerialNum"
              :checked="item.checkbox"
              v-model="item.checkbox"
              @change="change(item)"
            ></vote-card>
          </mu-col>
        </template>
      </mu-row>
    </div>
    <div class="footer">
      <mu-button color="success">确定投票</mu-button>
    </div>
  </div>
</template>
<script>
import VoteCard from './VoteCard'
export default {
  name: 'VoteDetail',
  components: { VoteCard },
  data() {
    return {
      list: [
        {
          option: 'qwed',
          serialNum: 1,
          optionsSerialNum: 123,
          checkbox: true
        },
        { option: 'sda', serialNum: 2, optionsSerialNum: 23, checkbox: false },
        { option: 'rf', serialNum: 3, optionsSerialNum: 13, checkbox: false },
        { option: 'sxc', serialNum: 4, optionsSerialNum: 3, checkbox: false },
        { option: 'azv', serialNum: 5, optionsSerialNum: 89, checkbox: false },
        { option: 'd1', serialNum: 6, optionsSerialNum: 24, checkbox: false }
      ]
    }
  },

  methods: {
    back() {
      this.$router.go(-1)
    },
    change(e) {
      console.log('vote', e)
    }
  }
}
</script>
<style scoped>
.vote-grid {
  max-height: calc(100vh - 107px);
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
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
