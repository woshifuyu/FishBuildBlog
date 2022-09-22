<template>
<div class="item">
  <div class="reply" v-for="(item,index) in comments" :key="index">
    <div class="user"><span class="time">1小时以前</span>{{item.user}}</div>
    <div class="floor" v-if="item.parent">
        <Floor :condata="item.parent" />
        <!-- 如果有parent，才显示Floor组件，将parent数据传给Floor组件 -->
    </div>
    <div class="content">{{item.content}}</div>
    <hr />
  </div>
  </div>
</template>

<script>
import Floor from './Floor.vue';
export default {
    data(){
        return{
            comments: [
        // parent 为回复的用户信息
        {
          content: "奥利给，兄弟萌",
          user: "王尼玛",
          // 第一层楼
          parent: {
            content: "蜜汁小汉堡，干了噢",
            user: "老八",
          },
        },
        {
          content: "一giao窝里giao giao",
          user: "小阿giao",
          //   第一层楼
          parent: {
            content: "你不去参加中国新说唱可惜了",
            user: "野马",
            //   第二层楼
            parent: {
              content: "画画的baby，画画的baby,奔驰的小野马和带刺的玫瑰",
              user: "老giao",
              //   第三层楼
              parent: {
                content: "去参加新说唱，有推荐学的歌没？",
                user: "药水",
              },
            },
          },
        },
        {
          content: "谁TM买小米儿！",
          user: "铁蛋",
        },
]
        }
    },
    components:{
        Floor
    }
};
</script>

<style scoped>
</style>
