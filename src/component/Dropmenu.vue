<template>
  <div class="content">
    <van-dropdown-menu>
      <van-dropdown-item>
        <div class="drop">
          <div class="top">
            <div class="left">
              <van-radio-group v-model="radio">
                <van-radio name="1">单选框 1</van-radio>
                <van-radio name="2">单选框 2</van-radio>
              </van-radio-group>
              <van-radio-group v-model="radio">
                <van-radio name="1">单选框 1</van-radio>
                <van-radio name="2">单选框 2</van-radio>
              </van-radio-group>
              <van-radio-group v-model="radio">
                <van-radio name="1">单选框 1</van-radio>
                <van-radio name="2">单选框 2</van-radio>
              </van-radio-group>
              <van-radio-group v-model="radio">
                <van-radio name="1">单选框 1</van-radio>
                <van-radio name="2">单选框 2</van-radio>
              </van-radio-group>
            </div>
            <div class="middle">
              <van-radio-group v-model="radio">
                <van-radio name="1">单选框 1</van-radio>
                <van-radio name="2">单选框 2</van-radio>
              </van-radio-group>
              <van-radio-group v-model="radio">
                <van-radio name="1">单选框 1</van-radio>
                <van-radio name="2">单选框 2</van-radio>
              </van-radio-group>
              <van-radio-group v-model="radio">
                <van-radio name="1">单选框 1</van-radio>
                <van-radio name="2">单选框 2</van-radio>
              </van-radio-group>
              <van-radio-group v-model="radio">
                <van-radio name="1">单选框 1</van-radio>
                <van-radio name="2">单选框 2</van-radio>
              </van-radio-group>
              <van-radio-group v-model="radio">
                <van-radio name="1">单选框 1</van-radio>
                <van-radio name="2">单选框 2</van-radio>
              </van-radio-group>
              <van-radio-group v-model="radio">
                <van-radio name="1">单选框 1</van-radio>
                <van-radio name="2">单选框 2</van-radio>
              </van-radio-group>
              <van-radio-group v-model="radio">
                <van-radio name="1">单选框 1</van-radio>
                <van-radio name="2">单选框 2</van-radio>
              </van-radio-group>
              <van-radio-group v-model="radio">
                <van-radio name="1">单选框 1</van-radio>
                <van-radio name="2">单选框 2</van-radio>
              </van-radio-group>
            </div>
            <div class="right">
              <van-radio-group v-model="radio">
                <van-radio name="1">单选框 1</van-radio>
                <van-radio name="2">单选框 2</van-radio>
              </van-radio-group>
              <van-radio-group v-model="radio">
                <van-radio name="1">单选框 1</van-radio>
                <van-radio name="2">单选框 2</van-radio>
              </van-radio-group>
              <van-radio-group v-model="radio">
                <van-radio name="1">单选框 1</van-radio>
                <van-radio name="2">单选框 2</van-radio>
              </van-radio-group>
              <van-radio-group v-model="radio">
                <van-radio name="1">单选框 1</van-radio>
                <van-radio name="2">单选框 2</van-radio>
              </van-radio-group>
              <van-radio-group v-model="radio">
                <van-radio name="1">单选框 1</van-radio>
                <van-radio name="2">单选框 2</van-radio>
              </van-radio-group>
            </div>
          </div>
          <div class="bottom">
            <van-button type="warning">警告按钮</van-button>
            <van-button type="danger">危险按钮</van-button>
          </div>
        </div>
      </van-dropdown-item>
    </van-dropdown-menu>
  </div>
</template>

<script>
export default {
  name: 'VerticalStepBar',

  props: {
    steps: {
      type: Array,
      required: true
    },
    currentStep: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      value1: 0,
      value2: 'a',
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' }
      ]
    }
  },
  methods: {}
}
</script>

<style>
.content {
  height: 500px;
}

.drop {
  height: 500px;
  width: 100%;
  background: #fff;
}

.top {
  height: 400px; /* 保持固定高度 */
  width: 100%;
  display: flex;
  overflow: auto;
}

.left {
  min-width: 600px;
  height: 600px; /* 超过顶部高度 */
}

.middle {
  min-width: 600px;
  height: 600px; /* 超过顶部高度 */
}

.right {
  min-width: 600px;
  height: 600px; /* 超过顶部高度 */
}

.bottom {
  height: 100px;
  display: flex;
  align-items: center;
  border-top: 1px solid #eaeaea;
}

.van-button {
  width: 50%;
}

::-webkit-scrollbar {
  display: block !important;
  /* 滚动条整体样式 */
  width: 10px; /* 高宽分别对应横竖滚动条的尺寸 */
  height: 8px;
}
 
::-webkit-scrollbar-thumb {
  /* 滚动条里面小方块 */
  border-radius: 10px;
  box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #d3d3d3;
}
 
::-webkit-scrollbar-track {
  /* 滚动条里面轨道 */
  border-radius: 10px;
  background: #ededed;
}
</style>


