// components/backTtop/backTtop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

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
    backTtopClick(){
      wx:wx.pageScrollTo({
        scrollTop: 0,
        duration:0,
      })
    }
  }
})
