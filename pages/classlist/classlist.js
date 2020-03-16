Page({
  data: {
    // 5.推荐课程
    cell: [
    ],
    typeid:"",
  },

  searchEvent(e) {
    console.log("用户搜索" + e.detail)
    setTimeout(() => {
      wx.hideLoading();
    }, 1000)
  },

  onLoad: function (options) {
    this.setData({
      typeid: options.typeid
    })
    this.getlistbytypeid()
  },

  getlistbytypeid :function(e){
    var that = this;
    
    wx.request({
      url: "https://hongguangxin20.com/ACXingAo-question-mobile/MCourse/findCourseByCourseType.do",
      method: "POST",
      data: {
        courseType: that.data.typeid,
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        that.setData({
        cell: res.data            //将后台初始化的值赋值给页面
        })
        console.log(that.data.res);
      },
    })
  },

  toclassdetail: function (e) {
    wx.navigateTo({
      url: '/pages/classdetail/classdetail',
    })
  }

})