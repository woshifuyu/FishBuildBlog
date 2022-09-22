<template>
  <div class="hotArc">
    <!-- <div class="noticeTitle" style="padding:35px"> -->
      <el-row>
        <el-col style="margin-left:-3.5%;margin-top:-0.5%">
          <div class="heart"><span style=""></span></div>
        </el-col>
        <el-col style="margin-top:-1%">
          <span style="font-size:20px;">博&nbsp;文&nbsp;推&nbsp;荐</span>
        </el-col>
      </el-row>
      <!-- <div class="heart"></div> -->
    <!-- <span style="font-size:20px;">公&nbsp;&nbsp;告</span></div> -->
    <div class="content" style="padding:17.3px;margin-top:0%">
    <!-- <p style="line-height:32px;font-size:17.5px"><img
                src="../assets/notice/announcement_78371.png"
                style="margin-right: 2%'width:25px;height:25px;vertical-align: middle;margin-top:-0.5%"
              />&nbsp;&nbsp;网站纯手工搭建，如有建议欢迎通过留言板交流（也可社交软件），目前文章不多，作者仍在努力，欢迎关注&nbsp;&nbsp;&nbsp;&nbsp;</p>
    <p style="margin-top:1.5%;line-height:32px;font-size:17.5px"><img
                src="../assets/notice/presentation_software_19674.png"
                style="margin-right: 2%'width:25px;height:25px;vertical-align: middle;margin-top:-0.5%"
              />&nbsp;本网站代码开源，跪求您的GitHub一赞，谢谢您对网站开发者的支持！！</p> -->
    <p style="margin-top:2.5%;line-height:33px;font-size:17.5px"><img
                src="../assets/hotArc/trophy_cup_first_winner_champion_icon_151773.png"
                style="margin-right: 2%'width:25px;height:25px;vertical-align: middle;margin-top:-0.5%"
              />&nbsp;&nbsp;我的第一篇博客----博客搭建之路&nbsp;&nbsp;
    </p>
    <p style="margin-top:2.5%;line-height:33px;font-size:17.5px"><img
                src="../assets/hotArc/trophy_cup_second_award_icon_151772.png"
                style="margin-right: 2%'width:25px;height:25px;vertical-align: middle;margin-top:-0.5%"
              />&nbsp;&nbsp;面试的日子又开始了，&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;无聊而又枯燥 ~ ~&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;
    </p>
    <p style="margin-top:-10.5%;line-height:33px;font-size:17.5px"><img
                src="../assets/hotArc/trophy_third_award_icon_151760.png"
                style="margin-right: 2%'width:25px;height:25px;vertical-align: middle;margin-top:-0.5%"
              />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .hotArc {
      position: sticky;
      width: 70%;
      opacity: 0.6;
      height: 300px;
      /* padding:25px; */
      background-color: white;
      cursor: pointer;
      /* background-color: #339fcd; */
    }
    .heart {
          width: 25px;
          height: 25px;
          position: relative;
          background-color: green;
          transform: rotate(45deg);
        }
        .heart::before,
        .heart::after {
          position: absolute;
          content: '©';
          background-color: #339fcd;
          top: 0px;
          left: -50%;
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
    
        .heart::after {
          left: 0;
          top: -50%;
        }
    
    </style>
    