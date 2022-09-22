<template>
  <div class="Navigation" :style="style">
    <!-- <div class="icon-logo" style="margin-top: 0.7%; margin-left: 2%;display:inline-block">
      <img src="../assets/logo.jpg" alt="wsfy"  style="width:20%;vertical-align: middle;"/>
      <span style="font-size: 20px;margin-left:6%;">我是敷羽</span>
    </div> -->
    <div
      class="icon-logo"
      @click="toLogo"
      style="display: inline-block; margin-left: 2%"
    >
      <div style="margin-top: 11.5%">
        <img
          src="../assets/logo.jpg"
          style="
            width: 19%;
            height: 45%;
            vertical-align: middle;
            border-radius: 25px;
            margin-top: -5%;
          "
        /><span style="font-size: 20px; margin-left: 6%;color:white">我是敷羽</span>
      </div>
    </div>
    <!-- <div
      class="logo"
      @click="toLogo"
      style="margin-top: 0.7%; margin-left: 0.5%;"
    >
      <a style="font-size: 20px">我是敷羽</a>
    </div> -->
     <div
      class="time"
      style="margin-top: 1.2%; margin-left: 3%; width: 6%"
    >
    <el-button type="text" disabled><span style="font-size:20px;color:white">{{dateFormat(newDate)}}</span></el-button>
      <!-- <a style="font-size: 20px"><i class="el-icon-s-home" style="color:white"></i></a> -->
      <!-- el-icon-s-home -->
    </div>
    <div
      class="return"
      @click="toInnerHome"
      style="margin-top: 1.25%; margin-left: 17%; width: 5%"
    >
      <a style="font-size: 20px"><i class="el-icon-s-home" style="color:white"></i></a>
      <!-- el-icon-s-home -->
    </div>
    <div class="blogpassage" style="margin-top: 1%; margin-left: 1%; width: 5%" @click="toMain">
      <a style="font-size: 20px;color:white">博文</a>
    </div>
    <div class="leavemess" style="margin-top: 1%; margin-left: 3%" @click="toguestboard">
      <a style="font-size: 20px;color:white">留言板</a>
    </div>
    <div
      class="timeLine"
      style="margin-top: 1%; margin-left: 3%"
      @click="toDevTime"
    >
      <a style="font-size: 20px;color:white">开发时间线</a>
    </div>
    <!-- 打劫的旧时光  人间的日夜 -->
    <div class="countPeople" style="margin-top: 1%; margin-left: 3%" @click="toCount">
      <a style="font-size: 20px;color:white">访客统计</a>
    </div>
    <div class="oldTime" style="margin-top: 1%; margin-left: 3%" @click="toOldDays">
      <a style="font-size: 20px;color:white">旧时光</a>
    </div>

    <div class="toBackend" style="margin-top: 1%; margin-left: 3%">
      <a style="font-size: 20px;color:white">后台管理</a>
    </div>

    <div
      class="back"
      @click="toHome"
      style="margin-top: 1.2%; margin-left: 3%; width: 5%"
    >
      <a style="font-size: 20px"><i class="el-icon-switch-button" style="color:white"></i></a>
      <!-- el-icon-switch-button -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      style: {},
      opacity: 0,
      // 当前时间
     	newDate: new Date()
      // classList:"",
      // Navigation:{
      //   background:white,
      // }
      // navbg:{
      // 		background-color: white;
      // 	},
    };
  },
  mounted() {
    // this.change();
    window.addEventListener("scroll", this.windowScroll); //监听页面滚动
    let that = this
    this.timer = setInterval(function () {
      that.newDate = new Date().toLocaleString()
    })
  },
  // activated() {
  //   window.addEventListener("scroll", this.handleScroll);
  // },
  destroyed() {
			window.removeEventListener("scroll", this.windowScroll); //销毁滚动事件
       if (this.timer) {
      clearInterval(this.timer)
    }
		},
  methods: {
    windowScroll() {
     	let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				this.opacity = Math.abs(Math.round(scrollTop)) / 250;
				this.style = {background: `rgba(51,159,205,${this.opacity})`}
    },
    // handleScroll() {
    // 		var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    // 		// console.log(scrollTop)
    // 		if(scrollTop <= 100){
    //       console.log("111111111111");
    // 			this.Navigation.background = "white"
    // 		}else{
    // 			this.Navigation.background = "orange"
    // 		}
    // 	},
    toLogo() {
      this.$router.push("/tologo");
    },
    toInnerHome(){
      this.$router.push("/");
    },
    toHome() {
      this.$router.push("/FishBuildHome");
    },
    toMain() {
      this.$router.push("/fishbuildmain");
      //重复点击进行报错，误认为相同链接的多次点击
    },
    toCount(){
      this.$router.push("/count");
    },
    toguestboard(){
      this.$router.push("/guestboard");
    },
    toDevTime() {
      this.$router.push("/devtime");
    },
    toOldDays(){
      this.$router.push("/olddays");
    },
    // 时间格式化
    dateFormat () {
    	var date = new Date()
        var year = date.getFullYear()
        //  * 在日期格式中，月份是从0开始的
        //  * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
        var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
        var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
        var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
        var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
        var seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
        let week = date.getDay() // 星期
        let weekArr = [ '星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六' ]
        // 拼接 时间格式处理
        return year + '年' + month + '月' + day + '日 ' + hours + ':' + minutes + ':' + seconds + ' ' + weekArr[week]
    }
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
img {
  width: 60%;
  height: 60%;
  border-radius: 25px;
}

.return::before,
.icon-logo::before,
.blogpassage::before,
.leavemess::before,
.timeLine::before,
.countPeople::before,
.oldTime::before,
.toBackend::before,
.back::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  border-bottom: 2px solid #339fcd;
}
.icon-logo:hover,
.return:hover,
.blogpassage:hover,
.leavemess:hover,
.timeLine:hover,
.countPeople:hover,
.oldTime:hover,
.toBackend:hover,
.back:hover {
  /* border: 2px solid #339fcd; */
  /* background-color: #3ea5ce; */
  border-radius: 10px;
}
.icon-logo {
  width: 9%;
  height: 97%;
  /* border-radius: 5px; */
}
.Navigation {
  position: fixed;
  /* position: sticky; */
  /* display: inline-block; */
  display: flex;
  /* margin-top:-50%; */
  z-index: 9999;
  opacity: 0.9;
  width: 100%;
  height: 60px;
  /* background-color: white; */
  cursor: pointer;
  /* background-color: black; */
  /* background-color: #fcecd5;
  border: solid 1px #fcecd5; */
  padding-top: 5px;
  margin-top: 0px;
  margin: 0px;
}
</style>
