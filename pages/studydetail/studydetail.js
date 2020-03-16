// pages/order/order.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currtab: 0,
    swipertab: [{
      name: '任务',
      index: 0
    }, {
      name: '章节',
      index: 1
    }, {
      name: '更多',
      index: 2
    }],

    alreadyOrder: [{
      ordertime: "JAVA课",
      orderstate: "未完成",
      pic: "/images/ICON/ks.jpg"
    }],

    waitPayOrder: [{
      orderstate: "第一节：JAVA入门",
      state:"未看",
    },
      {
        orderstate: "第二节：JAVA基础",
        state: "未看",
      },
      {
        orderstate: "第三节：JAVA基础巩固",
        state: "未看",
      },],
    
    classdetail:
      {
        stime:"2019.4.14",
        etime:"2019.4.20",
        jindu:"70%",
        fen:60
      }
    


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    // 页面渲染完成
    this.getDeviceInfo()
    this.orderShow()
  },

  getDeviceInfo: function() {
    let that = this
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          deviceW: res.windowWidth,
          deviceH: res.windowHeight
        })
      }
    })
  },

  tozhangjie: function () {
    wx.navigateTo({
      url: '/pages/studydetail/zhangjie/zhangjie',
    })
  },
  totaolun: function () {
    wx.navigateTo({
      url: '/pages/studydetail/taolun/taolun',
    })
  },
  todayi: function () {
    wx.navigateTo({
      url: '/pages/studydetail/dayi/dayi',
    })
  },
  tojilu: function () {
    wx.navigateTo({
      url: '/pages/studydetail/jilu/jilu',
    })
  },
  totest: function () {
    wx.navigateTo({
      url: '/pages/test/test',
    })
  },

  /**选项卡点击切换
   */
  tabSwitch: function(e) {
    var that = this
    if (this.data.currtab === e.target.dataset.current) {
      return false
    } else {
      that.setData({
        currtab: e.target.dataset.current
      })
    }
  },

  tabChange: function(e) {
    this.setData({
      currtab: e.detail.current
    })
    this.orderShow()
  },

  orderShow: function() {
    let that = this
    switch (this.data.currtab) {
      case 0:
        that.alreadyShow()
        break
      case 1:
        that.waitPayShow()
        break
      case 2:
        that.lostShow()
        break
    }
  },


  alreadyShow: function() {
    var that = this
  },

  waitPayShow: function() {
    var that = this
  },

  lostShow: function() {
    var that = this
    that.setData({
      lostOrder: [{
        ordertime: "我在学",
        orderstate: "我在学",
      }]
    })
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})