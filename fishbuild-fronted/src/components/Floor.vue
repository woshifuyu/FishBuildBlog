<template>
  <div class="item">
    <!--设置条件，防止死循环  -->
    <div v-if="condata.parent">
        <!-- 在template中再次渲染该组件，也需要传入condata数据，并用if指定有才显示，没有就不显示 -->
        <Floor :condata="condata.parent" />
        </div>
    <div class="floor">
        <div class="user">
            第一楼
            <span class="time">2小时前</span>
            {{condata.user}}
        </div>
    </div>
    <div class="content">{{condata.content}}</div>
    <!-- <div class="floor">第{{ num }}层楼</div>
    <Floor :num="num - 1" /> -->
    <!-- 在template中再次渲染 -->
  </div>
</template>

<script>
/*
组件自己显示自己，1，组件内设定name属性 2，用这个name属性作为标签在组件自己的template里面渲染
3，为了避免死循环，要用终止条件
*/
export default {
    name:"Floor",//指定name属性
    props:["condata"],
    data(){
        return{}
    },
    mounted(){
        console.log(this.condata);
    }
};
</script>

<style scoped>
.item>.floor{
    border:2px solid rgba(161,161,161);
    padding:10px 10px;
    margin-top:-2px;
}
</style>
