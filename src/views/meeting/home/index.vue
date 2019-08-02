<template>
  <div class="layout">
    <mu-appbar
      color="primary"
      style="width: 100%;background-color:transparent;box-shadow:none"
    >
      <mu-button icon slot="left">
        <mu-avatar color="indigo" size="24">
          <mu-icon value="account_circle"></mu-icon>
        </mu-avatar>
      </mu-button>
      <font>会议室</font>
    </mu-appbar>
    <div class="main">
      <meeting-content></meeting-content>
      <speake-list></speake-list>
    </div>
    <meeting-actions
      @clickInput="openInputDialog"
      @clickButton="openInteractionDialog"
    ></meeting-actions>
    <input-dialog @close="closeInputDialog" :show="inputDialog"></input-dialog>
    <interaction-dialog
      @close="closeInteractionDialog"
      :show="interactionDialog"
    ></interaction-dialog>
  </div>
</template>
<script>
import MeetingContent from './components/MeetingContent'
import SpeakeList from './components/SpeakeList'
import MeetingActions from './components/MeetingActions'
import InputDialog from './components/InputDialog'
import InteractionDialog from './components/InteractionDialog'
export default {
  name: 'Meeting',
  components: {
    MeetingContent,
    MeetingActions,
    SpeakeList,
    InputDialog,
    InteractionDialog
  },
  data() {
    return {
      inputDialog: false,
      interactionDialog: false
    }
  },
  methods: {
    openInputDialog() {
      console.log('meeting', 'open inputDialog')
      this.inputDialog = true
    },
    closeInputDialog() {
      this.inputDialog = false
    },
    closeInteractionDialog() {
      this.interactionDialog = false
    },
    openInteractionDialog() {
      console.log('meeting', 'open interactionDialog')
      this.interactionDialog = true
    }
  }
}
</script>
<style>
.layout {
  background-image: url(../../../assets/bg-signin.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  -webkit-background-origin: content-box;
  background-origin: content-box;
}
.main {
  height: calc(100vh - 107px);
  width: 100vw;
  display: flex;
  flex-direction: column;
}
</style>
