<template>
    <div>
        <!--这里用的ElementUI中的button组件，点击显示md文件-->
       <!-- <el-button @click="testMd">引入MD</el-button> -->
       <!--引入vue-markdown组件-->
       <div class="markdown-body" style="width:60%;height:1000px;text-align:left;margin-left:20%" @click="testMd">
       <vue-markdown :key="key">{{msg}}</vue-markdown>
       </div>
    </div>
  </template>
  
  <script>

  import VueMarkdown from 'vue-markdown';
  // 代码高亮
  import "highlight.js/styles/github.css";
  // 其他元素使用 github 的样式
  import "github-markdown-css";
  
  export default {
    components:{
      VueMarkdown
    },
    data(){
      return{
        //保存解析后的md文件对象
        msg:'',
        //为了让组件强制渲染
        key: 0
       
      }
    },
    mounted(){
        this.testMd();
    },
    methods:{
       //必须设置为异步加载，因为解析需要时间，注意加上async
       
    }
  }
  </script>
  
  