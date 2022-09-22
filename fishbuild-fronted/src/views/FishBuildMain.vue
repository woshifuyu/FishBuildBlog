<template>
  <div class="maincontainer">
    <div class="stars">
      <div
        class="star"
        v-for="(item, index) in starsCount"
        :key="index"
        ref="star"
      ></div>
    </div>
    <nav-line />
    <div class="main">
      <div class="white1" style="width: 100%; height: 100.32px">
        <div class="titlebw" style="margin-top: 8%">
          <span style="color: white; font-size: 20px"
            >我本是槐花院落闲散的人，满襟酒气，小池塘边跌坐看鱼，眉挑烟火过一生</span
          >
        </div>
      </div>
      <div class="maincontent" style="margin-left: 5%; margin-top: 1.3%">
        <el-row>
          <el-col :span="10">
            <div>
              <!-- <notice-card></notice-card> -->
              <!-- <self-introduce style="margin-top:4%"></self-introduce> -->
              <hotArc style="width: 55%; margin-top: 0%"></hotArc>
              <TagCard style="margin-top: 4%; width: 55%"></TagCard>
              <!-- <self-introduce style="margin-top: 4%;width:60%"></self-introduce> -->
            </div>
          </el-col>
          <el-col :span="14" style="margin-left: -2%">
            <!-- 
  首页内容区
 -->
            <div class="articles" style="height: 100%; margin-top: 0%">
              <div class="firstArcticles">
                <el-row>
                  <el-col :span="24">
                    <div
                      style="
                        background-color: white;
                        opacity: 0.6;
                        margin-left: -25%;
                        width: 80%;
                        cursor: pointer;
                      "
                    >
                      <el-row>
                        <el-col :span="12">
                          <div style="margin-left: -30%; height: 150px">
                            <img
                              src="../assets/lighthouse-6785763.jpg"
                              style="
                                width: 160px;
                                height: 108px;
                                border-radius: 0%;
                                margin-top: 5%;
                              "
                            />
                          </div>
                        </el-col>
                        <el-col :span="12">
                          <div
                            class="charity"
                            style="margin-top: 4%; margin-left: -30%"
                          >
                            <span style="font-size: 20px; line-height: 50px"
                              >我的第一篇博客----博客搭建之路&nbsp;&nbsp;&nbsp;
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                            >
                            <!-- <br /> -->
                            <br />
                            <span
                              ><b
                                >记录一下博客从"0"到"1"的过程&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b
                              >
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                            >
                            <br />
                            <div
                              style="
                                width: 20px;
                                height: 20px;
                                display: inline-block;
                                margin-top: 5%;
                                margin-left: -35%;
                              "
                            >
                              <img
                                src="../assets/article/store-tag_107534.png"
                                alt="tags"
                                style="
                                  width: 100%;
                                  height: 100%;
                                  vertical-align: middle;
                                  margin-top: -10%;
                                "
                              />
                            </div>
                            <span style="font-size: 15px">技术分享</span>
                            <div
                              style="
                                width: 15px;
                                height: 15px;
                                display: inline-block;
                                margin-left: 8%;
                              "
                            >
                              <img
                                src="../assets/article/calendar_time.png"
                                alt="tags"
                                style="
                                  width: 100%;
                                  height: 100%;
                                  vertical-align: middle;
                                  margin-top: -40%;
                                "
                              />
                            </div>
                            <span style="font-size: 15px; margin-left: 1%"
                              >2022-08-30</span
                            >
                            <div
                              style="
                                width: 20px;
                                height: 20px;
                                display: inline-block;
                                margin-left: 8%;
                              "
                            >
                              <img
                                src="../assets/article/vision_view_eye_icon_153887.png"
                                alt="tags"
                                style="
                                  width: 100%;
                                  height: 100%;
                                  vertical-align: middle;
                                  margin-top: -20%;
                                "
                              />
                            </div>
                            <span style="font-size: 15px; margin-left: 1%"
                              >3</span
                            >
                            <!-- <div style="width:30px;height:30px;display:inline-block">
                                <img src="../assets/article/store-tag_107534.png" 
                                alt="tags"
                                style="width:100%;height:100%;vertical-align: middle;" />
                              </div>
                              <span>技术分享</span> -->
                          </div>
                          
                        </el-col>
                        
                      </el-row>
                    </div>
                    <div style="width:80%;height:150px;background-color:white;margin-left:-25%;margin-top:2%;opacity: 0.6;
                    ">
                    <div style="width:100%;height:50px"></div>
                    <div style="display:inline-block;vertical-align: top;">
                      <img src="../assets/article/dong_hua_feng_jing-feng_jing_hua-yi_shu-cheng_shi_jing_guan-hui_hua-500x.jpg" 
                      alt="ku"  style="width:160px;height:108px;margin-top:-17%;margin-left:-50%">
                    </div>
                      <div style="display:inline-block;margin-top:-40px">
                      <span style="font-size:20px;line-height:50px">面试的日子又开始了，无聊而又枯燥 ~ ~&nbsp;</span><br />
                      <span style="margin-left:-9%"><b>致敬2022 " 那些 " 让我后悔的决定</b></span><span @click="resume" style="cursor:pointer"><b>( 简历自取 )</b></span><br />
                      <!-- <span @click="resume" style="font-size:20px;">简历</span><br /> -->
                      <div
                              style="
                                width: 20px;
                                height: 20px;
                                display: inline-block;
                                margin-top: 7%;
                                margin-left: -19%;
                              "
                            >
                              <img
                                src="../assets/article/store-tag_107534.png"
                                alt="tags"
                                style="
                                  width: 100%;
                                  height: 100%;
                                  vertical-align: middle;
                                  margin-top: -10%;
                                "
                              />
                            </div>
                            <span style="font-size: 15px">技术分享</span>
                            <div
                              style="
                                width: 15px;
                                height: 15px;
                                display: inline-block;
                                margin-left: 10%;
                              "
                            >
                              <img
                                src="../assets/article/calendar_time.png"
                                alt="tags"
                                style="
                                  width: 100%;
                                  height: 100%;
                                  vertical-align: middle;
                                  margin-top: -40%;
                                "
                              />
                            </div>
                            <span style="font-size: 15px; margin-left: 1%"
                              >2022-09-02</span
                            >
                            <div
                              style="
                                width: 20px;
                                height: 20px;
                                display: inline-block;
                                margin-left: 12%;
                              "
                            >
                              <img
                                src="../assets/article/vision_view_eye_icon_153887.png"
                                alt="tags"
                                style="
                                  width: 100%;
                                  height: 100%;
                                  vertical-align: middle;
                                  margin-top: -20%;
                                "
                              />
                            </div>
                            <span style="font-size: 15px; margin-left: 1%"
                              >0</span
                            >
                            <!-- <div style="width:30px;height:30px;display:inline-block">
                                <img src="../assets/article/store-tag_107534.png" 
                                alt="tags"
                                style="width:100%;height:100%;vertical-align: middle;" />
                              </div>
                              <span>技术分享</span> -->
                          
                      <!-- <span @click="resume" style="font-size:20px;">简历</span><br /> -->
                      <!-- <span  style="font-size:20px;">简历</span> -->
                      </div>
                      </div>
                  </el-col>
                  <el-col :span="1" style="margin-left: -41%">
                    <div
                      style="
                        width: 800%;
                        height: 270px;
                        background-color: white;
                        opacity: 0.6;
                      "
                    >
                      <Calendar style="width: 0.5%; height: 0.5%"></Calendar>
                    </div>
                    <!-- <div
                      style="
                        width: 800%;
                        height: 300px;
                        background-color: white;
                        opacity: 0.6;
                        margin-top: 50%;
                      "
                    >
                      留言精选
                    </div> -->
                    <div
                      style="
                        width: 800%;
                        height: 300px;
                        background-color: white;
                        opacity: 0.6;
                        margin-top: 70%;
                      "
                    >
                    <div style="width:100%;height:20px"></div>
                    <span style="font-size:19px">常&nbsp;用&nbsp;链&nbsp;接</span>
                      <Links></Links>
                    </div>
                    <div
                      style="
                        width: 800%;
                        height: 300px;
                        background-color: white;
                        opacity: 0.6;
                        margin-top: 70%;
                      "
                    >
                    <div style="width:100%;height:20px"></div>
                    <span style="font-size:19px">留&nbsp;言&nbsp;精&nbsp;选</span>
                      <!-- <Links></Links> -->
                      <SpComment style="margin-top:5%"></SpComment>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <copyright style="margin-top: 2%"></copyright>
  </div>
</template>

<script>
import NavLine from "@/components/NavLine.vue";
import Copyright from "@/components/CopyRight.vue";
import SelfIntroduce from "@/components/SelfIntroduce.vue";
import NoticeCard from "@/components/NoticeCard.vue";
import hotArc from "@/components/hotArc.vue";
import TagCard from "@/components/TagCard.vue";
import Calendar from "@/components/Calendar.vue";
import Links from "@/components/Links.vue";
import SpComment from "@/components/SpComment.vue"
export default {
  components: {
    NavLine,
    Copyright,
    SelfIntroduce,
    NoticeCard,
    hotArc,
    TagCard,
    Calendar,
    Links,
    SpComment
  },
  data() {
    return {
      starsCount: 3000, //数量
      distance: 1000, //间距
    };
  },
  methods:{
    resume(){
      this.$router.push("/resume");
    }
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
.maincontainer {
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
  bottom: 36%;
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
.maincontainer {
  /* background-color: #efefee; */
  background-image: url(../assets/lighthouse-6785763.jpg);
  background-size: 100% 100%;
  background-attachment: fixed;
}
.maincontainer {
  background-color: #efefee;
}
.titlebw {
  animation: titlebw 3s 1;
}
@keyframes titlebw {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
