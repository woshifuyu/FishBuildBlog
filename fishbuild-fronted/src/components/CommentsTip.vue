<template>
  <div class="notice">
    <div class="noticeTitle" style="padding: 30px">
      <el-row>
        <el-col :span="7">
          <div class="nail" style="margin-left: -36%; margin-top: -66%"></div>
        </el-col>
        <el-col :span="17" style="margin-left: -10%; margin-top: -3%">
          <span style="font-size: 20px">留言板发布友情提示</span>
        </el-col>
      </el-row>
      <!-- <div class="nail" style="margin-left:-5%;margin-top:-7%"></div> -->
      <!-- <span style="font-size:20px;">公&nbsp;&nbsp;告</span> -->
    </div>
    <div class="content" style="padding: 17.3px; margin-top: -13%">
      <p style="line-height: 32px; font-size: 17.5px">
        <img
          src="../assets/tips/valentine-day04_114894.png"
          style="margin-right: 2%;margin-left:-1.6%;width:25px;height:25px;vertical-align: middle;margin-top:-0.5%"
        />欢迎来到留言板交流，本站留言秉持自由开放原则，留言功能不对访客设限，同时本站鼓励访客积极发言，将意见建议及时反馈本站，本站收到消息会及时回复
        最后，再次感谢各位光临本站！&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </p>
      <p style="margin-top: 1.5%; line-height: 32px; font-size: 17.5px">
        <img
          src="../assets/tips/1492692367-6email_83538.png"
          style="margin-right: 2%;margin-left:-1.6%;width:25px;height:25px;vertical-align: middle;margin-top:-0.5%"
        />本站尊重言论自由，但<u>禁止交流与社会主义核心价值观相悖或违背法律条规条款的话题</u>，详情请自行搜索法律条文规定
      </p>
      <p style="margin-top: 1.5%; line-height: 32px; font-size: 17.5px">
        <img
          src="../assets/tips/alarm_alert_internet_light_security_siren_warning_icon_127093.png"
          style="margin-right:1%;margin-left:-1.6%;width:25px;height:25px;vertical-align: middle;margin-top:-0.5%"
        />为维护留言区有一个舒适留言环境，<u>本站留言板暂处于关闭</u>，仅供个人测试娱乐，待上线留言审核功能再行开放，开放时间另行通知，敬请期待
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.notice {
  position: sticky;
  width: 70%;
  opacity: 0.6;
  height:500px;
  /* padding:25px; */
  background-color: white;
  cursor: pointer;
  /* background-color: #339fcd; */
}
/*使用before伪元素画圆*/
.nail:before {
  display: block;
  content: "Tips";
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #339fcd;
  color: white;
  font-weight: bold;
  text-align: center;
  line-height: 50px;
}
/*使用after伪元素画三角*/
.nail:after {
  display: block;
  content: "";
  width: 0;
  height: 0;
  border: 25px solid transparent;
  border-top: 50px solid #339fcd;
  margin-top: -20px;
}
.nail {
  -ms-transform: rotate(-45deg); /* IE 9 */
  -webkit-transform: rotate(-45deg); /* Safari and Chrome */
  transform: rotate(-30deg);
}
</style>
