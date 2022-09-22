<template>
    <div class="TagCard">
      <div style="width:100%;height:10px"></div>
      <!-- <div class="selftags" style="margin-top: 7%">
        <span style="font-size: 20px">&ensp;woshifuyu|我是敷羽</span>
      </div> -->
      <div class="mainlyabout" style="margin-top:0%">
        
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
  
      <div>
          <div class="tag" style="margin-top:3%;width:20%;margin-left:40%">
            <div class="tag1" style="display: inline-block;border:1px solid black;">
         技术分享
            </div>
            <div class="tag1" style="display: inline-block;border:1px solid black;margin-left:-240%">
        生活杂记
            </div>
            </div>
          </div>

      <!-- 列表 -->
      <div class="list" style="margin-top: 5%">
        <div class="firstline">
          <!-- <div style="display: inline-block">
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
          </div> -->
  
          <!-- <div style="display:inline-block;width:30px;height:30px"> <img src="../assets/time_management.png" alt="passage"><span>旧时光</span></div> -->
        </div>
        <div style="margin-top: 1%">
          <!-- <div style="display: inline-block">
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
          </div> -->
  
          <div style="display: inline-block; margin-left: 0%">
            <img
              src="../assets/hotArc/4124800-chat-bubble-comments-mobile-chat-speech-bubble-talk_113899.png"
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
            <div style="display: inline-block;margin-left:-20%">
            <img
              src="../assets/hotArc/3775748-check-date-list-planner-time_108972.png"
              alt="passage"
              style="
                width: 8%;
                height: 8%;
                vertical-align: middle;
                border-radius: 25px;
              "
            /><span style="vertical-align: baseline; margin-left: 3%">开发时间线</span>
          </div>
  
          <!-- <div style="display:inline-block;width:30px;height:30px"> <img src="../assets/time_management.png" alt="passage"><span>旧时光</span></div> -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .TagCard {
    position: sticky;
    width: 70%;
    opacity: 0.6;
    height: 150px;
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
  