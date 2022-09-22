<template>
  <div class="tologo" id="background">
    <div class="stars">
      <div
        class="star"
        v-for="(item, index) in starsCount"
        :key="index"
        ref="star"
      ></div>
    </div>
    <nav-line></nav-line>
    <div class="white1" style="width: 100%; height: 100.32px">
      <div class="titleyj" style="margin-top: 8%">
        <span style="color: white; font-size: 20px"
          >世间所有的相遇，都是久别后的重逢，山水一程，不负遇见</span
        >
      </div>
    </div>
    <div class="main" style="width: 100%">
      <!-- <div></div> -->
      <el-row>
        <el-col :span="10">
          <div class="card" style="margin-left: 25%; margin-top: 1.3%">
            <notice-card></notice-card>
            <self-introduce style="margin-top: 4%"></self-introduce>
          </div>
        </el-col>
        <el-col :span="14">
          <div class="logocontent">
            <div class="logo">
              <div class="title" style="margin-top:1%">
                <img
                  src="../assets/logo.jpg"
                  style="
                    width: 3.8%;
                    height: 3.8%;
                    vertical-align: middle;
                    border-radius: 25px;
                  "
                /><span style="margin-left: 1.5%">我是敷羽</span>
              </div>
              <p style="font-size: 18px; margin-top: 5%">
                <img
                  src="../assets/logo/working_work_office_business_man_alone_home_icon_142242.png"
                  style="margin-right: 2%'width:25px;height:25px;vertical-align: middle;margin-top:-0.5%"
                />
                <span style="margin-left: 1%; font-size: 18px"
                  >博主：我是敷羽（微信名），00年人，青岛某科技大学软件工程本科毕业，在职程序员&ensp;&ensp;</span
                >
              </p>

              <p style="font-size: 18px; margin-top: 3%">
                <img
                  src="../assets/logo/programmer_119550.png"
                  style="margin-right: 2%'width:25px;height:25px;vertical-align: middle;margin-top:-0.5%"
                />
                <span style="margin-left: 1%; font-size: 18px"
                  >熟悉的技术有：Vue.js、ElementUI、Node.js、JavaScript、Css、Html&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</span
                >
              </p>

              <p style="font-size: 18px; margin-top: 3%">
                <img
                  src="../assets/logo/iconfinder-technologymachineelectronicdevice17-4026443_113348.png"
                  style="margin-right: 2%'width:25px;height:25px;vertical-align: middle;margin-top:-0.5%"
                />
                <span style="margin-left: 1%; font-size: 18px"
                  >兴趣：编码、夜跑，喜欢各类新鲜事物，偶尔陪陪文字，打劫一点旧时光，吓吓过往&ensp;&ensp;&ensp;&ensp;</span
                >
              </p>

              <p style="font-size: 18px; margin-top: 3%">
                <img
                  src="../assets/logo/night_cloud_weather_cloudy_sky_icon_187679.png"
                  style="margin-right: 2%'width:25px;height:25px;vertical-align: middle;margin-top:-0.5%"
                />
                <span style="margin-left: 1%; font-size: 18px"
                  >新人程序员一枚，欢迎各位大佬前来交流，微信17806273643，可友链&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</span
                >
              </p>

              <p style="font-size: 18px; margin-top: 3%">
                <img
                  src="../assets/logo/home.png"
                  style="margin-right: 2%'width:25px;height:25px;vertical-align: middle;margin-top:-0.5%"
                />
                <span style="margin-left: 0.7%; font-size: 18px"
                  >常住地址：山东省济南市天桥区洛安路<img
                    src="../assets/logo/quancheng.jpg"
                    style="
                      width: 25px;
                      height: 25px;
                      vertical-align: middle;
                      margin-top: -0.5%;
                      margin-left: 0.7%;
                    "
                  /><span style="margin-left: 0.5%">欢迎来到</span
                  ><img
                    src="../assets/logo/hehua.png"
                    style="
                      width: 27px;
                      height: 27px;
                      vertical-align: middle;
                      margin-top: -1.5%;
                      margin-left: 0.5%;
                    "
                  /><span style="margin-left: 0.5%"><a href="https://baike.baidu.com/item/%E6%B5%8E%E5%8D%97/135066" style="color:#2c3e50">美&ensp;丽&ensp;泉&ensp;城</a></span>
                  <img
                    src="../assets/logo/daminglake.jpg"
                    style="
                      width: 22px;
                      height: 22px;
                      vertical-align: middle;
                      border-radius: 20px;
                      margin-top: -1%;
                      margin-left: 1%;
                    "
                  />&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</span
                >
              </p>

              <p style="font-size: 18px; margin-top: 3%">
                <img
                  src="../assets/logo/free-30-instagram-stories-icons53_122600.png"
                  style="margin-right: 2%'width:25px;height:25px;vertical-align: middle;margin-top:-0.5%"
                />
                <span style="margin-left: 1%; font-size: 18px"
                  >天淡星稀小，残月脸边明
                  <img
                    src="../assets/logo/nightwithstars_99010.png"
                    style="
                      width: 27px;
                      height: 27px;
                      vertical-align: middle;
                      margin-top: -1.5%;
                      margin-left: 0.5%;
                    "
                  />&ensp;&ensp;&ensp;有些时间，无处着手，只好让其散养着
                  <img
                    src="../assets/logo/hourglass_icon_129385.png"
                    style="
                      width: 27px;
                      height: 27px;
                      vertical-align: middle;
                      margin-top: -1.5%;
                      margin-left: 0.5%;
                    "
                  />&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</span
                >
              </p>
            </div>
            <div class="about" style="padding: 30px">
              <div class="guanyu" style="margin-top: 2%">
                <span style="font-size: 20px">关于博客</span>
              </div>
              <p style="font-size: 18px; margin-top: 4%">
                <img
                  src="../assets/about/construction_project_plan_building_architect_design_develop-74_icon-icons.com_60249.png"
                  style="margin-right: 2%'width:25px;height:25px;vertical-align: middle;margin-top:-0.5%"
                />
                <span style="margin-left: 1%; font-size: 18px"
                  >本站纯手工编写，未使用第三方建站或流量统计工具，代码开源，初次搭建，欢迎交流&ensp;&ensp;</span
                >
              </p>

              <p style="font-size: 18px; margin-top: 3%">
                <img
                  src="../assets/about/construction_project_plan_building_architect_design_develop-84_icon-icons.com_60233.png"
                  style="margin-right: 2%'width:25px;height:25px;vertical-align: middle;margin-top:-0.5%"
                />
                <span style="margin-left: 1%; font-size: 18px"
                  >本站使用Vue.js+手写的UI组件，使用多种3D特效与动画美化修饰&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</span
                >
              </p>

              <p style="font-size: 18px; margin-top: 3%">
                <img
                  src="../assets/about/construction_project_plan_building_architect_design_develop-79_icon-icons.com_60231.png"
                  style="margin-right: 2%'width:25px;height:25px;vertical-align: middle;margin-top:-0.5%"
                />
                <span style="margin-left: 1%; font-size: 18px"
                  >本站所有设计、开发内容均由一人维护，持续优化，随时更新，欢迎建议来访&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</span
                >
              </p>

              <p style="font-size: 18px; margin-top: 3%">
                <img
                  src="../assets/about/construction_232.png"
                  style="margin-right: 2%'width:25px;height:25px;vertical-align: middle;margin-top:-0.5%"
                />
                <span style="margin-left: 1%; font-size: 18px"
                  >本站旨在将记录自己的技术成长，分享生活点滴，不忘自己来世间一趟，白留孤独&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</span
                >
              </p>

              <p style="font-size: 18px; margin-top: 3%">
                <img
                  src="../assets/about/construction_project_plan60227.png"
                  style="margin-right: 2%'width:25px;height:25px;vertical-align: middle;margin-top:-0.5%"
                />
                <span style="margin-left: 1%; font-size: 18px"
                  >一篇博客耗费时间和精力巨大，在平衡生活同时会多花时间来写，创作不易，且行珍惜&ensp;&ensp;</span
                >
              </p>

              <p style="font-size: 18px; margin-top: 3%">
                <img
                  src="../assets/about/construction_project_pla60222.png"
                  style="margin-right: 2%'width:25px;height:25px;vertical-align: middle;margin-top:-0.5%"
                />
                <span style="margin-left: 1%; font-size: 18px"
                  >“<u>《我的第一篇博客》</u>”&ensp;将会用来归纳在博客搭建中的思路以及问题处理方法，敬请拜读&ensp;</span
                >
              </p>
            </div>
            <div class="explain">
              <div class="mianze" style="margin-top: 2%">
                <span style="font-size: 20px">免责声明</span>
              </div>
              <!-- <span style="font-size: 20px">免责声明</span> -->
              <p style="font-size: 18px; margin-top: 2%">
                <img
                  src="../assets/warning/iWarning.png"
                  style="margin-right: 2%'width:25px;height:25px;vertical-align: middle;margin-top:-0.5%"
                />
                <span
                  style="margin-left: 1%; font-size: 18px; line-height: 37px"
                  >我是敷羽-以下称“本站”,根据《中华人民共和国民法典》及其他相关法律法规，除授权使用本站内容外，
                  其他一切因使用本站内容而引起的任何意外、因本站或依赖其内容进行交易所引致的损失、疏忽、诽谤或知识产权侵犯及其所造成的损失，
                  本站概不负责，亦不承担任何法律责任。&ensp;&ensp;</span
                >
              </p>
              <p style="font-size: 18px; margin-top: 2%">
                <img
                  src="../assets/warning/constructiondange.png"
                  style="margin-right: 2%'width:25px;height:25px;vertical-align: middle;margin-top:-0.5%"
                />
                <span
                  style="margin-left: 1%; font-size: 18px; line-height: 37px"
                  >本站如因系统维护或升级而需暂停服务时，将事先公告。若因线路及非本网站控制范围的硬件故障或其它因素导致暂停服务，
                  对于暂停服务期间造成的一切不便与损失，本站不负任何责任。</span
                >
              </p>
              <p style="font-size: 18px; margin-top: 2%">
                <img
                  src="../assets/warning/warning.png"
                  style="margin-right: 2%'width:24px;height:24px;vertical-align: middle;margin-top:-0.5%"
                />
                <span
                  style="margin-left: 1%; font-size: 18px; line-height: 37px"
                  >本站并不保证或声明本站之资料（不论是明示或隐含的）之准确、完整及全面性，并在此明确地卸弃一切因使用或依赖本站所提供的资料而
                  引致的任何直接、间接、附带、特别或相应而生的损失、损害、赔偿、费用、申索或要求的所有责任。本站图片，文字版权声明，
                  本网站无法鉴别所上传图片或文字的知识版权，如有侵犯，请及时通知，本网站将在第一时间及时更改或删除。</span
                >
              </p>
              <p style="font-size: 18px; margin-top: 2%">
                <img
                  src="../assets/warning/error_notice_warning_virus_icon_143435.png"
                  style="margin-right: 2%'width:25px;height:25px;vertical-align: middle;margin-top:-0.5%"
                />
                <span style="margin-left: 0%; font-size: 18px">
                 <u>本站之声明以及其修改权、更新权及最终解释权均属我是敷羽所有。</u>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</span
                >
              </p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <Copyright style="margin-top: 2%"></Copyright>
  </div>
</template>
<script>
// import NavLineVue from '@/components/NavLine.vue';
// import ball from './ball.vue'
import NavLine from "@/components/NavLine.vue";
import Copyright from "@/components/CopyRight.vue";
import SelfIntroduce from "@/components/SelfIntroduce.vue";
import NoticeCard from "@/components/NoticeCard.vue";
export default {
  components: { NavLine, Copyright, SelfIntroduce, NoticeCard },
  data() {
    return {
      starsCount: 3000, //数量
      distance: 1000, //间距
    };
  },
  mounted() {
    let starArr = this.$refs.star;
    starArr.forEach((item) => {
      var speed = 0.2 + Math.random() * 1;
      var distance = this.distance + Math.random() * 300;
      item.style.transformOrigin = `0 0 ${distance}px`;
      item.style.transform = `translate3d(0,0,-${distance}px) rotateY(${
        Math.random() * 360
      }deg) rotateX(${Math.random() * -50}deg) scale(${speed},${speed})`;
    });
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
body {
  margin: 0;
  padding: 0;
}
.tologo {
  width: 100%;
  /* min-width: 1200px; */
  height: 100%;
  background-color: #fff;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;
  /* filter: drop-shadow(0 0 10px white); */
  position: relative;
}
.stars {
  transform: perspective(500px);
  transform-style: preserve-3d;
  position: absolute;
  perspective-origin: 50% 100%;
  left: 50%;
  animation: rotate 150s infinite linear;
  bottom: 1000px;
}
.stars .star {
  width: 2px;
  height: 2px;
  background: #f7f7b8;
  position: absolute;
  top: -250px;
  left: 0;
  backface-visibility: hidden;
}
@keyframes rotate {
  0% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
  }
  100% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg)
      rotateY(-360deg);
  }
}
/* .ad-info {
    font-size: 15px;
    line-height: 24px;
    margin-top: 180px;
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
}
.dot-num {
}
.dot-num .dot {
    position: absolute;
    top: 0;
    display: inline-block;
}
.dot-num .dot .dot-title {
    font-size: 40px;
    line-height: 37px;
    font-weight: bold;
    color: #f23340;
}
.dot-num .dot .dot-describe {
    margin-top: 10px;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
} */

.tologo {
  /* background-color: #efefee; */
  background-image: url(../assets/lighthouse-6785763.jpg);
  background-size: 100% 100%;
  background-attachment: fixed;
}
.logo {
  margin-top: 1%;
  width: 776px;
  height: 367px;
  /* background-color: #fcecd5; */
  background-color: white;
  opacity: 0.6;
  margin-left: -12%;
  padding: 30px;
  /* margin: 20px; */
}
.title {
  text-align: center;
  font-size: 20px;
  margin-top: 3%;
  /* margin-top:100%; */
}
.about {
  margin-top: 2%;
  width: 776px;
  height: 397px;
  opacity: 0.6;
  /* background-color: #fcecd5; */
  background-color: white;
  margin-left: -12%;
  padding: 30px;
  /* margin: 20px; */
}
.explain {
  margin-top: 2%;
  width: 776px;
  height: 487px;
  opacity: 0.6;
  /* background-color: #fcecd5; */
  background-color: white;
  margin-left: -12%;
  padding: 30px;
  /* margin: 20px; */
}
/* .white1 { */
/* background-color: #efefee; */
/* } */
.titleyj {
  animation: titleyj 3s 1;
}
@keyframes titleyj {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
