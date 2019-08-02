<!-- 发言 -->
<template>
  <div>
    <mu-dialog
      width="360"
      transition="slide-bottom"
      fullscreen
      :open.sync="dialog"
    >
      <mu-appbar color="primary" title="请发言">
        <mu-button slot="right" flat @click="close">
          关闭
        </mu-button>
      </mu-appbar>
      <div class="meeting-input">
        <mu-text-field
          v-model="params.msg"
          placeholder="....."
          multi-line
          :rows="4"
          :rows-max="15"
          underline-color="transparent"
        ></mu-text-field>
        <div class="actions">
          <mu-button
            color="success"
            @click="send"
            :disabled="params.msg === '' ? true : false"
          >
            发送
          </mu-button>
        </div>
      </div>
    </mu-dialog>
  </div>
</template>
<script>
export default {
  name: 'InputDialog',
  data() {
    return {
      params: {
        msg: '',
        type: 0,
        meetingId: ''
      },
      dialog: false
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
    send() {
      this.params.msg = ''
    }
  }
}
</script>
<style lang="scss">
.meeting-input {
  .mu-input {
    width: 100vw;
    border-radius: 5px;
    color: white;
    padding-left: 10px;
    padding-right: 10px;
  }

  .mu-input-line {
    display: none;
  }
  .actions {
    text-align: center;
  }
}
</style>
