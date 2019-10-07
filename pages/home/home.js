// pages/home/home.js

import {
  getMultiData,
  getGoods
} from '../../service/home'
const types = ['pop', 'new', 'sell']
Page({

  /**
   * 页面的初始数据
   */
  data: {
    backData: false,
    current: 0,
    banners: [],
    recommends: [],
    titles: ['流行', '新款', '精选'],
    goods: {
      pop: {
        page: 0,
        list: []
      },
      new: {
        page: 0,
        list: []
      },
      sell: {
        page: 0,
        list: []
      }
    },
    currentType: "pop"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this._getMultiData()
    this._getGood('pop')
    this._getGood('new')
    this._getGood('sell')
  },

  _getMultiData() {
    getMultiData().then(res => {
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;
      this.setData({
        banners,
        recommends
      })
    })
  },
  _getGood(type) {
    const page = this.data.goods[type].page + 1
    getGoods(type, page).then(res => {
      const list = res.data.data.list
      const dataList = `goods.${type}.list`
      const pageList = `goods.${type}.page`
      const oldList = this.data.goods[type].list
      oldList.push(...list)
      this.setData({
        [dataList]: oldList,
        [pageList]: page
      })
    })
  },


  handleTabClick(event) {
    const index = event.detail.index
    this.setData({
      currentType: types[index]
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    this._getGood(this.data.currentType)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  onPageScroll: function(options) {
    const scrollTop = options.scrollTop
    const flag = scrollTop >= 800
    if (flag != this.data.backData) {
      this.setData({
        backData: flag
      })
    }


  }


})