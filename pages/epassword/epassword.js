// pages/epassword/epassword.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '',
    op:'',
    np:'',
    np1:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
  },

  handleInputPhone: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },

  handleInputop: function (e) {
    this.setData({
      op: e.detail.value
    })
  },

  handleInputnp: function (e) {
    this.setData({
      np: e.detail.value
    })
  },

  handleInputnp1: function (e) {
    this.setData({
      np1: e.detail.value
    })
  },

  xg: function () {
    var that = this;
      wx.request({
        url: "https://hongguangxin20.com/ACXingAo-user-mobile/MUsers/updateUserPwd.do",
        method: "POST",
        data: {
          userId: app.globalData.userid,
          oldpwd: this.data.op,
          newpwd: this.data.np,
          newpwd1: this.data.np,
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
    wx.showToast({
      title: '修改成功',
      icon: 'success',
      duration: 1000
    })
    setTimeout(function () {
      wx.switchTab({
        url: '/pages/my/my',
      })
    }, 1000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})