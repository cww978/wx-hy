<template>
  <div>
    <mu-appbar style="width: 100%;" color="primary">
      <mu-button icon slot="left" @click="back">
        <mu-icon value="arrow_back"></mu-icon>
      </mu-button>
      <font>签到</font>
    </mu-appbar>
    <mu-container>
      <mu-sub-header>{{ locationText }}</mu-sub-header>
      <mu-text-field v-model="params.name" placeholder="姓名"></mu-text-field>
      <mu-text-field v-model="params.deptName" placeholder="部门"></mu-text-field>
      <mu-button color="success" @click="send">签到</mu-button>
    </mu-container>
  </div>
</template>
<script>
import Location from '@/utils/location'
export default {
  name: 'Topic',
  data() {
    return {
      locationText: '',
      params: {
        // 签到ID
        id: '',
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
      }
    }
  },
  computed: {
    signinInfo() {
      return this.$store.getters['user/signinInfo']
    }
  },
  mounted() {
    Object.assign(this.params, this.signinInfo)
    // 获取坐标
    Location.getLocation().then(res => {
      this.params.longitude = res.result.location.lng
      this.params.latitude = res.result.location.lat
      this.locationText = res.result.formatted_address
    })
  },
  methods: {
    send() {
      this.$store.dispatch('user/signin', this.params)
    },
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
