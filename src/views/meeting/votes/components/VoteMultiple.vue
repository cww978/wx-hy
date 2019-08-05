<!-- 投票多选 -->
<template>
  <div class="vote-multiple">
    <div
      v-if="type === 'action'"
      :class="[voteError == false ? 'success' : 'error', 'vote-number']"
    >
      投票: {{ number }}/{{ max }}
    </div>
    <div v-else-if="type === 'show'" class="vote-number">
      总票数: {{ allTicket }}
    </div>
    <mu-list v-if="!hasImg" style="background-color: #f9edde;padding: 0px;">
      <template v-for="(item, index) in list">
        <mu-list-item :key="index" style="border-bottom: 1px #fff solid;">
          <mu-list-item-title>
            {{ item.option }}
          </mu-list-item-title>
          <mu-list-item-action v-if="type === 'action'">
            <mu-checkbox
              :value="item.serialNum"
              v-model="votingResults"
            ></mu-checkbox>
          </mu-list-item-action>
          <div
            class="chart-line"
            :style="`width:${(item.optionsSerialNum * 100) / allTicket}%`"
            v-else-if="type === 'show'"
          ></div>
          <mu-list-item-action v-if="type === 'show'">
            {{ item.optionsSerialNum }}
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
                <mu-checkbox
                  v-if="type === 'action'"
                  :value="item.serialNum"
                  :ripple="false"
                  v-model="votingResults"
                ></mu-checkbox>
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
  name: 'VoteMultiple',
  data() {
    return {
      votingResults: []
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
    min: {
      type: [String, Number],
      default: 1
    },
    max: {
      type: [String, Number],
      default: 3
    },
    value: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    allTicket() {
      let num = 0
      for (let item of this.list) {
        num += item.optionsSerialNum
      }
      return num
    },
    number() {
      return this.votingResults.length
    },
    voteError() {
      if (
        this.votingResults.length >= this.min &&
        this.votingResults.length <= this.max
      ) {
        return false
      } else {
        return true
      }
    }
  },
  watch: {
    votingResults(val) {
      this.$emit('input', val)
    }
  },
  methods: {
    check() {
      if (this.number >= this.max) {
        return false
      }
    }
  }
}
</script>
<style scoped>
.chart-line {
  position: absolute;
  text-align: right;
  left: 0px;
  height: 48px;
  background-color: rgba(255, 111, 111, 0.5);
}
.vote-number {
  text-align: right;
  padding: 5px 20px 5px 0px;
  font-size: 0.8rem;
}
.vote-number.error {
  color: red;
}
.vote-number.success {
  color: yellowgreen;
}
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
  flex-direction: column;
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
