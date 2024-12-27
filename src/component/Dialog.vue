<template>
  <div>
    <button class="button" @click="openDialog">点击弹窗</button>
    <div style="margin-top:20px" @click="clickOpenPopup">{{time}}</div>
    <van-dialog
      v-model="showShare"
      :show-confirm-button="true"
      :message="message"
      :confirm-button-text="text"
      :cancel-button-text="text2"
      show-cancel-button
      :confirm-button-color="color"
      @confirm="confirm"
      @cancel="cancel"
      :before-close="onBeforeClose"
    >
      <template #default>
        <van-field
          v-model="message"
          rows="2"
          autosize
          label="留言"
          type="textarea"
          maxlength="50"
          placeholder="请输入留言"
          show-word-limit
          @input="handelChange"
        />
      </template>
    </van-dialog>
    <van-popup v-model="showPopup" position="bottom" :style="{ height: '30%' }">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title="选择年月日"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
        @cancel="showPopup=false"
        @confirm="comfirmPopup"
      />
    </van-popup>
  </div>
</template>
<script>
import { Toast } from 'vant'
export default {
  data() {
    return {
      message: '',
      showShare: false,
      time: '2024-11-14',
      color: '#d7d7d7',
      currentDate: new Date(),
      minDate: new Date(),
      maxDate: new Date(),
      text: '',
      text2: '',
      showPopup: false,
      deatilList: [
        {
          name: '效益指标',
          type: '205',
          zhdh: 'apakh_rtl',
          childname: '低成本一般性',
          value: '2097.22',
          value2: '2545.00'
        },
        {
          name: '效益指标',
          type: '205',
          zhdh: 'apakh_rtl',
          childname: '有效性',
          value: '2097.22',
          value2: '2545.00'
        },
        {
          name: '效益指标',
          type: '205',
          zhdh: 'apakh_rtl',
          childname: '可观性',
          value: '2097.22',
          value2: '2545.00'
        },
        {
          name: '效益指标',
          type: '205',
          zhdh: 'apakh_rtl',
          childname: '低成本一般性',
          value: '2097.22',
          value2: '2545.00'
        },
        {
          name: '效益指标',
          type: '205',
          zhdh: 'apakh_rtl',
          childname: '有效性',
          value: '2097.22',
          value2: '2545.00'
        },
        {
          name: '客户指标',
          type: '205',
          zhdh: 'apakh_rtl',
          childname: '可观性',
          value: '2097.22',
          value2: '2545.00'
        },
        {
          name: '效益指标',
          type: '205',
          zhdh: 'apakh_rtl',
          childname: '低成本一般性',
          value: '2097.22',
          value2: '2545.00'
        },
        {
          name: '客户指标',
          type: '205',
          zhdh: 'apakh_rtl',
          childname: '有效性',
          value: '2097.22',
          value2: '2545.00'
        },
        {
          name: '效益指标',
          type: '205',
          zhdh: 'apakh_rtl',
          childname: '可观性',
          value: '2097.22',
          value2: '2545.00'
        },
        {
          name: '客户指标',
          type: '205',
          zhdh: 'apakh_rtl',
          childname: '有效性',
          value: '2097.22',
          value2: '2545.00'
        },
        {
          name: '效益指标',
          type: '205',
          zhdh: 'apakh_rtl',
          childname: '可观性',
          value: '2097.22',
          value2: '2545.00'
        },
        {
          name: '扣分项',
          type: '205',
          zhdh: 'apakh_rtl',
          childname: '有效性',
          value: '2097.22',
          value2: '2545.00'
        },
        {
          name: '扣分项',
          type: '205',
          zhdh: 'apakh_rtl',
          childname: '可观性',
          value: '2097.22',
          value2: '2545.00'
        }
      ],
      infoList: [
        { name: '零售存款合计', id: 'A00046321', value: '2' },
        { name: '互金活期存款', id: 'A000463030', value: '3' },
        { name: '其他零售活期存款', id: 'A000463037', value: '72' },
        { name: '个人平台通知存款', id: 'A000463x33', value: '2' },
        { name: '个人结构性存款', id: 'A000463036', value: '3' },
        { name: '互金定期存款', id: 'A000463038', value: '3' },
        { name: '中间业务收入', id: 'A000463993', value: '3' },
        {
          name: '公墓金额',
          id: 'A000463815',
          value: '32'
        },
        {
          name: '贵金属',
          id: 'A0004630287',
          value: '32'
        }
      ],
      updateList: [
        {
          name: '零售存款合计',
          id: 'A00046321',
          value: '32',
          chilrenList: [
            {
              name: '零售活期存款',
              id: 'A000463027',
              value: '32',
              chilrenList: [
                { name: '互金活期存款', id: 'A000463030', value: '32' },
                { name: '信用卡益缴款', id: 'A000463031', value: '32' },
                { name: '个人本汇票', id: 'A000463032', value: '32' },
                { name: '其他零售活期存款', id: 'A000463037', value: '32' }
              ]
            },
            {
              name: '零售定期存款',
              id: 'A000463033',
              value: '32',
              chilrenList: [
                { name: '个人平台通知存款', id: 'A000463x33', value: '32' },
                { name: '个人平台定期存款', id: 'A000463035', value: '32' },
                { name: '个人结构性存款', id: 'A000463036', value: '32' },
                { name: '互金定期存款', id: 'A000463038', value: '32' }
              ]
            }
          ]
        },
        {
          name: '中间业务收入',
          id: 'A000463993',
          value: '32',
          chilrenList: [
            {
              name: '公墓金额',
              id: 'A000463815',
              value: '32'
            },
            {
              name: '贵金属',
              id: 'A0004630287',
              value: '32'
            },
            { name: '国债中收金额', id: 'A0004630251', value: '32' }
          ]
        }
      ],
      template: [
        {
          name: '零售存款合计',
          id: 'A00046321',
          value: '32',
          chilrenList: [
            { name: '零售活期存款', id: 'A000463027', value: '32', chilrenList: [] },
            { name: '零售定期存款', id: 'A000463033', value: '32', chilrenList: [] }
          ]
        },
        {
          name: '中间业务收入',
          id: 'A000463993',
          value: '32',
          chilrenList: [
            { name: '公墓金额', id: 'A000463815', value: '32', chilrenList: [] },
            { name: '贵金属', id: 'A0004630287', value: '32', chilrenList: [] },
            { name: '国债中收金额', id: 'A0004630251', value: '32', chilrenList: [] }
          ]
        }
      ]
    }
  },
  methods: {
    openDialog() {
      this.showShare = true
      const update = this.deatilList.reduce((acc, item) => {
        // 查找是否已经存在该 name 的项
        let group = acc.find(g => g.name === item.name)

        // 如果没有找到该项，则创建新项
        if (!group) {
          group = { name: item.name, chilrenList: [] }
          acc.push(group)
        }

        // 将当前项添加到对应的 chilrenList 中
        group.chilrenList.push(item)

        return acc
      }, [])
      console.log(update)
    },
    formatter(type, val) {
      if (type === 'year') {
        return `${val}年`
      } else if (type === 'month') {
        return `${val}月`
      }
      return val
    },
    async onBeforeClose(action, done) {
      if (action === 'confirm') {
        // 点击确定走这里
        if (this.message) {
          // 登录成功
          done(true)
        } else {
          // 登录失败，阻止弹窗关闭
          // done()里可以放true和false来控制
          Toast('请输入拒绝原因')
          return done(false) // 阻止弹窗关闭
        }
      } else {
        // 点击取消走这里
        done(true) // 关闭弹窗, true可以省略
      }
    },
    clickOpenPopup() {
      this.showPopup = true
      const currentDate = new Date()
      currentDate.setFullYear(currentDate.getFullYear() - 1) // 设置为一年前的时间
      this.minDate = currentDate
      this.currentDate = new Date(this.time)
      console.log(this.transformInfoList(this.infoList), '66666')
    },
    comfirmPopup() {
      this.showPopup = false
    },
    confirm() {},
    cancel() {},
    handelChange() {
      if (this.message) {
        this.color = 'blue'
      } else {
        this.color = '#d7d7d7'
      }
    },
   transformInfoList(infoList) {
  const result = [];

  // 创建一个 map 来存储每个节点，以便能快速查找父节点
  const map = {};

  // 将所有信息存储在 map 中
  infoList.forEach(item => {
    map[item.id] = { ...item, chilrenList: [] };
  });

  // 遍历 infoList，根据 ID 和层级关系将子节点归类
  infoList.forEach(item => {
    if (item.id.includes('A00046321')) { // 例：零售存款合计
      const parent = map['A00046321'];
      if (item.id === 'A000463027' || item.id === 'A000463033') {
        parent.chilrenList.push(map[item.id]);
      }
    } else if (item.id.includes('A000463993')) { // 例：中间业务收入
      const parent = map['A000463993'];
      if (item.id === 'A000463815' || item.id === 'A0004630287') {
        parent.chilrenList.push(map[item.id]);
      }
    }
  });

  // 返回包含了所有的父节点
  result.push(map['A00046321']);
  result.push(map['A000463993']);

  return result;
}
  }
}
</script>