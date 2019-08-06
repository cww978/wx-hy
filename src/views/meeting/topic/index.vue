<template>
  <div>
    <mu-appbar style="width: 100%;" color="primary">
      <mu-button icon slot="left" @click="back">
        <mu-icon value="arrow_back"></mu-icon>
      </mu-button>
      <font>选择话题</font>
    </mu-appbar>
    <mu-list class="topics">
      <template v-for="(item, index) in topics">
        <mu-list-item :key="index" button :ripple="true">
          <mu-list-item-title>
            {{ item.text }}
          </mu-list-item-title>
        </mu-list-item>
      </template>
    </mu-list>
  </div>
</template>
<script>
export default {
  name: 'Topic',
  computed: {
    topics() {
      return this.$store.getters['meeting/topics']
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.topics {
  height: calc(100vh - 57px);
  -webkit-overflow-scrolling: touch;
}
</style>
