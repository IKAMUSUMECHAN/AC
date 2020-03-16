// pages/order/order.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currtab: 0,
    courseId: null,
    swipertab: [{
      name: '课程介绍',
      index: 0
    }, {
      name: '课程表',
      index: 1
    }, {
      name: '大家评论',
      index: 2
      }, 
    ],
    cell:{},
    classdetail:{
      cp:"https://boilinggame.cn/class/javad1.jpg"
    },
    waitPayOrder: [{
      ordertime: "1.基础",
      orderstate: "2",
    }, {
        ordertime: "2.入门",
        orderstate: "2",
      }],
    lostOrder: [{
      ordertime: "带带小同学",
      orderstate: "不错",
      pic: "https://boilinggame.cn/tou/ruya.jpg"
    },
      {
        ordertime: "刷题哥",
        orderstate: "这位老师讲的真的很好",
        pic: "https://boilinggame.cn/tou/yaoshui.jpg"
      }
    ]


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.data.courseId = options.courseId;
    wx.request({
      url: "https://hongguangxin20.com/ACXingAo-question-mobile/MCourse/findCourseByCourseId.do",
      method: "POST",
      data: {
        courseId:that.data.courseId
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        that.setData({
          cell: res.data            //将后台初始化的值赋值给页面
        })
        console.log(that.data.cell);
      },
    })

    wx.request({
      url: "https://hongguangxin20.com/ACXingAo-question-mobile/MComments/findCommentsByCourseId.do",
      method: "POST",
      data: {
        courseId: that.data.courseId
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        that.setData({
          lostOrder: res.data            //将后台初始化的值赋值给页面
        })
        console.log(that.data.lostOrder);
      },
    })

  },

  tohome: function (e) {
    wx.switchTab({
      url: '/pages/class/class',
    })
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
    that.setData({
      alreadyOrder: [{
        ordertime: "JAVA课",
        orderstate: "马上开始",
        pic: "/images/wuliu.jpg"
      }]
    })

  },

  waitPayShow: function () {
    var that = this
    that.setData({

    })
  },

  lostShow: function () {
    var that = this
    that.setData({

    })
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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

  tobuy: function () {

    var that=this

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

    if (app.globalData.userid != null) {
    wx.showToast({

      title: '购买成功',

      icon: 'success',

      duration: 2000

    })
    var that = this;
    setTimeout(function hide() {
      that.setData({
        showtoast: 'none'
      })
    }, 2000)
    // 报名成功后的跳转
    setTimeout(function hide() {
      wx.switchTab({
        url: '/pages/my/my',
      })
    }, 1000)
    }
  },
  addlike: function () {
    wx.showToast({

      title: '收藏成功',

      icon: 'success',

      duration: 2000

    })
    var that = this;
    setTimeout(function hide() {
      that.setData({
        showtoast: 'none'
      })
    }, 2000)
    // 报名成功后的跳转
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})