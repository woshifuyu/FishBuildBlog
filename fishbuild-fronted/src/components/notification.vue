<template>
  <div id="notification">
    <ul class="list" style="margin-left:-15%">
      <li
        v-for="(item, index) in ulList"
        :key="item.id"
        :class="!index && play ? 'toUp' : ''"
        style="background-color:white"
      >
      <i class="el-icon-message-solid" style="margin-right:1%"></i><span style="color:black">{{ item.msg }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  mounted() {
    setInterval(this.startPlay, 3000);
  },
  data() {
    return {
      ulList: [
        { msg: "旧时光旨在将一些美好的回忆记录下来，展现在我们面前，营造一种美好的氛围 ~ ~" },
        // {msg:""},
        { msg: "出于内容考虑，现阶段该功能仍在设计开发阶段，后续将会完善此功能 !!" },
        // {msg:""},
        { msg: "如有对此功能有合理宝贵建议，可以转移留言区反馈，感谢您的每一条宝贵建议 !!" },
        // {msg:""},
        // { msg: "这是第三条信息" },
        // { msg: "这是第四条信息" },
      ],
      play: false,
    };
  },
  methods: {
    startPlay() {
      let that = this;
      that.play = true; //开始播放
      setTimeout(() => {
        that.ulList.push(that.ulList[0]); //将第一条数据塞到最后一个
        that.ulList.shift(); //删除第一条数据
        that.play = false; //暂停播放
      }, 500);
    },
  },
};
</script>

<style lang="scss" scoped>
.toUp {
  margin-top: -40px;
  transition: all 5s;
}

.list {
  list-style: none;
  width: 2000px;
  text-align: center;
  overflow: hidden;
  height: 40px;
  padding: 0;
  margin: 0;
}
li {
  text-align: center;
  height: 40px;
  font-size:20px;
  color:black;
  line-height: 40px;
}
</style>
