<template>
  <div class="main">
    <transition mode="out-in">
      <component :is="view"></component>
    </transition>
  </div>
</template>
<script>
import Into from './components/Into'
import Sign from './components/Sign'
export default {
  name: 'Signin',
  components: { Into, Sign },
  data() {
    return {
      view: 'Sign'
    }
  },
  watch: {
    isSignin(val) {
      if (val === false) {
        this.view = 'Sign'
      } else {
        this.view = 'Into'
      }
    }
  },
  computed: {
    isSignin() {
      return this.$store.getters['user/signin']
    }
  },
  mounted() {
    // 获取用户信息
    this.$store.dispatch('user/getUserInfo').then(() => {
      // 获取签到信息
      this.$store.dispatch('user/getSignin')
    })
  }
}
</script>
<style scoped>
.main {
  height: 100vh;
  width: 100vw;
  background-image: url(../../assets/bg-signin.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  -webkit-background-origin: content-box;
  background-origin: content-box;
  display: flex;
  justify-items: center;
  align-items: center;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(-50vh);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.8s;
}
</style>
