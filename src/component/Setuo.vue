<template>
  <div class="content">
    <div class="list">
      <div class="list_left"></div>
      <div class="list_right">
        <div>发起流程</div>
        <div>内容为xx</div>
      </div>
      <div class="line"></div>
    </div>
    <div class="list">
      <div class="list_left"></div>
      <div class="list_right">
        <div>发起流程</div>
        <div>内容为xx</div>
      </div>
    </div>
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
      list: [
        {
          name: '发起流程',
          text: '内容为xx',
          time: '2024-05-25'
        },
        {
          name: '支行部经理',
          text: '666666'
        }
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

.list {
  height: 60px;
  background: #ffffff;
  display: flex;
  position: relative;
}
.list_left {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s all;
}
.list_left::before {
  content: '';
  height: 8px;
  width: 8px;
  background: #d9d9d9;
  border-radius: 50%;
}
.line {
  position: absolute;
  top: 10px;
  left: 5px;
  width: 1px;
  height: 100%;
  border-left: 1px dashed blue;
}
</style>


