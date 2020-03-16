Page({
  data: {
    // 5.推荐课程
    cell: [
      {
        image: 'https://boilinggame.cn/class/java/java1.png',
        title: 'JAVA基础语法',
        time: '2019.4.13',
        grade: '正常学习',
        price: '￥200'
      },
      {
        image: 'https://boilinggame.cn/class/py/p2.png',
        title: 'Python入门',
        time: '2019.4.13',
        grade: '正常学习',
        price: '￥100'
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