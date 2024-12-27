<template>
  <div class="content">
    <div class="box" v-if="tabs ===0 ">
      <div class="box_cntent">
        <div class="left">账号</div>
        <div class="value">54544</div>
        <div class="left">身份证号</div>
        <div class="value">54544</div>
        <div class="left">年纪</div>
        <div class="value">54544</div>
        <div class="left">性别</div>
        <div class="value">54544</div>
      </div>
    </div>
    <div class="box" v-if="tabs ===1 ">
      <div class="box_cntent">
        <div class="left">份额</div>
        <div class="value">555</div>
        <div class="left">期限</div>
        <div class="value">5565</div>
        <div class="left">时间</div>
        <div class="value">54544</div>
        <div class="left">年龄</div>
        <div class="value">54544</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tab: {
      default: 0,
      type: Number
    }
  },
  data() {
    return {
      productList: [
        {
            title:'个人银行卡活期存款',
            money:5655,
            idNum:445458845,
            state:0,
            startTime:'2024-05-08'
        },
        {
            title:'个人银行卡活期存款',
            money:5655,
            idNum:445458845,
            state:0,
            startTime:'2024-05-08'
        },
        {
            title:'个人整存',
            money:5655,
            idNum:445458845,
            state:0,
            startTime:'2024-05-08'
        },
        {
            title:'个人整存',
            money:5655,
            idNum:445458845,
            state:0,
            startTime:'2024-05-08'
        },
      ]
    };
  }
};
</script>