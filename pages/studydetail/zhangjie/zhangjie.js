// pages/studydetail/zhangjie/zhangjie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zhangjie:{
      video:"http://boilinggame.cn/classv/class1.mp4",
      name:"第一节：JAVA入门"
    }
  },

  downloadFile: function (e) {
    wx.downloadFile({
      url: "https://boilinggame.cn/ppt/ppt1.ppt",
      header: {},
      success: function (res) {
        var filePath = res.tempFilePath;
        console.log(filePath);
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            console.log('打开文档成功')
          },
          fail: function (res) {
            console.log(res);
          },
          complete: function (res) {
            console.log(res);
          }
        })
      },
      fail: function (res) {
        console.log('文件下载失败');
      },
      complete: function (res) { },
    })
    wx.openDocument({

      filePath: filePath,

      success: function (res) {

        console.log('打开文档成功')

      }

    })
  },

  tolianxi: function () {
    wx.navigateTo({
      url: '/pages/test/test',
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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