// pages/login/login.js
var app = getApp();
Page({
  data: {
    phone: '',
    password: '',
    a: null,
    timer: 1,
    userid: [],
    user:{},
  },

  // 获取输入账号
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },

  // 获取输入密码
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  register: function () {
    wx.navigateTo({
      url: '/pages/register/register',
    })
  },

  toepassword: function (e) {
    wx.navigateTo({
      url: '/pages/epassword/epassword',
    })
  },
  // 登录
  login: function () {
    var that = this;
    if (this.data.phone.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '用户名和密码不能为空',
        icon: 'none',
        duration: 1000
      })
    } else {
      wx.request({
        url: "https://hongguangxin20.com/ACXingAo-user-mobile/MUsers/login.do",
        method: "POST",
        data: {
          phoneNumber: this.data.phone,
          userPassword: this.data.password,
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        success: function (res) {
          that.setData({
            user: res.data            //将后台初始化的值赋值给页面
          })
          that.data.a = that.data.user.user_id
        },
      })
  
    }
    this.panduan();
  },

  panduan: function (e) {
    if (this.data.a != null) {
      wx.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 1000
      }),
      app.globalData.userid = this.data.a
      setTimeout(function () {
        wx.switchTab({
          url: '/pages/class/class',
        })
      }, 1000)
    }
    if (this.data.a == null && this.data.timer == 1 && this.data.phone.length != 0 && this.data.password.length != 0) {
      wx.showToast({
        title: '手速太快了，再试一次吧',
        icon: 'none',
        duration: 1000
      })
    }
    if (this.data.a == null && this.data.timer == 2) {
      wx.showToast({
        title: '登录失败,请检查用户名或密码',
        icon: 'none',
        duration: 1000
      })
    }
  }

})