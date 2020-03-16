// pages/my/qianbao/qianbao.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    display: '',
    display2: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  showview: function () {
    this.setData({
      display: "block"
    })
  },
  overageDesc: function () {
    this.setData({
      display2: "block"
    })
  },
  hideview: function () {
    this.setData({
      display: "none"
    })
  },
  hideview2: function () {
    this.setData({
      display2: "none"
    })
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