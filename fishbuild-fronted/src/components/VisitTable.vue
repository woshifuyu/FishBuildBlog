<template>
  <div>
    <!-- 用户打开站的首页时，就请求我的访问统计接口。上传访问城市、上一个url、访问时间、浏览器类型等信息。
    为了过滤用户多次打开首页重复收集信息，我在第一次访问时就种下一个cookie，第二次访问首页时判断是否存在cookie。
    如果存在cookie就不再请求访问统计接口，cookie失效时间6个小时，约定6小时访问的同一个设备只记录一次。
    前端收集到访问信息后，发送给后端，node端简单的将每条数据存在mongodb。前端展示时会用echarts的折线图的形式绘出一周内每天的访问量，
    在中国地图上描出访客的城市，用列表展示每个访客的访问时间。这些数据支持由node对数据匹配分析后提供。
    关于定位：如果没有cookie，js会请求一下我的node接口拿到访问ip，然后用该ip请求高德地图的接口，拿到访问者的城市。
    关于访问来源：使用document.referrer，但是我的博客使用了vue和vue-router，这个方法似乎有时管用有时不管用，还在测试 -->
    <!-- 表格 -->
    <el-table
      :data="tableData"
      style="width: 94%; color: white"
      :header-cell-style="headerCellStyle" 
    >
      <el-table-column prop="ipdata" label="访问 IP " width="120">
      </el-table-column>
      <el-table-column prop="dothing" label="操作内容" width="120">
      </el-table-column>
      <el-table-column prop="equipment" label="访问设备" width="130">
      </el-table-column>
      <el-table-column prop="address" label="访问地点" width="120">
      </el-table-column>
      <el-table-column prop="time" label="访问时间" width="112">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          ipdata: "218.57.223.166",
          dothing: "浏览主页，查看开发时间线，查看logo介绍，查看访客统计",
          equipment: "WindowsX64 Chrome 1536*1322",
          address: "山东省东营市",
          time: "2022-09-01",
        },
        {
          ipdata: "218.57.223.166",
          dothing: "浏览主页，查看开发时间线，查看访客统计，查看留言板",
          equipment: "WindowsX64 Chrome 1536*1322",
          address: "山东省东营市",
          time: "2022-09-01",
        },
        {
          ipdata: "218.57.223.166",
          dothing: "浏览主页，查看开发时间线，查看访客统计",
          equipment: "WindowsX64 Chrome 1536*1322",
          address: "山东省东营市",
          time: "2022-08-26",
        },
        {
          ipdata: "218.57.223.166",
          dothing: "浏览主页，查看开发时间线，查看访客统计",
          equipment: "WindowsX64 Chrome 1536*1322",
          address: "山东省东营市",
          time: "2022-08-26",
        },
        {
          ipdata: "218.57.223.166",
          dothing: "浏览主页，查看开发时间线，查看访客统计",
          equipment: "WindowsX64 Chrome 1536*1322",
          address: "山东省东营市",
          time: "2022-08-25",
        },
        {
          ipdata: "218.57.223.166",
          dothing: "浏览主页，查看logo介绍，查看访客统计",
          equipment: "WindowsX64 FireFox 1536*1323",
          address: "山东省东营市",
          time: "2022-08-25",
        },
        {
          ipdata: "218.57.223.166",
          dothing: "浏览主页，查看404页面，查看访客统计，查看开发时间线",
          equipment: "Mac Safari 1536*1323",
          address: "山东省东营市",
          time: "2022-08-24",
        },
      ],
    };
  },
  methods:{
    headerCellStyle(){
      return 'background:white'
    }
  }
};
</script>

<style scoped>
>>> .el-table,
.el-table__expanded-cell {
  background-color: transparent !important;
}
/* 表格内背景颜色 */
/* .el-table th,
.el-table tr,
.el-table td {
  background-color: transparent !important;
} */
/* 使表格背景透明 */
/* .el-table th,
.el-table tr {
  background-color: transparent;
} */
/* ::v-deep .el-table__expanded-cell {
  background-color: transparent !important;
} */

::v-deep .el-table th,
::v-deep .el-table tr,
::v-deep .el-table td {
  background-color: transparent;
}
/* 表格鼠标悬浮时的样式（高亮） */
>>> .el-table--enable-row-hover .el-table__body tr:hover {
  background: rgb(51, 159, 205);
  border: 1px solid #313463;
}
/*表格鼠标悬停的样式（背景颜色）*/
>>> .el-table tbody tr:hover > td {
  background-color: rgb(51, 159, 205) !important;
}
</style>
