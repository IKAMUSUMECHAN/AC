
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    liuyanlist: [
      {
        
        nickName: "带带小同学",
        lytime: "2019.4.16",
        liuyantext: "老师十分儒雅随和"
      },
      {
    
        nickName: "刷题哥",
        lytime: "2019.4.16",
        liuyantext: "喜欢这门课的同学把喜欢打在讨论区"
      },
    ],
    gid: "https://boilinggame.cn/tou/t1.png",
    userInfo: {},

  },

  toclassdetail: function (e) {
    wx.navigateTo({
      url: '/pages/classdetail/classdetail?courseId=' + e.currentTarget.id,
    })
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



  onPullDownRefresh: function () {
    wx.showNavigationBarLoading();
    var that = this
  },

  //加载最新数据
  onLoad: function (options) {
    var that = this
    this.data.gid = options.gid

    wx.request({
      url: "https://hongguangxin20.com/ACXingAo-question-mobile/MComments/findCommentsByUserId.do",
      method: "POST",
      data: {
        userId: app.globalData.userid
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        that.setData({
          liuyanlist: res.data            //将后台初始化的值赋值给页面
        })
        console.log(that.data.liuyanlist);
      },
    })

    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }

})