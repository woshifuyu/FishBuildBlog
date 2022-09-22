<template>
  <div class="error-page">
    <div class="stars">
      <div
        class="star"
        v-for="(item, index) in starsCount"
        :key="index"
        ref="star"
      ></div>
    </div>
<!-- 404 -->
    <div class="tips" style="position: fixed; top: 30%; left: 25%">
      <span style="color: white; font-size: 27px"
        >是仰望星空而不脚踏实地容易让人迷失，&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <br /><br /><span style="margin-left: -5%"
          >还是脚踏实地而不仰望星空容易让人迷失？</span
        >
        <br /><br /><br /><br /><br /><span style="margin-left: -13%"
          >找到内心的答案，踏上归程吧，未来在路上~~</span
        >
        <img
          src="../assets/404/scienceandfiction-connect_99184.png"
          style="margin-right: 2%'width:35px;height:35px;vertical-align: middle;margin-top:-0.5%;margin-left:5%;cursor: pointer;"
          @click="backMain"
      /></span>
    </div>
  </div>
</template>

<script>
export default {
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
  methods: {
    backMain() {
      this.$router.push("/innerhome");
    },
  },
};
</script>
<style scoped>
.error-page {
  width: 100%;
  /* min-width: 1200px; */
  height: 713px;
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
.tips {
  animation: tips 4s 1;
}
@keyframes tips {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
>
