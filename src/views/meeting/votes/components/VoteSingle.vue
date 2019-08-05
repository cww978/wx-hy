<!-- 投票多选 -->
<template>
  <div class="vote-multiple">
    <mu-list v-if="!hasImg">
      <template v-for="(item, index) in list">
        <mu-list-item :key="index">
          <mu-list-item-title>
            {{ item.option }}
          </mu-list-item-title>
          <mu-list-item-action v-if="type === 'action'">
            <mu-radio
              v-model="votingResults"
              :value="item.serialNum"
            ></mu-radio>
          </mu-list-item-action>
        </mu-list-item>
      </template>
    </mu-list>
    <div v-else class="vote-grid">
      <mu-row>
        <template v-for="(item, index) in list">
          <mu-col span="4" :key="index">
            <div class="vote-card" :key="index">
              <div class="vote-name">{{ item.option }}</div>
              <img class="vote-img" :src="item.img" />
              <div class="vote-content">
                <div class="vote-tickets" v-show="item.optionsSerialNum != ''">
                  {{ item.optionsSerialNum }}
                </div>
                <mu-radio
                  v-if="type === 'action'"
                  v-model="votingResults"
                  :value="item.serialNum"
                ></mu-radio>
              </div>
            </div>
          </mu-col>
        </template>
      </mu-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VoteSingle',
  data() {
    return {
      votingResults: ''
    }
  },
  props: {
    type: {
      type: String,
      default: 'action'
    },
    hasImg: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default() {
        return []
      }
    },
    value: {
      type: [String, Number],
      default: ''
    }
  },
  watch: {
    votingResults(val) {
      this.$emit('input', val)
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
.vote-card {
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 10px 5px;
}
.vote-img {
  width: 100%;
}
.vote-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 5px 10px;
  align-items: center;
}
.vote-name,
.vote-tickets {
  font-size: 0.8rem;
  text-align: center;
}
</style>
