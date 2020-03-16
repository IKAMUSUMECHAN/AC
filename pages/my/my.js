
var app = getApp();
Page({

  data: {
    picture: "https://boilinggame.cn/tou/t1.png",
    nowWeatherBg: '/images/sunny-bg.png',
    name: "尺子",
    userInfo: {},
    userstate: false,
    denglu: true,
    today: {
      income: 6666
    },

    student: {
      name: '尺子',
      day: 20
    },
  },

  onLoad: function (options) {
    var that = this
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })

    if (app.globalData.userid != null) {
      that.setData({
        userstate: true
      })
      that.setData({
        denglu: false
      })
    }
  },
  onShow: function () {
    var that = this
    if (app.globalData.userid != null) {
      that.setData({
        userstate: true
      })
      that.setData({
        denglu: false
      })
    }
  },
  tomypinglun :function (e) {
    wx.navigateTo({
      url: '/pages/my/pinglun/pinglun',
    })
  },
  tologin: function (e) {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  toorder: function (e) {
    wx.navigateTo({
      url: '/pages/my/order/order',
    })
  },
  toqianbao: function (e) {
    wx.navigateTo({
      url: '/pages/my/qianbao/qianbao',
    })
  },
  tolike: function (e) {
    wx.navigateTo({
      url: '/pages/my/like/like',
    })
  },
  toepassword: function (e) {
    wx.navigateTo({
      url: '/pages/epassword/epassword',
    })
  },
  qiandao: function () {
    wx.showToast({
      title: '签到成功',
      icon: 'success'
    })
  },
})