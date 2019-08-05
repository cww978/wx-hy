<template>
  <div class="vote-card">
    <div class="vote-name">{{ title }}</div>
    <img class="vote-img" src="../../../../assets/headUrl.png" />
    <div class="vote-content">
      <div class="vote-num">{{ number }}</div>

      <mu-checkbox
        :ripple="false"
        v-model="checkbox"
        color="red"
        @change="change()"
        uncheck-icon="favorite_border"
        checked-icon="favorite"
      ></mu-checkbox>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VoteCard',
  data() {
    return {
      checkbox: false
    }
  },
  props: ['title', 'number', 'value', 'checked'],
  watch: {
    checked(val) {
      this.checkbox = val
    }
  },
  mounted() {
    this.checkbox = this.checked || false
  },
  methods: {
    change() {
      this.$emit('input', this.checkbox)
      this.$emit('change')
    }
  }
}
</script>
<style scoped>
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
  justify-content: space-between;
  padding: 5px 10px;
  align-items: center;
}
.vote-name,
.vote-num {
  font-size: 0.8rem;
  text-align: center;
}
.vote-num::after {
  content: '票';
}
</style>
