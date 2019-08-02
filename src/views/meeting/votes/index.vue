<template>
  <div class="votes">
    <mu-appbar style="width: 100%;" color="primary">
      <mu-button icon slot="left" @click="back">
        <mu-icon value="arrow_back"></mu-icon>
      </mu-button>
      <font>投票列表</font>
    </mu-appbar>
    <!-- 投票列表 -->
    <mu-list class="vote-list">
      <template v-for="(item, index) in list">
        <mu-list-item
          :key="index"
          button
          :ripple="true"
          @click="navTo(item.id)"
        >
          <mu-list-item-content>
            <mu-list-item-title>{{ item.title }}</mu-list-item-title>
          </mu-list-item-content>
          <mu-list-item-action v-if="item.type == 1">
            <mu-badge content="已结束"></mu-badge>
          </mu-list-item-action>
          <mu-list-item-action v-else>
            <mu-badge content="投票中" color="primary"></mu-badge>
          </mu-list-item-action>
        </mu-list-item>
      </template>
    </mu-list>
    <div class="no-vote" v-if="list.length == 0">暂无投票</div>
  </div>
</template>
<script>
export default {
  name: 'Votes',
  data() {
    return {
      list: [
        { title: '投票1', id: 100, type: 1 },
        { title: '投票2', id: 100, type: 0 }
      ]
    }
  },
  mounted() {},
  methods: {
    back() {
      this.$router.go(-1)
    },
    navTo(id) {
      this.$router.push({
        path: '/meeting/votes/detail',
        query: { voteId: id }
      })
    }
  }
}
</script>
<style scoped>
.votes {
  width: 100vw;
  height: 100vh;
}
.no-vote {
  text-align: center;
  padding: 20px 0px;
}
.vote-list {
  background-color: #fff;
  width: 100vw;
  max-height: calc(100vh - 57px);
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
</style>
