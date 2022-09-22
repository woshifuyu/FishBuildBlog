<template>
    <div class="jianli">
      <div class="stars">
        <div
          class="star"
          v-for="(item, index) in starsCount"
          :key="index"
          ref="star"
        ></div>
      </div>
     <div class="pdf">
        <div style="width:100;height:55px;background-color:black">
            <el-button @click="back" style="margin-top:15px;margin-left:2%"> &lt; 路过的看看可以返回主页</el-button>
            <el-button  style="margin-top:5px;margin-left:6%" disabled><span style="color:black">......现阶段面试找工作中......</span></el-button>
            <el-button @click="getPdf()" style="margin-left:6%">如有需要可以导出PDF&gt;</el-button>
            </div>
            <!-- <el-button @click="back">back</el-button> -->
            </div>
        <div  id="pdfDom"><Resume style="margin-left:25%;margin-top:1%"></Resume></div>
        <div style="width:100;height:50px;background-color:black;opacity:0.6"></div>
     </div>
</template>
<script>

import Resume from '@/components/Resume.vue';
  export default {
    components:{Resume},
    data() {
      return {
        starsCount: 3000, //数量
        distance: 1000, //间距
        htmlTitle: "韦志远+web前端开发工程师",
        nowTime: "",
        
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
      back() {
        this.$router.push("/");
      },
    },
  };
  </script>
  <style scoped>
  .jianli {
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
  
  