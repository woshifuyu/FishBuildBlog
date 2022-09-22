<template>
  <div>
      <section>
        <div class="container" style="margin-left:25%">
          <div class="background-img">
            <div class="box">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <div class="content" style="margin-top:2%">
                <h2>旧&nbsp;时&nbsp;光</h2>
                <!-- <br /> -->
                <p style="margin-top:10%;line-height:37px">

               &nbsp;&nbsp;&nbsp; 我在文字里常见山河和你，瞒过文字，偷出来些许，陪陪瞌睡，就能肥沃几分岁月，睡个好觉，其实这时光也不曾抱歉过谁
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.container {
  padding-top: 20px;
  padding-bottom: 20px;
  /* border:1px solid #339fcd */
}
body {
  background-color: #111845;
}

.background-img {
  background-image: url("https://fishbuild-1310853011.cos.ap-beijing.myqcloud.com/blueye.png");
  height: 400px;
  width: 800px;
  /* opacity: 0.6; */
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-size: cover;
  margin:5% auto;
  padding: 20px;
  border: 1px solid white;
  border-radius: 4px;
  box-shadow: 0px 0px 5px white;
  position: relative;
}

.content h2 {
  font-size: 19px;
}

.box {
  position: absolute;
  top: 50%;
  left: -27%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  background: #111845a6;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: 0 20px 50px rgb(23, 32, 90);
  border: 2px solid #339fcd;
  color: white;
  padding: 20px;
}

.box:before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  transition: 0.5s;
  pointer-events: none;
}

.box:hover:before {
  left: -50%;
  transform: skewX(-5deg);
}

.box .content {
  position: absolute;
  top: 15px;
  left: 15px;
  right: 15px;
  bottom: 15px;
  border: 1px solid rgba(134,189,119);
  padding: 20px;
  text-align: center;
  box-shadow: 0 5px 10px rgba(9, 0, 0, 0.5);
}

.box span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
}

.box span:nth-child(1) {
  transform: rotate(0deg);
}

.box span:nth-child(2) {
  transform: rotate(90deg);
}

.box span:nth-child(3) {
  transform: rotate(180deg);
}

.box span:nth-child(4) {
  transform: rotate(270deg);
}

.box span:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background: #50dfdb;
  animation: animate 4s linear infinite;
}

@keyframes animate {
  0% {
    transform: scaleX(0);
    transform-origin: left;
  }
  50% {
    transform: scaleX(1);
    transform-origin: left;
  }
  50.1% {
    transform: scaleX(1);
    transform-origin: right;
  }

  100% {
    transform: scaleX(0);
    transform-origin: right;
  }
}
</style>
