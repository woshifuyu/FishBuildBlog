<template>
  <div class="count">
    <div class="stars">
      <div
        class="star"
        v-for="(item, index) in starsCount"
        :key="index"
        ref="star"
      ></div>
    </div>
    <!-- 访客统计 -->
    <nav-line />

    <div class="main">
      <div class="white1" style="width: 100%; height: 120.32px">
        <div class="titletj" style="margin-top: 8%">
          <span style="color: white; font-size: 20px"
            >一样是明月，一样是隔山灯火，满天的，只有人不见，梦似的挂起</span
          >
        </div>
      </div>
      <div class="maincontent" style="margin-left: 14%; margin-top: 2.3%">
        <el-row>
          <el-col :span="12">
            <div class="map">
              <span style="color: white; margin-left: -130%; font-size: 20px"
                >访问来源分布</span
              ><ColorMap style="margin-left: -45%; margin-top: -8%"></ColorMap>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="charts" style="margin-left: -29%">
              <div class="counttitle">
                <div style="display: inline-block">
                  <span style="color: white; font-size: 20px; margin-left: -7%"
                    >近期浏览量:
                  </span>
                </div>
                <div style="display: inline-block; margin-left: 1%">
                  <span style="color: white; font-size: 20px">10</span>
                </div>
                <div style="display: inline-block; margin-left: 5%">
                  <span style="color: white; font-size: 20px"
                    >近期IP数量:
                  </span>
                </div>
                <div style="display: inline-block; margin-left: 1%">
                  <span style="color: white; font-size: 20px">1</span>
                </div>
                <div style="display: inline-block; margin-left: 5%">
                  <span style="color: white; font-size: 20px"
                    >留言板数量:
                  </span>
                </div>
                <div style="display: inline-block; margin-left: 1%">
                  <span style="color: white; font-size: 20px">0</span>
                </div>
              </div>
              <br />
              <div class="table">
                <span
                  style="
                    color: white;
                    font-size: 20px;
                    margin-left: -38%;
                    line-height: 70px;
                  "
                  >访客行为轨迹列表
                </span>
                <VisitTable style="margin-left: 22%"></VisitTable>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <copyright style="margin-top: 2%"></copyright>
  </div>
</template>

<script src="http://pv.sohu.com/cityjson?ie=utf-8"></script>
<script>
// var cityCode=returnCitySN.cid;
// console.log(JSON.stringify(returnCitySN));
// document.write('<hr><br><h1> 老铁位置：'+JSON.stringify(returnCitySN)+'</h1>');
</script>
<script>
import NavLine from "@/components/NavLine.vue";
import Copyright from "@/components/CopyRight.vue";
import SelfIntroduce from "@/components/SelfIntroduce.vue";
import NoticeCard from "@/components/NoticeCard.vue";
import ColorMap from "./ColorMap.vue";
import VisitTable from "@/components/VisitTable.vue";
import * as sysTool from "/public/systemTool.js";
export default {
  components: {
    NavLine,
    Copyright,
    SelfIntroduce,
    NoticeCard,
    ColorMap,
    VisitTable,
  },
  data() {
    return {
      starsCount: 3000, //数量
      distance: 1000, //间距
      returnCitySN: "",
      ip: "",
      newDate: new Date(),
      screenWidth: document.body.clientWidth, // 屏幕尺寸
      screenHeight: document.body.clientHeight, // 屏幕尺寸
      // returnCitySN
    };
  },
  // 因为vue有自己的生命周期，初始化数据的时候，可以在钩子函数created()函数里初始化数据，
  // 也可以在mounted()函数里获取，但是两者是不同的，获取浏览器和屏幕分辨率的时候，
  // 不能在created()里获取，因为此时window和document都还没有生成，
  // 所以在mounted()里或者生成之通过其他触发的方法来获取
  created() {
    // this.getMachineIp(); //调用获取
    // this.getIpPlace();
    this.getip();
    this.getTool();
    // this.getScreenSize();
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
    this.getScreenSize()
  },
  methods: {
    getip() {
      // console.log("11111");
      //获取客户端ip
      const ip = localStorage.getItem("Ip");
      const cityname = localStorage.getItem("cityname");
      //在控制台打印客户端ip
      console.info("当前用户ip：" + ip + "\n" + "用户所在地为：" + cityname);
      // console.log(dateFormat(newDate));
    },
    getTool() {
      //获取用户登录设备
      this.brower = sysTool.GetCurrentBrowser(); //浏览器
      this.os = sysTool.GetOs(); //登录设备
      // console.log("浏览器，操作系统：", this.brower, this.os);
      console.log("浏览器："+this.brower+'\n'+"操作系统："+this.os);
      let padStyle = false;
      if (this.os == "Android") {
        padStyle = true;
      }
      sessionStorage.setItem("padStyle", padStyle);
    },
    getScreenSize(){
       const that = this
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.body.clientWidth
          window.screenHeight =document.body.clientHeight
          that.screenWidth = window.screenWidth
          that.screenHeight = window.screenHeight
        })()
      }
      console.log("屏幕尺寸："+document.body.clientWidth+"*"+document.body.clientHeight);
    },
    // 获取登录ip，供记录日志后端取用
    /* eslint-disable */
    //不走eslint校验
    // getMachineIp() {
    //   var Ip = returnCitySN["cip"];
    //   var cityname = returnCitySN["cname"];
    //   localStorage.setItem("Ip", Ip);
    //   localStorage.setItem("cityname", cityname);
    //从搜狐的开放的接口里读取数据
    //   let city = {};
    //   try {
    //     city = returnCitySN;
    //   } catch (e) {
    //     console.log(e);
    //     city.cip = "";
    //     city.cname = "";
    //   }
    //   console.log(111);
    //   console.log(city);
    //   localStorage.setItem("machine-ip", city.cip);
  },
  /* eslint-disable */
  // },
  // dateFormat () {
  //   	var date = new Date()
  //       var year = date.getFullYear()
  //       //  * 在日期格式中，月份是从0开始的
  //       //  * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
  //       var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
  //       var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  //       // var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  //       // var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  //       // var seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  //       // let week = date.getDay() // 星期
  //       // let weekArr = [ '星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六' ]
  //       // 拼接 时间格式处理
  //       return year + month  + day
  //   }
};
</script>

<style scoped>
.count {
  /* background-color: #efefee; */
  background-image: url(../assets/lighthouse-6785763.jpg);
  background-size: 100% 100%;
  background-attachment: fixed;
}
.count {
  width: 100%;
  /* min-width: 1200px; */
  height: 100%;
  background-color: #fff;
  /* background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%); */
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
  bottom: 35%;
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
.titletj {
  animation: titletj 5s 1;
}
@keyframes titletj {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
