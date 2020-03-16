Page({
  data: {
    // 5.推荐课程
    cell: [
      {
        image: 'https://boilinggame.cn/class/c/c1.png',
        title: 'C++提升课程',
        time: '宗哥老师',
        grade: '适合',
        price: '￥10'
      },
      {
        image: 'https://boilinggame.cn/class/py/p2.png',
        title: 'Python入门',
        time: '杨尺子老师',
        grade: '适合',
        price: '￥10'
      },
      
    ],
  },

  searchEvent(e) {
    console.log("用户搜索" + e.detail)
    setTimeout(() => {
      wx.hideLoading();
    }, 1000)
  },

  toclassdetail: function (e) {
    wx.navigateTo({
      url: '/pages/classdetail/classdetail',
    })
  }

})