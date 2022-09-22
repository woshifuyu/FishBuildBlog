<template>
  <div>
    <!-- THIS IS A FISH BUILD HOME PAGE -->
    <div id="app">
      <fake3d-image-effect
        fill-height-content
        tag="div"
        :image="require('../assets/wai.jpg')"
        :image-map="require('../assets/sunbackend.jpg')"
      >
        <!-- image-map="../assets/sunbackend.jpg" -->
        <div class="container">
          <h1 style="color: white">
            时间使刀，我使<span @click="fishLogin">笔</span
            >，我们互相砍杀，血和墨爱恨难分。
          </h1>
          <p class="m-5" style="margin-top: 2.2%; color: white">
            <!-- May there be enough clouds in your life to make a beautiful
            sunshine!! -->
            <!-- 人生如潭，文字似海，不过些许琢磨，当初是我，书生意气，也得千宰百割。 -->
            <span style="font-size: 20px"
              >从此，人间的你，那么遥远，梦中也扯的更疼，黄昏的我，还在旷野独行，所有的人都在，周围有无限的暮色</span
            >
          </p>
          <p style="margin-top: 2.7%; color: white; font-size: 18px">
            © 我是敷羽 &emsp;&emsp; 清晨时分
          </p>
        </div>
      </fake3d-image-effect>
      <!-- <img alt="Vue logo" src="../assets/sunstart.jpg" /> -->
    </div>

    <!-- 弹窗动画pop -->
    <popup
      title="就当我是挑着货郎担路人，到处兜售这惯见的人间，落寞的瘦雨，昨天的旧云。"
      :btn="3"
      :showModule="showModule"
      submitBtn="藏于心间"
      cancelBtn="瞒过文字"
      transition="top"
      @cancel="showModule = false"
      @submit="submit"
      themeColor="#339fcd"
    >
      <!-- FFD700 ff6600  #DAA520 #E6A23C-->
      <template v-slot:body>
        <div>
          <!-- write some thing  -->
          When you see this page , You'll find Somebody is touching fish!!!
          <!-- ......插槽绑定内容 -->
        </div>
      </template>
    </popup>
  </div>
</template>

<script scoped>
import { Fake3dImageEffect } from "@luxdamore/vue-fake3d-image-effect";
import "@luxdamore/vue-fake3d-image-effect/dist/Fake3dImageEffect.css";
import Popup from "../components/Popup.vue";
export default {
  components: { Fake3dImageEffect, Popup },
  data() {
    return {
      showModule: false,
    };
  },
  mounted() {},
  methods: {
    fishLogin() {
      //   alert("Somebody is touching fish!!!");
      // it is so boring that the function of Login !!!
      // this.$router.push("/about");
      this.showModule = true;
    },
    submit() {
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
