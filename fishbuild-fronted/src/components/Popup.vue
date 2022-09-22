<template>
  <transition name="slide">
    <div class="popup" :class="transition" v-show="showModule">
      <!-- 遮罩层 -->
      <div class="mask" v-if="mask"></div>
      <!-- 弹框 -->
      <div class="p-dialog" :style="{ '--theme-color': themeColor }">
        <!-- 1. 头部 -->
        <div class="p-header">
          <h4>{{ title }}</h4>
          <a href="javascript:;" class="iconfont icon-cuocha_kuai" @click="$emit('cancel')"></a>
        </div>
        <!-- 2. 内容(插槽) -->
        <div class="p-body">
          <slot name="body">content</slot>
        </div>
        <!-- 3. 底部(按钮) -->
        <div class="p-footer">
          <a href="javascript:;" class="btn" v-if="btn === 1" @click="$emit('submit')">{{ submitBtn }}</a>
          <a href="javascript:;" class="btn" v-if="btn === 2" @click="$emit('cancel')">{{ cancelBtn }}</a>
          <div class="btn-group" v-if="btn === 3"> 
            <a href="javascript:;" class="btn btn-cancel" @click="$emit('cancel')">{{ cancelBtn }}</a>
            <a href="javascript:;" class="btn" @click="$emit('submit')"  style="margin-left:1.9%">{{ submitBtn }}</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'popup',
  props: {
    // 1. 弹框大小：包括 小 small 中 middle 大 large 表单 form
    size: {
      type: String,
      default: 'form',
    },
    // 2. 弹框标题
    title: {
      type: String,
      default: 'warning',
    },
    // 3. 按钮类型： 1 确定 2 取消 3 确定&取消
    btn: {
      type: Number,
      default: 3,
    },
    // 4. 按钮内容
    submitBtn: {
      type: String,
      default: 'submit',
    },
    cancelBtn: {
      type: String,
      default: 'cancel',
    },
    // 5. 是否显示遮罩层
    mask: {
      type: Boolean,
      default: true,
    },
    // 6. 选择弹框显示/隐藏的动画效果：top 从上方渐入渐出 fade 淡入淡出
    transition: {
      type: String,
      default: 'top',
    },
    // 7. 设置主题色
    themeColor: {
      type: String,
      default: '#cc6699',
    },
    showModule: Boolean,
  },
}
</script>

<style lang="scss" scoped>
// 弹框样式
.popup {
  z-index: 11;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.6s;
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity: 0.5;
  }
  .p-dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 660px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
    .p-header {
      height: 60px;
      background-color: var(--theme-color);
      line-height: 60px;
      padding: 0 25px;
      font-size: 16px;
      color: #fff;
      a {
        display: inline-block;
        position: absolute;
        right: 30px;
        top: 0px;
        color: #fff;
        font-size: 20px;
        transition: all 0.3s;
        &:hover {
          transform: scale(1.4);
        }
      }
    }
    .p-body {
      padding: 42px 40px 54px;
      font-size: #fff;
    }
    .p-footer {
      height: 72px;
      line-height: 72px;
      text-align: center;
      background-color: #f5f5f5;
    }
  }
}
// 按钮样式预设
.btn {
  display: inline-block;
  width: 110px;
  line-height: 30px;
  text-align: center;
  background-color: var(--theme-color);
  color: #fff;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.1);
  }
}

.btn-cancel {
  background-color: #999999;
}
// 弹框进出动画
// 从上方渐入渐出
.top {
  &.slide-enter-active {
    top: 0;
  }
  &.slide-leave-to {
    top: -100%;
  }
  &.slide-enter {
    top: -100%;
  }
}
// 淡入淡出
.fade {
  &.slide-enter-active {
    opacity: 1;
  }
  &.slide-leave-to {
    opacity: 0;
  }
  &.slide-enter {
    opacity: 0;
  }
}
</style>

