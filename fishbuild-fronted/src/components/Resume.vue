<template>
  <!-- resume -->
  <div
    class="resume"
    style="width: 794px; height: 1123px; background-color: white"
  >
    <el-row>
      <el-col :span="8" style="height: 1123px">
        <div class="left" style="border-right: 1px solid black; height: 100%">
          <!-- <span style="font-size:18px">求职意向：web前端开发工程师</span> -->
          <div class="logo">
            <div style="width: 100%; height: 20px"></div>
            <img
              src="../assets/jianli/wei.jpg"
              alt="zhengjianzhao"
              style="width: 110.625px; height: 154.875px; border-radius: 100px"
            />
          </div>
          <div class="self" style="margin-top: 5%">
            <div style="border-bottom: 1px solid black; margin-left: 10%">
              <br />
              <div style="display: inline-block; margin-left: -50%">
                <img
                  src="../assets/jianli/my-business-shop-store-suit-service-marketplace_83373.png"
                  alt="jibenxinxi"
                  style="width: 20%; height: 20%; vertical-align: middle"
                />
              </div>
              <span
                style="
                  font-size: 20px;
                  vertical-align: top;
                  line-height: 30px;
                  margin-left: -19%;
                "
                ><b>基本信息</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
              ><br />
            </div>
            <div class="item" style="margin-top: 5%">
              <span
                style="
                  font-size: 16px;
                  line-height: 30px;
                  margin-left: 2%;
                  vertical-align: middle;
                  color: black;
                "
                >姓名：韦志远 &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
              ><br />
              <span style="font-size: 16px; line-height: 30px; color: black"
                >生日：2000年02月18日
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
              ><br />
              <span style="font-size: 16px; line-height: 30px; color: black"
                >电话：17806273643 &nbsp;&nbsp; &nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
              ><br />
              <span style="font-size: 16px; line-height: 30px; color: black"
                >现住址：山东济南 &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
              ><br />
              <!-- <span style="font-size:20px">电话：17806273643</span><br /> -->
            </div>
          </div>
          <div class="self" style="margin-top: 5%">
            <div style="border-bottom: 1px solid black; margin-left: 10%">
              <br />
              <div style="display: inline-block; margin-left: -50%">
                <img
                  src="../assets/jianli/apps_web_development_chrome_logo_website_browser_google_icon_182706.png"
                  alt="jibenxinxi"
                  style="width: 20%; height: 20%; vertical-align: middle"
                />
              </div>
              <span
                style="
                  font-size: 20px;
                  vertical-align: top;
                  line-height: 30px;
                  margin-left: -19%;
                "
                ><b>求职相关</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
              ><br />
            </div>
            <div class="item" style="margin-top: 5%">
              <!-- <span
                style="
                  font-size: 16px;
                  line-height: 30px;
                  margin-left: 2%;
                  vertical-align: middle;
                  color: black;
                "
                >姓名：韦志远 &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</span
              ><br />
              <span style="font-size: 16px; line-height: 30px; color: black"
                >生日：2000年02月18日</span
              ><br />
              <span style="font-size: 16px; line-height: 30px; color: black"
                >电话：17806273643 &nbsp;&nbsp; &nbsp;</span
              ><br /> -->
              <div style="cursor: pointer" @click="toblog">
                <span style="font-size: 16px; line-height: 30px; color: black"
                  >个人作品：博客入口<i
                    class="el-icon-thumb"
                    style="margin-left: 2%"
                  ></i
                  >&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span
                ><br />
              </div>
              <!-- el-icon-thumb -->
              <!-- <span style="font-size:20px">电话：17806273643</span><br /> -->
            </div>
          </div>
          <div class="self" style="margin-top: 5%">
            <div style="border-bottom: 1px solid black; margin-left: 10%">
              <br />
              <div style="display: inline-block; margin-left: -50%">
                <img
                  src="../assets/jianli/discussion_80569 (1).png"
                  alt="jibenxinxi"
                  style="width: 25%; height: 25%; vertical-align: middle"
                />
              </div>
              <span
                style="
                  font-size: 20px;
                  vertical-align: top;
                  line-height: 30px;
                  margin-left: -19%;
                "
                ><b>个人评价</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
              ><br />
            </div>
            <div class="item" style="margin-top: 5%">
              <span
                style="
                  font-size: 16px;
                  line-height: 33px;
                  margin-left: 2%;
                  vertical-align: middle;
                  color: black;
                "
                >1， 生活中性格沉稳，工作上<br />&nbsp;&nbsp;&nbsp;有韧性，具有良好的抗压能力，<br />肯加班吃苦，一切以完成开发<br />任务为首要目标，敢于挑战自<br />己 ，
                超越自己。
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;</span
              ><br />
              <br />
              <span
                style="
                  font-size: 16px;
                  line-height: 33px;
                  margin-left: 2%;
                  vertical-align: middle;
                  color: black;
                "
                >2， 具有良好的自学能力和危<br />机意识，能够及时在一天之余<br />反思自己的不足，可以利用空<br />
                闲时间自学新兴技术，紧跟技<br />术时代的变化，及时更新自己<br />的技术栈，可塑性强。
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span
              ><br />
              <!-- <span style="font-size: 16px; line-height: 30px; color: black"
                >生日：2000年02月18日</span
              ><br /> -->
              <!-- <span style="font-size:16px;line-height:30px;">电话：17806273643 &nbsp;&nbsp; &nbsp;</span><br />
                <span style="font-size:16px;line-height:30px;">现住址：山东济南 &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp;</span><br /> -->
              <!-- <span style="font-size:20px">电话：17806273643</span><br /> -->
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="main">
          <div class="yixiang" style="margin-top: 5%">
            <span style="font-size: 20px"
              ><b>求职意向：web前端开发工程师</b></span
            >
          </div>
          <br />
          <br />
          <span style="font-size: 20px; margin-left: -80%"
            ><b>教育经历</b></span
          >
          <div
            class="education"
            style="height: 100px; margin-top: 1%; border-top: 1px solid black"
          >
            <div style="width: 100%; height: 15px"></div>
            <span
              style="
                line-height: 30px;
                font-size: 16px;
                margin-left: -5%;
                color: black;
              "
              >2018.09——2022.06</span
            ><span style="margin-left: 40%;font-size:16px;">青岛科技大学</span><br />
            <span style="margin-left: -44%; font-size: 16px; color: black"
              >软件工程&nbsp;|&nbsp;本科&nbsp;|&nbsp;信息科学技术学院</span
            >
          </div>
          <span style="font-size: 20px; margin-left: -82%"><b>技术栈</b></span>
          <div
            class="jishu"
            style="height: 220px; margin-top: 1%; border-top: 1px solid black"
          >
            <div style="width: 100%; height: 20px"></div>
            <div
              style="
                display: inline-block;
                width: 10px;
                height: 10px;
                background-color: black;
                border-radius: 50%;
                margin-left: -3%;
              "
            ></div>
            &nbsp;&nbsp;
            <span style="line-height: 30px; font-size: 16px; color: black"
              >掌握前端页面编写能力，熟悉HTML5、CSS、JavaScript&nbsp;三&nbsp;大&nbsp;<br />
              基础，熟悉常见W3C标准，常见协议以及浏览器兼容性；&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
            ><br />
            <div
              style="
                display: inline-block;
                width: 10px;
                height: 10px;
                background-color: black;
                border-radius: 50%;
                margin-left: -3%;
              "
            ></div>
            &nbsp;&nbsp;
            <span style="line-height: 30px; font-size: 16px; color: black"
              >掌握使用Vue、vue-cli，能基于Vue（2.0），搭配ElementUi 开<br />发项目，会使用es6，会使用主流打包工具，部署服务器；&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
            ><br />
            <div
              style="
                display: inline-block;
                width: 10px;
                height: 10px;
                background-color: black;
                border-radius: 50%;
                margin-left: -3%;
              "
            ></div>
            &nbsp;&nbsp;
            <span style="line-height: 30px; font-size: 16px; color: black"
              >可以熟练使用Git、SVN进行项目管理，
              掌握后端Java语言，以<br />及Spring boot，Mybatis后端框架，有前后端分离开发经验；&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
            >
          </div>
          <span style="font-size: 20px; margin-left: -80%"
            ><b>工作经历</b></span
          >
          <div
            class="gongzuo"
            style="height: 200px; margin-top: 1%; border-top: 1px solid black"
          >
            <div style="width: 100%; height: 20px"></div>
            <span style="line-height: 30px; font-size: 16px; color: black;margin-left:-10%"
              ><b>山东胜软科技股份有限公司</b><span style="font-size:16px;margin-left:23%"><b>2022-07——至今</b></span><br />
              <div
              style="
                display: inline-block;
                width: 10px;
                height: 10px;
                background-color: black;
                border-radius: 50%;
                margin-left: -3%;
              "
            ></div>
            &nbsp;&nbsp;
              <span style="font-size:16px">担任软件开发工程师一职，结合公司项目实际开发要求，前端使<br />
              用Vue+Element-Ui框架，后端使用SpringBoot+mybatis，完成开发任 &nbsp; &nbsp;<br />务，
              在职期间参与泰安市一网统揽综合慧治平台开发与建设，超思唯&nbsp;&nbsp;&nbsp;&nbsp;<br />
              科部门周报系统的维护，有前后端分离项目开发经验，抗压能力强。
              &nbsp;&nbsp;&nbsp;&nbsp;
            <!-- <br />具有良好的用户体验，会持续优化更新 -->
            <!-- （<span @click="toblog" style="font-size:16px"><u style="cursor:pointer">http://43.138.88.37:8080</u></span>）&nbsp;&nbsp; -->
              </span></span
            ><br />
            <br />
            <!-- <div
              style="
                display: inline-block;
                width: 10px;
                height: 10px;
                background-color: black;
                border-radius: 50%;
                margin-left: -5%;
              "
            ></div>
            &nbsp;&nbsp;
            <span style="line-height: 30px; font-size: 16px; color: black"
              >掌握前端页面编写能力，熟悉HTML5、CSS、JavaScript三大<br />
              基础，熟悉常见W3C标准，常见协议以及浏览器兼容性；&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
            ><br /> -->
            <!-- <div
              style="
                display: inline-block;
                width: 10px;
                height: 10px;
                background-color: black;
                border-radius: 50%;
                margin-left: -5%;
              "
            ></div>
            &nbsp;&nbsp;
            <span style="line-height: 30px; font-size: 16px; color: black"
              >掌握前端页面编写能力，熟悉HTML5、CSS、JavaScript三大<br />
              基础，熟悉常见W3C标准，常见协议以及浏览器兼容性；&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
            >
            <br /> -->
          </div>
          <span style="font-size: 20px; margin-left: -78%;margin-top:5%"
            ><b>项目经验</b></span
          >
          <div
            class="xiangmu"
            style="height: 300px; margin-top: 1%; border-top: 1px solid black"
          >
            <div style="width: 100%; height: 20px"></div>
           
            <span style="line-height: 30px; font-size: 16px; color: black;margin-left:-8%"
              ><b>泰安市一网统揽综合慧治平台</b><span style="font-size:16px;margin-left:20%"><b>2022-08——至今</b></span><br />
              &nbsp;&nbsp;<div
              style="
                display: inline-block;
                width: 10px;
                height: 10px;
                background-color: black;
                border-radius: 50%;
                margin-left: -3%;
              "
            ></div>
            &nbsp;&nbsp;
              <span style="font-size:16px">项目以泰安市综合一体化为开发背景，设计搭建经济运行，交通
              <br />运行，资源环境等共计十余模块，在项目中主要负责交通运行模块和
              <br />各类Echart图的开发，以及利用前端Vue，后端SpringBoot，开发录&nbsp;&nbsp;
              <br />入系统作为数据支撑，按期完成开发任务，部署上线。&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <!-- <br />具有良好的用户体验，会持续优化更新（）&nbsp;&nbsp; -->
              </span></span
            ><br />
            <br  />
            <span style="line-height: 30px; font-size: 16px; color: black;margin-left:-10%"
              ><b>个人博客：我是敷羽</b><span style="font-size:16px;margin-left:32%"><b>2022-09——至今</b></span><br />
              <div
              style="
                display: inline-block;
                width: 10px;
                height: 10px;
                background-color: black;
                border-radius: 50%;
                margin-left: -3%;
              "
            ></div>
            &nbsp;&nbsp;
              <span style="font-size:16px">使用VUE，H5，CSS布局以及动画，JS技术搭建博客，实现了<br />博客博文展示，留言区，访客统计，开发时间线等功能
              ，界面友好，<br />具有良好的用户体验，会持续优化更新（<u>http://43.138.88.37:8080</u>）&nbsp;&nbsp;
              </span></span
            ><br />
            <!-- <span style="line-height: 30px; font-size: 16px; color: black;margin-left:-10%"
              ><b>个人博客：我是敷羽</b><span style="font-size:16px;margin-left:32%"><b>2022-08——至今</b></span><br />
              <div
              style="
                display: inline-block;
                width: 10px;
                height: 10px;
                background-color: black;
                border-radius: 50%;
                margin-left: -3%;
              "
            ></div>
            &nbsp;&nbsp;
              <span style="font-size:16px">使用VUE，H5，CSS布局以及动画，JS技术搭建博客，实现了<br />博客博文展示，留言区，访客统计，开发时间线等功能
              ，界面友好，<br />具有良好的用户体验，会持续优化更新（<u>http://43.138.88.37:8080</u>）&nbsp;&nbsp;
              </span></span
            >
            <br /> -->
            </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    toblog() {
      // 类似 HTTP 重定向到菜鸟教程
      //   window.location.replace("https://www.runoob.com");
      // 类似点击菜鸟教程的链接（a 标签）
      window.location.href = "http://43.138.88.37:8080/";
    },
  },
};
</script>

<style scoped>
.resume {
  /* cursor: pointer; */
}
</style>
