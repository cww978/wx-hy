<template>
  <div class="user">
    <div class="title">{{ userName }}</div>
    <mu-avatar size="80">
      <img src="@/assets/headUrl.png" />
    </mu-avatar>
    <div class="action">
      <mu-button color="primary" style="min-width: 120px" @click="into" :disabled="!intoButton">
        进入会议
      </mu-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Signin',
  data() {
    return {
      intoButton: true,
      locationText: ''
    }
  },
  computed: {
    userName() {
      return this.$store.getters['user/userName']
    },
    userHeadImgUrl() {
      return this.$store.getters['user/userHeadImgUrl']
    }
  },
  methods: {
    into() {
      this.intoButton = false
      this.$router.push({ path: '/meeting' })
    }
  }
}
</script>
<style scoped>
.user {
  margin: 0px auto;
  height: 55vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.title {
  margin-bottom: 20px;
  min-width: 100px;
  min-height: 30px;
  padding: 2px 5px;
  font-size: 0.9rem;
  line-height: 30px;
  color: aliceblue;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}
.action {
  padding: 40px 10px;
}
</style>
