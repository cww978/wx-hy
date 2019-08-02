<template>
  <!-- 发言组件配合发言列表 -->
  <div class="speaker">
    <div class="speaker-title">{{ title }}</div>
    <div class="speaker-content">
      <div class="speaker-avatar">
        <mu-avatar size="32">
          <img :src="avatar" />
        </mu-avatar>
      </div>
      <div class="speaker-text">{{ text }}</div>
    </div>
    <div class="speaker-line">{{ line }}</div>
  </div>
</template>
<script>
export default {
  name: 'Speaker',
  props: ['title', 'avatar', 'text', 'line']
}
</script>
<style scoped>
.speaker {
  display: flex;
  flex-direction: column;
}
.speaker-title {
  font-size: 0.76rem;
  padding-right: 8px;
  text-align: right;
  color: #f1f1f1;
}
.speaker-content {
  padding: 0px 5px;
  display: flex;
  flex-direction: row-reverse;
}
.speaker-avatar {
  height: 32px;
  padding-left: 5px;
}
.speaker-text {
  font-size: 0.7rem;
  max-width: 70vw;
  background-color: #f1f1f1;
  padding: 2px 3px;
  border-radius: 3px;
  word-wrap: break-word;
}
.speaker-line {
  font-size: 0.6rem;
  padding-top: 2px;
  padding-right: 45px;
  color: #f1f1f1;
  text-align: right;
}
</style>
