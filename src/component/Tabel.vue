<template>
  <van-list :offset="60" v-model="isLoading" :finished="finished" :finished-text="finishedText" @load="onLoad" :immediate-check="false">
    <!-- <div class="table_detail"> -->
    <table class="table_content" id="table" ref="table">
      <thead>
        <tr>
          <th>文档类型</th>
          <th style="width: 148px">文件名称</th>
          <th>项目阶段</th>
          <th>任务编码</th>
          <th>文件类型</th>
          <th>上传人</th>
          <th>上传时间</th>
        </tr>
      </thead>
      <tbody class="table_tbody">
        <tr v-for="(item, index) in fileListsShow" :key="index">
          <td>
            {
            { item.documentTypeName }}
          </td>
          <td>
            {
            { item.documentName }}
          </td>
          <td>
            {
            { item.projectStageName }}
          </td>
          <td>
            {
            { item.taskCode }}
          </td>
          <td>
            {
            { item.fileType }}
          </td>
          <td>
            {
            {item.fileType }}
          </td>
          <td>
            {
            {item.fileType }}
          </td>
          <td>
            {
            {item.fileType }}
          </td>
          <td>
            {
            {item.fileType }}
          </td>
          <td>
            {
            {item.fileType }}
          </td>
          <td>
            {
            {item.fileType }}
          </td>
          <td>
            {
            {item.fileType }}
          </td>
          <td>
            {
            {item.fileType }}
          </td>
        </tr>
      </tbody>
    </table>
    <div class="bb" v-if="isLoading || finished" id="bb"></div>
  </van-list>
</template>


<script>
export default {
  data() {
    return {
      pageControl: {
        pageNum: 1,
        pageSize: 15 // 分页
      },
      fileLists: [], // 总数据
      fileListsShow: [
        { documentTypeName: 254545, documentName: '8484848', projectStageName: 5545454, taskCode: 5454848, fileType: 554545 },
        { documentTypeName: 254545, documentName: '8484848', projectStageName: 5545454, taskCode: 5454848, fileType: 554545 },
        {
          documentTypeName: 254545,
          documentName: '8484848',
          projectStageName: 5545454,
          taskCode: 5454848,
          fileType: 554545
        },
        { documentTypeName: 254545, documentName: '8484848', projectStageName: 5545454, taskCode: 5454848, fileType: 554545 }
      ],
      obj: null,
      finished: true, // 上拉加载完毕
      finishedText: '没有更多了',
      isLoading: true, // 上拉加载
      json: {},
      totalPageNumber: 0,
      gotop: false,
      scrolltopObject: null,
      projectId: this.$route.query.projectId,
      formStatus: this.$route.query.formStatus,
      archiveId: this.$route.query.businessId,
      archiveDocKeyword: '', // 过滤内容
      dateFormatter: '',
      list: [
        {
          name: '小刚',
          childrenList: [
            { name: 'xiaohong', value: 52 },
            { name: 'xiaosss', value: 36 },
            { name: 'xiag', value: 42 }
          ]
        },
        {
          name: '小对',
          childrenList: [
            { name: '个人钻石', value: 26 },
            { name: '私钻客户代表', value: 12 },
            { name: '按计划的客户代发', value: 12 },
            { name: '啥十三点私人啊都会', value: 32 },
            { name: '啥十钻石人啊都会', value: 32 },
             { name: '啥十三点钻石啊都会', value: 32 },
          ]
        }
      ]
    }
  },
  computed: {},
  created() {},

  beforeDestroy() {
    // 销毁时，删除监听滚动事件，否则其他.vue文件也会受影响
    window.removeEventListener('scroll', this.throttle)
  },
  mounted() {
    // 挂载时，添加监听滚动事件，然后用 throttle 方法进行处理
    window.addEventListener('scroll', this.throttle, true)
    this.getList()
  },

  methods: {
    throttle(event) {
      const scrollBottom = event.target.scrollHeight - event.target.scrollTop - event.target.clientHeight
      this.gotop = event.target.scrollTop > 500
      this.scrolltopObject = event
      // 数据不能加载了
      if (this.pageControl.pageNum > this.totalPageNumber) {
        const finishedText = document.getElementsByClassName('van-list__finished-text')[0]
        if (scrollBottom <= 1.5) {
          finishedText.style.bottom = '-1px'
        } else if (scrollBottom > 1.5) {
          finishedText.style.bottom = `-${scrollBottom}px`
        }
      }
    },
    // 上拉加载更多
    onLoad() {
      this.pageControl.pageNum++
      if (this.pageControl.pageNum > this.totalPageNumber) {
        this.finished = true
        this.isLoading = true
      } else {
        setTimeout(() => {
          this.fileListsShow = this.fileListsShow.concat(this.json[this.pageControl.pageNum])
          this.$nextTick(() => {
            this.finished = false
            this.isLoading = false
          })
        }, 500)
      }
    },
    // 回到顶部
    toTop() {
      let top = this.scrolltopObject.target.scrollTop
      const timeTop = setInterval(() => {
        this.scrolltopObject.target.scrollTop = top -= 50
        if (top <= 0) {
          clearInterval(timeTop)
        }
      }, 10)
    },
    // 假分页
    fakePage() {
      const list = [...this.fileLists]
      const pageSize = this.pageControl.pageSize
      const json = {}
      const totalPageNumber = Math.ceil(list.length / pageSize)
      let num = 0
      for (let i = 0; i < totalPageNumber; i++) {
        json[i + 1] = list.slice(num, num + pageSize)
        num = num + pageSize
      }
      this.json = json
      this.totalPageNumber = totalPageNumber
      this.fileListsShow = this.fileListsShow.concat(this.json[this.pageControl.pageNum])
      this.$nextTick(() => {
        this.isLoading = false
        this.finished = false
      })
    }
    // 根据项目编码获取归档文案列表
    // async getList () {
    //   Toast.loading({
    //     message: '加载中...',
    //     forbidClick: true
    //   })
    //   const params = {
    //     documentNameLike: this.archiveDocKeyword,
    //     documentTypeNameLike: this.archiveDocKeyword,
    //     projectStageNameLike: this.archiveDocKeyword,
    //     page: this.pageControl.pageNum,
    //     size: this.pageControl.pageSize,
    //     projectId: this.projectId,
    //     formStatus: this.formStatus,
    //     archiveId: this.archiveId
    //   }
    //   try {
    //     const result = await getLibraryList(params)
    //     this.fileLists = result
    //     this.fakePage()
    //     Toast.clear()
    //   } catch (error) {
    //     Toast.clear()
    //   }
    // }
  }
}
</script>

<style lang="scss" scoped>
html,
body {
  overflow: hidden;
}
::v-deep .van-list__finished-text,
::v-deep .van-list__loading {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 211;
}
.bb {
  height: 50px;
  line-height: 50px;
}
p {
  margin: 0px;
}
.aa {
  height: 100%;
  overflow: hidden;
}

table,
div {
  margin: 0px;
  padding: 0px;
}

.van-list {
  width: 100%;
  /* 固定滚动高度 */
  height: calc(100vh - 58px);
  overflow: auto;
  table {
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;
  }
  td,
  th {
    border-right: 1px solid rgb(229, 229, 229);
    border-bottom: 1px solid #ebebeb;
    width: 100px;
    color: #333;
    box-sizing: border-box;
    background-color: #ffffff;
    font-size: 12px;
    text-align: center;
    padding: 7px;
    word-wrap: break-word;
  }
  th {
    background: #fafafa;
    color: #000;
    font-weight: 600;
    height: 47px;
  }
  // 固定首列
  td:first-child,
  th:first-child {
    width: 100px;
    position: sticky;
    left: -1px;
    z-index: 1;
    padding-left: 5px;
  }
  // 固定表头
  thead tr th {
    position: sticky;
    top: -1px;
  }
  th:first-child {
    z-index: 2;
  }
  // 固定表头
  tfoot tr th {
    position: sticky;
    bottom: 0;
    color: #333;
    font-weight: bold;
    border-bottom: 0;
  }
  th:first-child {
    z-index: 2;
  }
}
</style>