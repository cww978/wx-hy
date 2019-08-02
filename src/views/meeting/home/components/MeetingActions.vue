<template>
  <div class="meeting-actions">
    <div class="input">
      <div class="input-text" @click="clickInput">发言...</div>
    </div>
    <div class="actions">
      <mu-button icon color="red400" @click="clickButton">
        <mu-icon value="widgets"></mu-icon>
      </mu-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MeetingActions',
  methods: {
    clickInput() {
      this.$emit('clickInput')
    },
    clickButton() {
      this.$emit('clickButton')
    }
  }
}
</script>
<style scoped>
.meeting-actions {
  display: flex;
  height: 50px;
  padding: 0px 10px;
}
.input {
  flex-grow: 1;
  padding: 10px 10px;
}
.input-text {
  height: 30px;
  line-height: 30px;
  padding: 0px 10px;
  border-radius: 3px;
  color: #ddd;
  background-color: rgba(0, 0, 0, 0.25);
}
.actions {
  padding: 1px;
  width: 50px;
}
</style>
