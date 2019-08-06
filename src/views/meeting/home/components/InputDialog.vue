<!-- 发言 -->
<template>
  <div>
    <mu-dialog width="360" transition="slide-bottom" fullscreen :open.sync="dialog">
      <mu-appbar color="primary" title="请发言">
        <mu-button slot="right" flat @click="close">关闭</mu-button>
      </mu-appbar>
      <div class="meeting-input">
        <!-- <mu-sub-header>
          话题：
          <mu-button flat color="primary" @click="addTopic">
            <font style="font-size: 0.8rem">添加话题</font>
          </mu-button>
        </mu-sub-header>
        <div class="topic-list">
          <template v-for="(item, index) in speakTopics">
            <mu-chip
              :key="index"
              class="demo-chip"
              @delete="deleteTopic"
              delete
            >
              {{ item.text }}
            </mu-chip>
          </template>
        </div> -->
        <mu-sub-header>内容：</mu-sub-header>
        <mu-text-field v-model="params.msg" placeholder="....." multi-line :rows="4" :rows-max="15" underline-color="transparent"></mu-text-field>
        <div class="actions">
          <mu-button color="success" @click="send" :disabled="params.msg === '' ? true : false">
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
  computed: {
    meetingId() {
      return this.$store.getters['meeting/meetingId']
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
    addTopic() {
      this.$router.push({ path: '/meeting/topic' })
    },
    close() {
      this.$emit('close')
    },
    send() {
      this.params.meetingId = this.meetingId
      this.$store.dispatch('speak/setParams', this.params)
      this.$store.dispatch('speak/send').then(() => {
        this.$store.dispatch('speak/getHistorySpeech')
      })
      this.params.msg = ''
    }
  }
}
</script>
<style>
.meeting-input .mu-input {
  width: 100vw;
  border-radius: 5px;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
}
.meeting-input .topic-list {
  padding: 0px 10px;
}
.meeting-input .mu-input-line {
  display: none;
}
.meeting-input .actions {
  text-align: center;
}
</style>
