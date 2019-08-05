<template>
  <div class="sign user">
    <mu-avatar size="80">
      <img src="@/assets/headUrl.png" />
    </mu-avatar>
    <div>
      <mu-text-field
        class="inputName"
        v-model="params.name"
        placeholder="姓名"
      ></mu-text-field>
      <mu-text-field
        class="inputDeptName"
        v-model="params.deptName"
        placeholder="部门"
      ></mu-text-field>
    </div>
    <!-- <div class="location">
      {{ locationText }}
    </div>-->
    <div class="action">
      <mu-button
        color="success"
        style="min-width: 120px"
        @click="signin"
        :disabled="!signButton"
      >
        签到
      </mu-button>
    </div>
  </div>
</template>
<script>
import Location from '@/utils/location'
export default {
  name: 'Signin',
  data() {
    return {
      signButton: true,
      params: {
        // 会议Id扫码获取
        meetingId: '',
        // 经度
        longitude: '',
        // 纬度
        latitude: '',
        // 姓名
        name: '',
        // 部门
        deptName: ''
      },
      locationText: '当前无位置信息'
    }
  },
  computed: {
    userHeadImgUrl() {
      return this.$store.getters['user/userHeadImgUrl']
    }
  },
  mounted() {
    // 获取坐标
    Location.getLocation().then(res => {
      console.log('signin', res)
      this.params.longitude = res.result.location.lng
      this.params.latitude = res.result.location.lat
      this.locationText = res.result.formatted_address
    })
  },
  methods: {
    signin() {
      this.signButton = false
      // 设置签到信息
      this.$store.dispatch('user/setSigninInfo', this.params)
      // 签到
      this.signButton = true
      this.$store.dispatch('user/signin')
    }
  }
}
</script>
<style>
.sign.user {
  margin: 0px auto;
  height: 55vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.sign.use .action {
  padding: 40px 10px;
}
.sign.use .inputName {
  margin-top: 10px !important;
}
.sign.use .inputDeptName {
  margin-bottom: 0px !important;
}
.sign.use .inputDeptName .mu-input-focus-line,
.inputName .mu-input-focus-line {
  display: none;
}
.sign.use .foot {
  position: absolute;
  bottom: 64px;
  width: 100vw;
  text-align: center;
}
.sign.use .location {
  color: #353535;
  font-size: 1rem;
}
</style>
