<template>
  <div class="imge_conent">
    <div class="item_list" v-for="(item,index) in imgList" :key="index" @click="clickImage">
      <img :src="item" alt class="image" />
    </div>
    <div v-if="flag" class="preview" @touchstart="touchStart" @touchend="touchEnd">
      <van-image-preview v-model="flag" :images="imgList"></van-image-preview>
    </div>
    <van-dialog
      v-model="showShare"
      :show-confirm-button="true"
      :message="message"
      :confirm-button-text="text"
      :cancel-button-text="text2"
      show-cancel-button
      @confirm="confirm"
      @cancel="cancel"
    ></van-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false,
      text2: '取消',
      text: '确认',
      message: '确认保存图片吗',
      imgList: ['https://img01.yzcdn.cn/vant/apple-1.jpg'],
      touchstartTime: '',
      touchStartX: 0,
      touchStartY: 0,
      duration: 0,
      showShare: false
    }
  },
  methods: {
    clickImage() {
      this.flag = true
    },
    clickPreview() {
      this.flag = false
    },
    touchStart(event) {
      this.touchstartTime = new Date().getTime()
      this.touchStartX = event.changedTouches[0].clientX // this.touchStartX按下时的横轴坐标
      this.touchStartY = event.changedTouches[0].clientY // this.touchStartY按下时的纵轴坐标
    },
    touchEnd() {
      this.touchEndX = event.changedTouches[0].clientX // this.touchEndX释放时的横轴坐标
      this.touchEndY = event.changedTouches[0].clientY // this.touchEndY释放时的纵轴坐标
      this.touchendTime = new Date().getTime()
      this.duration = this.touchendTime - this.touchstartTime
      // console.log("间隔时间为",this.duration)

      // 非左右滑动
      if (Math.abs(this.touchEndX - this.touchStartX) < 10 && Math.abs(this.touchEndY - this.touchStartY) < 10) {
        if (this.duration >= 800) {
          // 时间大于800毫秒,长按
          // console.log("非左右滑动时间大于800毫秒,长按")
          this.showShare = true // 分享模块显示出阿来
        } else {
          // 时间小于800毫秒,单纯的点击事件
          // console.log("非左右滑动时间小于800毫秒,单纯的点击事件")
          this.flag = false
          this.showShare = false
          // this.$emit('func',this.flag)   // 同下一行
          this.$emit('func', false) // 子组件修改父组件传递过来的值并返回给父组件
        }
      } else {
        // 左右滑动
        if (this.duration >= 800) {
          // 时间大于800毫秒,单纯的点击事件
          // console.log("左右滑动时间大于800毫秒,单纯的点击事件")
          this.flag = true
          this.showShare = false
        } else {
          // 时间小于800毫秒
          // console.log("左右滑动时间小于800毫秒,隐藏分享/下载按钮")
          this.flag = true
          this.showShare = false
          // this.$emit('func',false)
        }
      }
    },
    cancel() {
      this.showShare = false
    },
    confirm() {
      this.imageBase64(this.imgList[0])
        .then(base64 => {
          console.log('Base64 Image:', base64)
        })
        .catch(error => {
          console.error('Error:', error)
        })
      // console.log(base64)
    },
    imageBase64(img) {
      return new Promise((resolve, reject) => {
        // 使用 fetch 获取图片
        fetch(img)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok')
            }
            return response.blob() // 获取 Blob 对象
          })
          .then(blob => {
            const reader = new FileReader()
            reader.onloadend = function() {
              resolve(reader.result) // 返回 Base64 编码
            }
            reader.onerror = function(error) {
              reject(error) // 处理错误
            }
            reader.readAsDataURL(blob) // 转换为 Base64
          })
          .catch(error => {
            reject(error) // 处理 fetch 错误
          })
      })
    }
  }
}
</script>
<style >
.imge_conent {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
.item_list {
  width: 200px;
  height: 200px;
}
.image {
  height: 200px;
  height: 200px;
}
</style>