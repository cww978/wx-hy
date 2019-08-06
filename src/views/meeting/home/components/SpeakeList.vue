<template>
  <div class="speakes">
    <template v-for="item in list">
      <speaker :key="item" :avatar="item.avatar" :title="item.title" :text="item.text" :line="item.time"></speaker>
    </template>
  </div>
</template>
<script>
import Speaker from './Speaker'
export default {
  name: 'SpeakeList',
  components: { Speaker },
  computed: {
    list() {
      return this.$store.getters['speak/speakList']
    }
  }
}
</script>
<style scoped>
.speakes {
  width: 100vw;
  overflow-y: scroll;
  padding: 0px 5px;
  -webkit-overflow-scrolling: touch;
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
