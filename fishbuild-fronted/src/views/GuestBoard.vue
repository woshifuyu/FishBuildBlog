<template>
  <div class="GuestBoard">
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
        <div class="titlely" style="margin-top: 8%">
        <span style="color: white; font-size: 20px"
          >只闻花香，不谈悲喜，饮茶颂书，不争朝夕</span
        >
      </div>
      </div>
      <div class="home" style="margin-left: 16%; margin-top: 1%;">
        <!-- <span style="margin-left:-10%;font-size:20px;color:white;box-shadow:0px -1px 6px 2px #FFFFE0">留 言 板 ：来 都 来 了，留 下 脚 印 可 好</span> -->
        <el-row style="margin-top:1%">
          <el-col :span="12">
            <Comments-tip style="width:55%"></Comments-tip>
            <!-- <notice-card style="width:55%"></notice-card> -->
          </el-col>
          <el-col :span="12">
            <Comment style="margin-top:0;width:100%;margin-left:-35%"/>
          </el-col>
        </el-row>
        <!-- <Comment  style="margin-top:5%;width:49%"/> -->
        <!-- <hr /> -->
        <!-- <div class="con" style="width:75%">
          <Reply />
        </div> -->
        <!-- <Floor :num="10"  style="width:75%"/> -->
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
import Floor from "@/components/Floor.vue";
// import Floor from "@/components/Floor.vue";
import Reply from "@/components/Reply.vue";
// import Reply from "@/components/Reply.vue";
import Comment from "@/components/Comment.vue"
// import Comment from "../components/Comment.vue"
import CommentsTip from "@/components/CommentsTip.vue";
export default {
  components: { NavLine, Copyright, SelfIntroduce, NoticeCard, Floor, Reply, Comment ,CommentsTip},
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
.GuestBoard {
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
  bottom: 30%;
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
.GuestBoard {
  /* background-color: #efefee; */
  background-image: url(../assets/lighthouse-6785763.jpg);
  background-size: 100% 100%;
  background-attachment: fixed;
}
.GuestBoard {
  background-color: #efefee;
}
.titlely {
  animation: titlely 3s 1;
}
@keyframes titlely {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
