<template>
  <div class="item_list" >
    <div :class="['left', { 'expired': tab == 1 }]" >
      <div class="dapqi">即将到期</div>
      <div class="content">
        <div class="huodong">活动</div>
        <div class="zige">资格券</div>
      </div>
    </div>
    <div class="middle">
        <div>D197-南京银行8月积分商品</div>
        <div>D197-8月积分随心兑</div>
        <div>2024-08-09至2024-08-31</div>
    </div>
    <div class="right">
     
    </div>
  </div>
</template>

<script>
export default {
    props:{
        tab:{
            default:0,
            type:Number
        }
    },
  data() {
    return {

    }
  },
  methods:{

  }
}
</script>

<style>
.item_list {
  height: 160px;
  background-color: #ffffff;
  margin: 20px 0;
  display: flex;
  width: calc(100% - 2px);
}



.item_list .left {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically */
  height: 100%; /* Example height, adjust as needed */
  width: 25%; /* Example width, adjust as needed */
  background-color: #fee1cc;
}


.item_list .dapqi {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fd7b7c;
}
.left.expired {
  background-color: #d3d3d3; /* Gray background color */
  color: #a9a9a9; /* Gray text color */
}

.left.expired > * {
  background-color: #d3d3d3; /* Inherit background color */
  color: #a9a9a9; /* Inherit text color */
}

.item_list .content {
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  height: 100%; 
}

.item_list .huodong,
.item_list .zige {
  margin: 5px 0; 
}

.middle {
  flex: 1;
  height: 100%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  /* padding-left: 16px; */
  gap:10px

}

.right {
  width: 25%;
  
  height: 100%;
  background: url("../assets/imges/780.jpg") no-repeat center center / cover;
   background-size: 80%;
}
</style>
