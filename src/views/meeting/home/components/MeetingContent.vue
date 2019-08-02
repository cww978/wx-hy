<template>
  <div class="meeting-content">
    <div class="meeting-title">会议标题</div>
    <div></div>
    <div class="meeting-text">
      IT之家8月1日消息
      据澎湃新闻报道，今日中午，字节跳动方面就全网搜索引擎一事作出回应，搜索产品已经上线，用户可以通过今日头条上面的搜索框进行试用。
      据介绍，全网搜索引擎是今日头条“信息创造价值”理念的延伸。
    </div>
  </div>
</template>
<script>
export default {
  name: 'MeetingContent',
  computed: {}
}
</script>
<style>
.meeting-title,
.meeting-text {
  color: #f1f1f1;
}
.meeting-title {
  padding: 3px 10px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 1rem;
}
.meeting-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6; /*显示几行*/
  overflow: hidden;
  padding: 0px 10px;
  font-size: 0.9rem;
}
</style>
