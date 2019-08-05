<!-- 投票多选 -->
<template>
  <div class="vote-multiple">
    <div :class="[voteError == false ? 'success' : 'error', 'vote-number']">
      投票: {{ number }}/{{ max }}
    </div>
    <mu-list v-if="!hasImg">
      <template v-for="(item, index) in list">
        <mu-list-item :key="index">
          <mu-list-item-title>
            {{ item.option }}
          </mu-list-item-title>
          <mu-list-item-action>
            <mu-checkbox
              :value="item.serialNum"
              v-model="votingResults"
            ></mu-checkbox>
          </mu-list-item-action>
        </mu-list-item>
      </template>
    </mu-list>
    <div v-else class="vote-grid">
      <template v-for="(item, index) in list">
        <div class="vote-card" :key="index">
          <div class="vote-name">{{ item.option }}</div>
          <img class="vote-img" :src="item.img" />
          <div class="vote-content">
            <div class="vote-tickets" v-show="item.number != ''">
              {{ item.number }}
            </div>
            <mu-checkbox
              :value="item.serialNum"
              :ripple="false"
              v-model="votingResults"
            ></mu-checkbox>
          </div>
        </div>
      </template>
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
.vote-number {
  text-align: right;
  padding-top: 5px;
  padding-right: 20px;
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
