
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    liuyanlist: [
      {
        headimg:"https://boilinggame.cn/tou/ruya.jpg",
        nickName:"带带小同学",
        lytime:"2019.4.16",
        liuyantext:"老师十分儒雅随和"
      },
      {
        headimg: "https://boilinggame.cn/tou/yaoshui.jpg",
        nickName: "刷题哥",
        lytime: "2019.4.16",
        liuyantext: "喜欢这门课的同学把喜欢打在讨论区"
      },
    ],
    gid: "",
    userInfo: {},
    t:""

  },

  taoluninput: function (e) {
    this.setData({
     t: e.detail.value
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


  formSubmit: function (e) {
    wx.showToast({
      title: '已评论',
      icon: 'success'
    })
    var that = this;
    var liuyantext = e.detail.value.liuyantext; //获取表单所有name=liuyantext的值 
    var nickName = e.detail.value.nickname; //获取表单所有name=nickName的值 
    var headimg = e.detail.value.headimg; //获取表单所有name=headimg的值 
    wx.request({
      url: "https://hongguangxin20.com/ACXingAo-question-mobile/MComments/addComment.do",
      method: "POST",
      data: {
        userid: app.globalData.userid,
        courseId:1,
        detail:that.data.t,
        star:4,
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log(that.data.liuyanlist);
      },
    })
    this.onLoad();
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
      url: "https://hongguangxin20.com/ACXingAo-question-mobile/MComments/findCommentsByCourseId.do",
      method: "POST",
      data: {
        courseId: 1
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