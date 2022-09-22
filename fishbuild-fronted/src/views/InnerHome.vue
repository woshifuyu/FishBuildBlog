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
      <div class="white1" style="width: 100%; height: 150.32px"></div>
      <div
        class="maincontent"
        style="margin-left: 30%; margin-top: 1.3%; width: 100%; height: 843px"
      >
        <div class="wenzi" style="position: fixed; left: 7%; top: 45%">
          <span style="color: white; font-size: 21px"
            >既然今天，没人识得星星一颗，&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<br />
            <br /><br /><span
              style="color: white; font-size: 21px; margin-left: 10%"
              >那么明日，何妨做皓月一轮。<br /></span
          ></span>
        </div>
      </div>
    </div>
    <!-- <copyright style="margin-top: 2%"></copyright> -->
  </div>
</template>

<script>
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
.maincontainer::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
.maincontainer::-webkit-scrollbar {
  width: 0px;    /* Chrome Safari */
  height: 0px;
}
.maincontainer {
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  overflow-x: hidden;
  overflow-y: auto;
  overflow: hidden;
}
.main {
  /* overflow-y:scroll ; */
  width: 100%;
}
.stars {
  transform: perspective(500px);
  transform-style: preserve-3d;
  position: absolute;
  perspective-origin: 50% 100%;
  left: 50%;
  animation: rotate 150s infinite linear;
  bottom: -15%;
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
.wenzi {
  animation: wenzi 4s 1;
}
@keyframes wenzi {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
