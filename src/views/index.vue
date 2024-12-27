<template>
  <div class="result-list">
    <van-tabs v-model="active" @click="clickTab">
      <van-tab title="标签 1">
        <Table></Table>
      </van-tab>
      <van-tab title="标签 2">
        <!-- <ListColounm :tab="1"></ListColounm> -->
        <van-popover v-model="showPopover" trigger="click" :actions="actions" @select="onSelect">
          <template #reference>
            <van-button type="primary">浅色风格</van-button>
          </template>
        </van-popover>
      </van-tab>
      <van-tab title="标签 3">
        <Dropmenu />
      </van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
    </van-tabs>
    <van-tabbar v-model="active">
      <van-tabbar-item badge="3">
        <span>自定义</span>
        <template #icon="props">
          <img :src="props.active ? icon.active : icon.inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
    <Ball />
  </div>
</template>

<script>
// import ListColounm from '../component/ListColounm.vue'
// import Setuo from '../component/Setuo.vue'
// import Dialog from '../component/Dialog.vue'
// import SaveImaage from '../component/SaveImaage.vue'
import Table from '../component/Tabel.vue'
import Dropmenu from '../component/Dropmenu.vue'
import Ball from '../component/Ball.vue'
export default {
  components: {
    // ListColounm,
    // SaveImaage,
    // // Setuo,
    Dropmenu,
    Ball,
    // Dialog,
    Table,
  },
  data() {
    return {
      tab: 0,
      active: 0,
      showPopover: false,
      // 通过 actions 属性来定义菜单选项
      actions: [{ text: '选项一' }, { text: '选项二' }, { text: '选项三' }],
      icon: {
        active: 'https://img01.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img01.yzcdn.cn/vant/user-inactive.png'
      },
      productList: [
        {
          title: '定期',
          money: 525885755,
          cardIsuser: '南京银行',
          time: '2024-12-12'
        },
        {
          title: '定期',
          money: 525885755,
          cardIsuser: '南京银行',
          time: '2024-12-12'
        }
      ],
      productList2: [
        {
          title: '活期',
          money: 525885755,
          cardIsuser: '南京银行',
          time: '2024-12-12'
        },
        {
          title: '活期',
          money: 525885755,
          cardIsuser: '南京银行',
          time: '2024-12-12'
        }
      ],
      updatedList: [],
      steps: [{ label: '步骤 1' }, { label: '步骤 2' }, { label: '步骤 3' }, { label: '步骤 4' }],
      currentStep: 0
    }
  },
  methods: {
     onSelect(action) {
      console.log(action)
    },
    handleClick(item) {
      console.log(item, '111111')
      this.tabs = item
      if (item === 0) {
        this.getList1()
      } else if (item === 1) {
        this.getList2()
      } else if (item === 2) {
        this.getList3()
      }
    },
    clickTab(item, index) {
      console.log(item, index, '6666')
      this.tab = item
      this.getLast53Weeks()
      const mergedList = this.productList.concat(this.productList2)
      const nameMap = {
        活期: '活期存款',
        定期: '定期存款'
      }
      this.updatedList = mergedList.map(item => ({
        ...item,
        name: nameMap[item.title] || item.name // 如果没有匹配，保持原样
      }))

      const reslut = this.mergeProducts(this.updatedList)
      console.log(mergedList, reslut, '666666')
    },
    mergeProducts(productList) {
      const mergedProducts = productList.reduce((acc, product) => {
        if (!acc[product.title]) {
          acc[product.title] = [] // 初始化数组
        }
        acc[product.title].push(product) // 添加产品到数组
        return acc
      }, {})

      // 将结果转换为数组形式
      return Object.entries(mergedProducts).map(([title, products]) => ({
        title,
        products
      }))
    },
    getLast53Weeks() {
      const result = []
      const today = new Date() // 获取今天的日期
      const dayOfWeek = today.getDay() // 获取今天是周几（0为周日，6为周六）

      // 计算到本周一需要偏移的天数
      const dayOffsetToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek

      let currentDate = new Date(today)
      // 将日期调整到本周一
      currentDate.setDate(today.getDate() + dayOffsetToMonday)

      for (let i = 0; i < 53; i++) {
        const startOfWeek = new Date(currentDate) // 本周一
        const endOfWeek = new Date(currentDate) // 本周日
        endOfWeek.setDate(endOfWeek.getDate() + 6) // 将日期调整到本周日

        // 打印当前周的开始和结束日期
        console.log(
          `Week ${i + 1}: Start = ${startOfWeek.toISOString().split('T')[0]}, End = ${endOfWeek.toISOString().split('T')[0]}`,
          '111111'
        )

        result.push({ startOfWeek: startOfWeek, endOfWeek: endOfWeek }) // 添加到结果数组
        currentDate.setDate(currentDate.getDate() - 7) // 移动到上一周
      }

      // 由于数组是逆序的（从最近的周开始），反转数组以得到正确的顺序
      return result.reverse()
    },
    //获取季度的数据
    getQuarterTime() {
      const today = new Date()
      const currentYear = today.getFullYear()
      const currentMonth = today.getMonth() // 0-11，0代表1月，11代表12月

      // 根据当前月份计算当前季度
      const currentQuarter = Math.floor(currentMonth / 3) + 1

      // 存储最近五个季度的信息
      const lastFiveQuarters = []

      // 循环计算最近五个季度
      for (let i = 0; i < 5; i++) {
        let year = currentYear
        let quarter = currentQuarter - i

        // 如果季度小于1，说明需要往前一年
        if (quarter < 1) {
          quarter += 4 // 回到第4季度
          year -= 1 // 减去一年
        }

        lastFiveQuarters.push({ year, quarter })
      }

      // 转换为层级结构的对象数组
      const quarterHierarchy = []

      // 先按年分组
      lastFiveQuarters.forEach(({ year, quarter }) => {
        // 查找是否已有该年份
        let yearGroup = quarterHierarchy.find(group => group.text === `${year}年`)

        if (!yearGroup) {
          // 如果没有该年份，添加新的年组
          yearGroup = { text: `${year}年`, children: [] }
          quarterHierarchy.push(yearGroup)
        }

        // 添加季度到该年份的children
        yearGroup.children.push({ text: `${quarter}季度` })
      })

      // 输出结果
      console.log(quarterHierarchy)
    }
  }
}
</script>

<style scoped lang="scss">
.result-list {
  min-height: 520px;
  padding: 17px;
  background-color: #c2e2ff;
}
</style>
