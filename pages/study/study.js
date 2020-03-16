// pages/order/order.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currtab: 0,
    swipertab: [{
      name: '我的课程',
      index: 0
    }, {
      name: '直播课程',
      index: 1
    }, {
      name: '大家在学',
      index: 2
    }],

    alreadyOrder: [{
      ordertime: "JAVA基础语法",
      orderstate: "开课啦",
      pic: "https://boilinggame.cn/class/javad/javad1.png"
    }, {
        ordertime: "Python入门",
        orderstate: "马上开课",
        pic: "https://boilinggame.cn/class/py/p2.png"
      }],

    waitPayOrder: [{
      ordertime: "JAVA基础语法的直播课",
      orderstate: "正在开播",
      pic: "https://boilinggame.cn/class/javad/javad1.png"
    }, {
        ordertime: "Python入门的直播课",
        orderstate: "暂未开播",
        pic: "https://boilinggame.cn/class/py/p2.png"
      }],

    lostOrder: [{
      ordertime: "初识C语言",
      orderstate: "你的同学也在学哦",
      pic: "https://boilinggame.cn/class/c/c3.png"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userid == null) {
      wx.showModal({
        title: '提示',
        content: '您还未登录，请登录',
        success: res => {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.redirectTo({
              url: '/pages/login/login',
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
            wx.switchTab({
              url: '/pages/my/my',
            })
          }
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 页面渲染完成
    this.getDeviceInfo()
    this.orderShow()
    
  },

  getDeviceInfo: function () {
    let that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          deviceW: res.windowWidth,
          deviceH: res.windowHeight
        })
      }
    })
  },

  /**
   * @Explain：选项卡点击切换
   */
  tabSwitch: function (e) {
    var that = this
    if (this.data.currtab === e.target.dataset.current) {
      return false
    } else {
      that.setData({
        currtab: e.target.dataset.current
      })
    }
  },

  tabChange: function (e) {
    this.setData({
      currtab: e.detail.current
    })
    this.orderShow()
  },

  orderShow: function () {
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


  alreadyShow: function () {
    var that = this
  },

  waitPayShow: function () {
    var that = this
  },

  lostShow: function () {
    var that = this
  },

  tostyd:function(){
    wx.navigateTo({
      url: '/pages/studydetail/studydetail',
    })
  },
  tolive: function () {
    wx.navigateTo({
      url: '/pages/live/live',
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (app.globalData.userid == null) {
      wx.showModal({
        title: '提示',
        content: '您还未登录，请登录',
        success: res => {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.redirectTo({
              url: '/pages/login/login',
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
            wx.switchTab({
              url: '/pages/my/my',
            })
          }
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})