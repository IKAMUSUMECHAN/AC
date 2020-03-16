// pages/register/register.js
var app = getApp();
Page({
  data: {
    phone: '',
    nickname: '',
    password: ''
  },

  // 获取输入手机号
  handleInputPhone: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },

  // 获取输入昵称
  handleInputNickname: function (e) {
    this.setData({
      nickname: e.detail.value
    })
  },

  // 获取输入密码
  handleInputPassword: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  onLoad: function (options) {
    var that = this
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },

  // 登录
  submit: function () {
    if (this.data.phone.length == 0 || this.data.password.length == 0 || this.data.nickname.length == 0) {
      wx.showToast({
        title: '手机号,密码和昵称不能为空',
        icon: 'none',
        duration: 1000
      })
    } else {

      wx.request({
        url: "https://hongguangxin20.com/ACXingAo-user-mobile/MUsers/registered.do",
        method: "POST",
        data: {
          email: this.data.nickname,
          userNikename: this.data.userInfo.nickName,
          phoneNumber: this.data.phone,
          userPassword: this.data.password,
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
      })

      wx.showToast({
        title: '注册成功',
        icon: 'success',
        duration: 1000
      })
      setTimeout(function () {
        wx.redirectTo({
          url: '/pages/login/login',
        })
      }, 1000)
    }
  }
})