// pages/home/home.js
var numCount = 6;
var numSlot = 5;
var mW = 220;
var mH = 220;
var mCenter = mW / 2;
var mAngle = Math.PI * 2 / numCount;
var mRadius = mCenter - 60; //半径(减去的值用于给绘制的文本留空间)
//获取Canvas
var radCtx = wx.createCanvasContext("radarCanvas")
var wxCharts = require('../../utils/wxcharts.js');
var columnChart = null;
var app = getApp();
var chartData = {
  main: {
    title: '总完成题数',
    data: [100, 150, 98, 80],
    categories: ['1月', '2月', '3月', '4月']
  },
  sub: [{
    title: '1月完成题数',
    data: [70, 40, 65, 100, 34, 18],
    categories: ['1', '2', '3', '4', '5', '6']
  }, {
    title: '2月完成题数',
    data: [55, 30, 45, 36, 56, 13],
    categories: ['1', '2', '3', '4', '5', '6']
  }, {
    title: '3月完成题数',
    data: [76, 45, 32, 74, 54, 35],
    categories: ['1', '2', '3', '4', '5', '6']
  }, {
    title: '4月完成题数',
    data: [76, 54, 23, 12, 45, 65],
    categories: ['1', '2', '3', '4', '5', '6']
  }],


};
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    student: {
      name: '尺子',
      day: 666
    },
    stepText: 5,
    chanelArray1: [
      ["时长", 88],
      ["题量", 30],
      ["正确率", 66],
      ["出勤", 90],
      ["成绩", 95],
      ["积分", 88]
    ],
    listData: [{
      "code": 1,
      "text": 20,
      "date": 15,
      "fen": '70%',
    },
    ],
    listData2: [{
      "code": "1",
      "text": "李同学",
      "date": "xx学校",
      "fen": 70,
      "ti": 120
    },
    {
      "code": "2",
      "text": "王同学",
      "date": "xx学校",
      "fen": 60,
      "ti": 120
    },

    {
      "code": "3",
      "text": "刘同学",
      "date": "xx学校",
      "fen": 60,
      "ti": 110
    },
    {
      "code": "4",
      "text": "蔡同学",
      "date": "xx学校",
      "fen": 60,
      "ti": 100
    },
    {
      "code": "...",
    },
    {
      "code": "666",
      "text": "我自己",
      "date": "xx学校",
      "fen": 2,
      "ti": 3
    },
    ],
    chartTitle: '总完成题数',
    isMainChartDisplay: true,

    cell: [
      {
        image: '../../images/ICON/J.jpg',
        title: 'JAVA训练1',
        time: '王王老师',
        grade: '适合初学者',
        price: '￥10'
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    app.getUserInfo(function(userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })

    if (app.globalData.userid == null) {
      wx.showModal({
        title: '提示',
        content: '您还未登录，请登录',
        success: res => {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.redirectTo({
              url: '/pages/login/login',
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
            wx.switchTab({
              url: '/pages/my/my',
            })
          }
        }
      })
    }
  },

  tomyclass: function () {
    wx.navigateTo({
      url: '/pages/studydetail/studydetail',
    })
  },

  qiandao:function(){
    wx.showToast({
      title: '签到成功',
      icon: 'success'
    })
  },


  backToMainChart: function() {
    this.setData({
      chartTitle: chartData.main.title,
      isMainChartDisplay: true
    });
    columnChart.updateData({
      categories: chartData.main.categories,
      series: [{
        name: '完成题数',
        data: chartData.main.data,
        format: function(val, name) {
          return val.toFixed(0) + '题';
        }
      }]
    });
  },
  touchHandler: function(e) {
    var index = columnChart.getCurrentDataIndex(e);
    if (index > -1 && index < chartData.sub.length && this.data.isMainChartDisplay) {
      this.setData({
        chartTitle: chartData.sub[index].title,
        isMainChartDisplay: false
      });
      columnChart.updateData({
        categories: chartData.sub[index].categories,
        series: [{
          name: '完成题数',
          data: chartData.sub[index].data,
          format: function(val, name) {
            return val.toFixed(0) + '题';
          }
        }]
      });

    }
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.drawRadar()
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    columnChart = new wxCharts({
      canvasId: 'columnCanvas',
      type: 'column',
      animation: true,
      categories: chartData.main.categories,
      series: [{
        name: '完成题数',
        data: chartData.main.data,
        format: function(val, name) {
          return val.toFixed(0) + '题';
        }
      }],
      yAxis: {
        format: function(val) {
          return val + '题';
        },
        min: 0
      },
      xAxis: {
        disableGrid: false,
        type: 'calibration'
      },
      extra: {
        column: {
          width: 15
        }
      },
      width: windowWidth,
      height: 200,
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    if (app.globalData.userid == null) {
      wx.showModal({
        title: '提示',
        content: '您还未登录，请登录',
        success: res => {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.redirectTo({
              url: '/pages/login/login',
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
            wx.switchTab({
              url: '/pages/my/my',
            })
          }
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  // 雷达图
  drawRadar: function() {
    var sourceData1 = this.data.chanelArray1
    //调用
    this.drawEdge()
    this.drawLinePoint()
    //设置数据
    this.drawRegion(sourceData1, 'rgba(0, 0, 255, 0.5)')
    //设置文本数据
    this.drawTextCans(sourceData1)
    //设置节点
    this.drawCircle(sourceData1, 'blue')
    //开始绘制
    radCtx.draw()
  },
  // 绘制6条边
  drawEdge: function() {
    radCtx.setStrokeStyle("white")
    radCtx.setLineWidth(1) //设置线宽
    for (var i = 0; i < numSlot; i++) {
      //计算半径
      radCtx.beginPath()
      var rdius = mRadius / numSlot * (i + 1)
      //画6条线段
      for (var j = 0; j < numCount; j++) {
        //坐标
        var x = mCenter + rdius * Math.cos(mAngle * j);
        var y = mCenter + rdius * Math.sin(mAngle * j);
        radCtx.lineTo(x, y);
      }
      radCtx.closePath()
      radCtx.stroke()
    }
  },
  // 绘制连接点
  drawLinePoint: function() {
    radCtx.beginPath();
    for (var k = 0; k < numCount; k++) {
      var x = mCenter + mRadius * Math.cos(mAngle * k);
      var y = mCenter + mRadius * Math.sin(mAngle * k);

      radCtx.moveTo(mCenter, mCenter);
      radCtx.lineTo(x, y);
    }
    radCtx.stroke();
  },
  //绘制数据区域(数据和填充颜色)
  drawRegion: function(mData, color) {
    radCtx.beginPath();
    for (var m = 0; m < numCount; m++) {
      var x = mCenter + mRadius * Math.cos(mAngle * m) * mData[m][1] / 100;
      var y = mCenter + mRadius * Math.sin(mAngle * m) * mData[m][1] / 100;
      radCtx.lineTo(x, y);
    }
    radCtx.closePath();
    radCtx.setFillStyle(color)
    radCtx.fill();
  },

  //绘制文字
  drawTextCans: function(mData) {

    radCtx.setFillStyle("black")
    radCtx.font = 'bold 12px cursive' //设置字体
    for (var n = 0; n < numCount; n++) {
      var x = mCenter + mRadius * Math.cos(mAngle * n);
      var y = mCenter + mRadius * Math.sin(mAngle * n);
      // radCtx.fillText(mData[n][0], x, y);
      //通过不同的位置，调整文本的显示位置
      if (mAngle * n >= 0 && mAngle * n <= Math.PI / 2) {
        radCtx.fillText(mData[n][0], x + 5, y + 5);
      } else if (mAngle * n > Math.PI / 2 && mAngle * n <= Math.PI) {
        radCtx.fillText(mData[n][0], x - radCtx.measureText(mData[n][0]).width - 7, y + 5);
      } else if (mAngle * n > Math.PI && mAngle * n <= Math.PI * 3 / 2) {
        radCtx.fillText(mData[n][0], x - radCtx.measureText(mData[n][0]).width - 5, y);
      } else {
        radCtx.fillText(mData[n][0], x + 7, y + 2);
      }

    }
  },
  //画点
  drawCircle: function(mData, color) {
    var r = 3; //设置节点小圆点的半径
    for (var i = 0; i < numCount; i++) {
      var x = mCenter + mRadius * Math.cos(mAngle * i) * mData[i][1] / 100;
      var y = mCenter + mRadius * Math.sin(mAngle * i) * mData[i][1] / 100;

      radCtx.beginPath();
      radCtx.arc(x, y, r, 0, Math.PI * 2);
      radCtx.fillStyle = color;
      radCtx.fill();
    }

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return {
      title: '信奥乐园',
      desc: '专注青少年计算机能力提升',
      path: '/pages/home/home'
    };
  }
})