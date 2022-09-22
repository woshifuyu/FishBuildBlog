<template>
  <div>
     <header role="banner">
  <!-- <h1>网站发展历史纪实:</h1> -->
</header>

<div class="v-timeline" style="width:60%;margin-left:20%" aria-live="polite">
  <ol class="v-timeline--items">
    <li class="v-timeline--item" style="">
      <div aria-hidden="true" class="v-timeline--bullet -pulsar" style="margin-left:-2.1%;display:inline-block;margin-top:-2.2%">
        <svg viewBox="0 0 30 30" focusable="false"><circle stroke="none" cx="20" cy="20" r="10" style=""></circle></svg>
      </div>
      <h2 style="margin-top:-18%"><span class="v-timeline--accent" >当前时间线: </span><span style="color: whit; font-size: 20px;line-height:40px">网站搭建中</span></h2>
      <p style="color:whit;font-size:20px;margin-top:-2%">已完成：我是敷羽、 主页 、404页面、  导航栏、 导航卡、 公告栏、 版权栏、 关闭/开始页面
                          <br />未完成：博文、 留言板、 开发时间线、 访客统计、 旧时光、 后台管理&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&nbsp;</p>
      <p style="color:whit;font-size:20px">
         网站尚在搭建中......&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
      </p>
      <p style="color:whit; font-size: 20px">时间：2022年8月24日</p>
    </li>
    <li class="v-timeline--item">
      <span aria-hidden="true" class="v-timeline--bullet -old" style="margin-left:-3.3%;margin-top:-3%">
        <svg viewBox="0 0 50 50" focusable="false"><circle stroke="none" cx="20" cy="20" r="10"></circle></svg>
      </span>
       <h2 style="margin-top:-18%"><span class="v-timeline--accent" >计划时间线: </span><span style="color: whit; font-size: 20px;line-height:40px">搭建完成&ensp;&ensp;</span></h2>
      <!-- <h2 style="color: whit; font-size: 20px;margin-top:3%"><span class="v-timeline--accent" >计划时间线: </span>搭建完成</h2> -->
      <p style="font-size:20px;margin-top:-2%">未来计划：所有基本功能开发完毕,进行优化，尝试添加学习添加附加功能&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; </p>
      <p> </p>
      <p style="color:whit; font-size: 20px">时间：2022年9月底</p>
    </li>
    <li class="v-timeline--item">
      <span aria-hidden="true" class="v-timeline--bullet -old" style="margin-left:-3.3%;margin-top:-3%">
        <svg viewBox="0 0 50 50" focusable="false"><circle stroke="none" cx="20" cy="20" r="10"></circle></svg>
      </span>
      <h3 style="color: white; font-size: 20px;margin-top:3%">第一篇</h3>
      <!-- <h3 >标题三</h3> -->
      <p> </p>
      <p> </p>
      <p style="color:white; font-size: 20px">时间：2022年8月24日</p>
    </li>
     <li class="v-timeline--item">
      <span aria-hidden="true" class="v-timeline--bullet -old" style="margin-left:-3.3%;margin-top:-3%">
        <svg viewBox="0 0 50 50" focusable="false"><circle stroke="none" cx="20" cy="20" r="10"></circle></svg>
      </span>
      <h3 style="color: white; font-size: 20px;margin-top:3%">第一篇</h3>
      <!-- <h3 >标题三</h3> -->
      <p> </p>
      <p> </p>
      <p style="color:white; font-size: 20px">时间：2022年8月24日</p>
    </li>
     <li class="v-timeline--item">
      <span aria-hidden="true" class="v-timeline--bullet -old" style="margin-left:-3.3%;margin-top:-3%">
        <svg viewBox="0 0 50 50" focusable="false"><circle stroke="none" cx="20" cy="20" r="10"></circle></svg>
      </span>
      <h3 style="color: white; font-size: 20px;margin-top:3%">第一篇</h3>
      <!-- <h3 >标题三</h3> -->
      <p> </p>
      <p> </p>
      <p style="color:white; font-size: 20px">时间：2022年8月24日</p>
    </li>
       <li class="v-timeline--item">
    </li>
  </ol>
</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
  }
};
</script>

<style  scoped>
h1, h2, h3 {
  margin: 0;
  font-weight: 500;
}

body {
  padding: 4rem;
}

h1 {
  margin-bottom: 2rem;
}

hr {
  margin-top: 4rem;
  margin-bottom: 4rem;
}

@-webkit-keyframes pulsar-pulse {
  0% {
    opacity: 1;
    transform: scale3d(0, 0, 1);
  }
  40% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale3d(1.6, 1.6, 1);
  }
}

@keyframes pulsar-pulse {
  0% {
    opacity: 1;
    transform: scale3d(0, 0, 1);
  }
  40% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale3d(1.6, 1.6, 1);
  }
}
.v-timeline {
  padding: 16px 16px 16px 24px;
  /* background-color: #f5f5f5; */
  border-radius: 4px;
}
.v-timeline h2 {
  font-size: 1.5rem;
}
.v-timeline h3 {
  font-size: 1.125rem;
}
.v-timeline p {
  margin: 8px 0;
}
.v-timeline a {
  text-decoration: none;
  color: white;
}
.v-timeline a:hover {
  text-decoration: underline;
}

.v-timeline--items {
  margin: 0;
  padding-left: 0;
  display: flex;
  flex-flow: column nowrap;
  list-style: none;
}

.v-timeline--item {
  padding: 0 20px 24px;
  position: relative;
  border-left: 15px solid #339fcd;
  border-bottom:10px solid #339fcd;
  /* border-right:15px solid#339fcd  */
  background-color:white;
  opacity: 0.6;
}
.v-timeline--item + .v-timeline--item {
  margin-top: -8px;
}
.v-timeline--item:last-of-type {
  padding-bottom: 0;
  border-color: transparent;
}
.v-timeline--item a::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.v-timeline--bullet {
  display: block;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 2.4px;
  left: calc(-6px - 1px);
}
.v-timeline--bullet circle {
  fill: #339fcd;
}
.v-timeline--bullet.-pulsar {
  width: 30px;
  height: 16px;
  top: 7.2px;
  left: calc(-8px - 1px);
  /* box-shadow: 0 0 0 7.2px #f5f5f5; */
}
.v-timeline--bullet.-old {
  width: 80px;
  height: 86px;
  top: 7.2px;
  left: calc(-8px - 1px);
  /* box-shadow: 0 0 0 7.2px #f5f5f5; */
}
.v-timeline--bullet.-pulsar::before, .v-timeline--bullet.-pulsar::after {
  content: "";
  display: block;
  width: 40px;
  height: 40px;
  position: absolute;
  top: -2px;
  left: -2px;
  border-radius: 50%;
  box-shadow: 0 0 0 3px #339fcd;
  -webkit-animation: pulsar-pulse 3600ms cubic-bezier(0, 0.78, 0.74, 0.74) infinite;
          animation: pulsar-pulse 3600ms cubic-bezier(0, 0.78, 0.74, 0.74) infinite;
}
.v-timeline--bullet.-pulsar::after {
  -webkit-animation-delay: -1800ms;
          animation-delay: -1800ms;
}

.v-timeline--accent {
  color: #339fcd;
  font-size:0.11em
}

@supports (-moz-appearance: none) {
  .v-timeline h2 {
    position: relative;
    top: 0.16em;
  }
}
.notification-banner {
  margin: 0 -9999rem;
  padding: 8px 9999rem;
  background-color: #f5f5f5;
}
.notification-banner a {
  color: #222222;
  text-decoration: none;
}
.notification-banner a:hover {
  text-decoration: underline;
}

.notification-banner--content {
  display: flex;
  flex-flow: row nowrap;
}

.notification-banner--accent {
  color: #e0003a;
}

.notification-banner--pulsar {
  display: block;
  width: 16px;
  height: 16px;
  margin: 7.2px 9.6px;
  position: relative;
  box-shadow: 0 0 0 7.2px #f5f5f5;
}
.notification-banner--pulsar circle {
  fill: #e0003a;
}
.notification-banner--pulsar::before, .notification-banner--pulsar::after {
  content: "";
  display: block;
  width: 20px;
  height: 20px;
  position: absolute;
  top: -2px;
  left: -2px;
  border-radius: 50%;
  box-shadow: 0 0 0 1.2px #e0003a;
  -webkit-animation: pulsar-pulse 3600ms cubic-bezier(0, 0.78, 0.74, 0.74) infinite;
          animation: pulsar-pulse 3600ms cubic-bezier(0, 0.78, 0.74, 0.74) infinite;
}
.notification-banner--pulsar::after {
  -webkit-animation-delay: -1800ms;
          animation-delay: -1800ms;
}

@supports (-moz-appearance: none) {
  .notification-banner h2 {
    position: relative;
    top: 0.16em;
  }
}
@-webkit-keyframes pulsar-pulse--alternative {
  0% {
    opacity: 1;
    transform: scale3d(0, 0, 1);
  }
  70%, 100% {
    opacity: 0;
    transform: scale3d(1.6, 1.6, 1);
  }
}
@keyframes pulsar-pulse--alternative {
  0% {
    opacity: 1;
    transform: scale3d(0, 0, 1);
  }
  70%, 100% {
    opacity: 0;
    transform: scale3d(1.6, 1.6, 1);
  }
}
.v-timeline--bullet.-pulsar.-alternative,
.notification-banner--pulsar.-alternative {
  box-shadow: 0 -7.2px #f5f5f5;
}
.v-timeline--bullet.-pulsar.-alternative::before,
.notification-banner--pulsar.-alternative::before {
  content: none;
}
.v-timeline--bullet.-pulsar.-alternative::after,
.notification-banner--pulsar.-alternative::after {
  box-shadow: none;
  background-color: #e0003a;
  -webkit-animation: pulsar-pulse--alternative 2s cubic-bezier(0, 0.78, 0.74, 0.74) infinite;
          animation: pulsar-pulse--alternative 2s cubic-bezier(0, 0.78, 0.74, 0.74) infinite;
}

</style>