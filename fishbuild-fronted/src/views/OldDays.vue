<template>
  <div class="OldDays">
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
      <div class="white1" style="width: 100%; height: 150.32px">
        <notification style="margin-top:5%"></notification>
        <div class="titlejsg" style="margin-top: 5%">
        <span style="color: white; font-size: 20px"
          >日子就是这么的庸常，却有细碎的事物，如太阳碎碎的光芒，洒落其上</span
        >
      </div>
      </div>
      <div class="maincontent" style="margin-left: 0%; margin-top: 1.3%">
        <photo></photo>
       <div class="content" style="width:100%;height:100px"></div>
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
import photo from "@/components/photo.vue";
import notification from "../components/notification.vue"
export default {
  components: { NavLine, Copyright, SelfIntroduce, NoticeCard ,photo,notification},
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
.OldDays {
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
  bottom: 0px;
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
.OldDays {
  /* background-color: #efefee; */
  background-image: url(../assets/lighthouse-6785763.jpg);
  background-size: 100% 100%;
  background-attachment: fixed;
}
.OldDays {
  background-color: #efefee;
}
.titlejsg {
  animation: titlejsg 3s 1;
}
@keyframes titlejsg {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
