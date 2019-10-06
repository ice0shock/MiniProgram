// components/tabContorl/tabControl.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      titles:{
        type:Array,
        value:[]
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
    current:0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabControlBind(event){
    this.setData({
      current:event.currentTarget.dataset.index
    })
      
    }
  }
})
