Component({
  properties: {
    list: {
      type: Array,
      value: []
    },
    indicatorDots: {
      type: Boolean,
      value: true
    },
    vertical: {
      type: Boolean,
      value: false
    },
    autoplay: {
      type: Boolean,
      value: true
    },
    circular: {
      type: Boolean,
      value: true
    },
    interval: {
      type: Number,
      value: 4000
    },
    duration: {
      type: Number,
      value: 1000
    },
    mode: {
      type: String,
      value: 'aspectFit'
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})