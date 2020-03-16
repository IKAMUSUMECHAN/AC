
//index.js
//获取应用实例

var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    liuyanlist: [
      {
        headimg: "https://boilinggame.cn/tou/ruya.jpg",
        nickName: "宗哥",
        lytime: "2019.4.16",
        liuyantext: "int与Integer的区别？",
        detail:"int与Integer的区别在哪",
        da: "int是Java的原始数据类型，integer是Java为int提供的封装类。Java为每个原始类有提供了封装类：Bollean、Character、Byte、Short、Integer、Long、Float、DoubleJava提供两种类型：引用类型和原始类型， 两者具有不同的特征和用法：速度和大小、数据结构存储、缺省值（当引用类型的缺省值是null和原始类型的缺省值与他们的类型有关）"
      },
      {
        headimg: "https://boilinggame.cn/tou/yaoshui.jpg",
        nickName: "刷题哥",
        lytime: "2019.4.16",
        liuyantext: "String与StringBuffer的区别？",
        detail: "String与StringBuffer的区别在哪",
        da: "两者用来存储和操作字符串，String类提供了数值不可改变的字符串，StringBuffer类提供的字符串进行修改，当字符串数据要修改时（动态构造字符数据）就使用StringBuffer。"

      },
    ],
    gid: "",
    userInfo: {},
  },

  //授权登录
  login: function () {
    var that = this;
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo),
                that.setData({
                  nickName: res.userInfo.nickName,
                  avatarUrl: res.userInfo.avatarUrl,
                })
            }
          })
        }
      }
    })
  },

  bindGetUserInfo(e) {
    console.log(e.detail.userInfo)
  },


  formSubmit: function (e) {
    wx.showToast({
      title: '提问成功',
      icon: 'success'
    })
    var that = this;
    var liuyantext = e.detail.value.liuyantext; //获取表单所有name=liuyantext的值 
    var liuyantitle = e.detail.value.liuyantitle;
    var nickName = e.detail.value.nickname; //获取表单所有name=nickName的值 
    var headimg = e.detail.value.headimg; //获取表单所有name=headimg的值 
  },

  onPullDownRefresh: function () {
    wx.showNavigationBarLoading();
  },

  //加载最新数据
  onLoad: function (options) {
    var that = this
    this.data.gid = options.gid

    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})