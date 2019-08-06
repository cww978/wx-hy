<template>
  <mu-dialog dialog-class="interaction-dialog" scrollable width="360" :open.sync="dialog" @close="close">
    <mu-sub-header>互动</mu-sub-header>
    <mu-row>
      <template v-for="(item, index) in list">
        <mu-col v-if="item.show" span="4" :key="index">
          <mu-ripple @click="navTo(item.path)"></mu-ripple>
          <mu-flex :z-depth="1" class="menu-cell" direction="column" align-items="center">
            <mu-icon class="menu-icon" :color="item.iconColor" :value="item.icon" size="30"></mu-icon>
            <div class="menu-title">{{ item.title }}</div>
          </mu-flex>
        </mu-col>
      </template>
    </mu-row>
  </mu-dialog>
</template>
<script>
export default {
  name: 'InteractionDialog',
  data() {
    return {
      dialog: false,
      list: [
        {
          icon: 'thumb_up_alt',
          iconColor: 'blue',
          title: '投票',
          name: 'Votes',
          show: true,
          path: '/meeting/votes'
        },
        {
          icon: 'location_on',
          iconColor: 'orange',
          title: '签到',
          name: 'SignLocation',
          show: true,
          path: '/meeting/signLocation'
        }
      ]
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    show(val) {
      this.dialog = val
    }
  },
  mounted() {
    this.dialog = this.show
  },
  methods: {
    close() {
      this.$emit('close')
    },
    navTo(e) {
      this.$router.push({ path: e })
    }
  }
}
</script>
<style>
.interaction-dialog {
  min-height: 150px;
}
.interaction-dialog .mu-dialog-body {
  padding: 10px 10px;
}
.interaction-dialog .menu-cell {
  padding: 10px 0px;
}
.interaction-dialog .menu-title {
  padding: 5px 0px 0px 0px;
  font-size: 0.6rem;
}
</style>
