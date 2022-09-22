<template>
  <div class="selfCard">
    <div class="card-nav" style="padding: 18px">
      <span>博客导航</span>
      <span style="margin-left: 30%">功能概览</span>
    </div>
    <!-- <div></div> -->
    <div class="headpicture" style="margin-top: 0.5%;">
      <img
        src="../assets/logo.jpg"
        class="headlogo"
        style="
          width: 35%;
          height: 35%;
          vertical-align: middle;
          border-radius: 56px;
        "
      />
    </div>
    <div class="selftags" style="margin-top: 7%">
      <span style="font-size: 20px">&ensp;woshifuyu|我是敷羽</span>
    </div>
    <div class="mainlyabout" style="margin-top: 7%">
      <div
        class="passage"
        style="
          width: 40px;
          height: 40px;
          display: inline-block;
          border-right: 2px solid #efefee;
          padding: 7px;
        "
      >
        <span
          ><b><span>01</span></b> <br /><span style="font-size: 14px"
            >文章</span
          >
        </span>
      </div>
      <div
        class="category"
        style="
          width: 40px;
          height: 40px;
          display: inline-block;
          border-right: 2px solid #efefee;
          margin-left: 0%;
          padding: 7px;
        "
      >
        <span
          ><b><span>01</span></b> <br /><span style="font-size: 14px"
            >分类</span
          >
        </span>
      </div>
      <div
        class="tags"
        style="
          width: 40px;
          height: 40px;
          display: inline-block;
          margin-left: 2%;
        "
      >
        <span
          ><b><span>02</span></b> <br />
          <span style="font-size: 14px">标签</span></span
        >
      </div>
    </div>

    <!-- 列表 -->
    <div class="list" style="margin-top: 5%">
      <!-- <div class="title">
              <img
                src="../assets/logo.jpg"
                style="
                  width: 3.8%;
                  height: 3.8%;
                  vertical-align: middle;
                  border-radius: 25px;
                "
              /><span style="margin-left: 1.5%">我是敷羽</span>
            </div> -->
      <div class="firstline">
        <div style="display: inline-block">
          <img
            src="../assets/logo_passage_icon.png"
            alt="passage"
            style="
              width: 10%;
              height: 10%;
              vertical-align: middle;
              border-radius: 25px;
            "
          />
          <span style="vertical-align: baseline; margin-left: 3%">文章</span>
        </div>

        <div style="display: inline-block; margin-left: -22.5%">
          <img
            src="../assets/time_management.png"
            alt="passage"
            style="
              width: 10%;
              height: 10%;
              vertical-align: middle;
              border-radius: 25px;
            "
          />
          <span style="vertical-align: baseline; margin-left: 3%">旧时光</span>
        </div>

        <!-- <div style="display:inline-block;width:30px;height:30px"> <img src="../assets/time_management.png" alt="passage"><span>旧时光</span></div> -->
      </div>
      <div style="margin-top: 2%">
        <div style="display: inline-block">
          <img
            src="../assets/train_icon-icons.com_64530.png"
            alt="passage"
            style="
              width: 10%;
              height: 10%;
              vertical-align: middle;
              border-radius: 25px;
            "
          /><span style="vertical-align: baseline; margin-left: 3%">开往</span>
        </div>

        <div style="display: inline-block; margin-left: -22.5%">
          <img
            src="../assets/conversion.png"
            alt="passage"
            style="
              width: 10%;
              height: 10%;
              vertical-align: middle;
              border-radius: 25px;
            "
          /><span style="vertical-align: baseline; margin-left: 3%"
            >留言板</span
          >
        </div>

        <!-- <div style="display:inline-block;width:30px;height:30px"> <img src="../assets/time_management.png" alt="passage"><span>旧时光</span></div> -->
      </div>
    </div>
    <!-- 文字 -->
    <div class="text" style="margin-top: 7%">
      <!-- 时光于你，不过雨过屋檐。 -->
      <!-- 故事于她，只是泪落琴弦。 -->
      <!-- 就当我是挑着货郎担路人，到处兜售这惯见的人间，落寞的瘦雨，昨天的旧云。 -->
      <span
        ><i class="el-icon-loading"></i
        ><span style="margin-left: 3%">时光于你，不过雨过屋檐</span></span
      ><br />
      <div style="display: inline-block; margin-top: 2%">
        <img
          src="../assets/bluelink.png"
          alt="passage"
          style="
            width: 7%;
            height: 7%;
            vertical-align: middle;
            border-radius: 25px;
          "
        />
        <span style="vertical-align: baseline; margin-left: 2%"
          >故事于她，只是泪落琴弦</span
        >
      </div>
      <!-- <span>就当我是挑着货郎担路人，<br>到处兜售这惯见的人间，<br>落寞的瘦雨，昨天的旧云</span> -->
    </div>
    <!-- 链接 -->
    <div class="links" style="margin-top: 7%">
      <div style="display: inline-block; width: 30px; height: 30px">
        <img src="../assets/logo_github_icon.png" alt="github" />
      </div>
      <div
        style="
          display: inline-block;
          width: 30px;
          height: 30px;
          margin-left: 5%;
        "
      >
        <img src="../assets/logo_wechat_icon.png" alt="wechat" />
      </div>
      <div
        style="
          display: inline-block;
          width: 30px;
          height: 30px;
          margin-left: 3%;
        "
      >
        <img src="../assets/gitlab_original_logo_icon_146503.png" alt="email" />
      </div>
      <div
        style="
          display: inline-block;
          width: 34px;
          height: 34px;
          margin-left: 3%;
          vertical-align: bottom;
        "
      >
        <img src="../assets/qq_icon_130848.png" alt="qq" />
      </div>
      <div
        style="
          display: inline-block;
          width: 30px;
          height: 30px;
          margin-left: 4%;
        "
      >
        <img src="../assets/twitter_logo.png" alt="email" />
      </div>
      <div
        style="
          display: inline-block;
          width: 30px;
          height: 30px;
          margin-left: 6%;
        "
      >
        <img src="../assets/Mail_31108.png" alt="email" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.selfCard {
  position: sticky;
  width: 70%;
  opacity: 0.6;
  height: 520px;
  background-color: white;
  cursor: pointer;
  /* margin-left:30%; */
}
@keyframes headlogo {
  from {
    box-shadow: 0px 0px 45px #41b4fb;
  }
  to {
    box-shadow: 0px 0px 55px rgb(235, 242, 36);
  }
}
.headlogo {
  animation: headlogo 2s ease-in-out infinite alternate;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 25px;
}
</style>
