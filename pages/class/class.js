Page({
  data: {
    res:[],
    //1. 轮播图片数据
    imgUrls: [
      { id:1,
        pir:'../../images/class/c1.jpg',},
      {
        id: 2,
        pir: '../../images/class/c2.jpg',
      },
      {
        id: 3,
        pir: '../../images/class/c3.jpg',
      },
    ],
    //2. 轮播配置
    autoplay: true,
    interval: 3000,
    duration: 1200,
    // 3.导航栏
    navs: [
      {
        image: '../../images/ICON/J.jpg',
        text: 'JAVA',
        typeid: 1
      },

      {
        image: '../../images/ICON/c.jpg',
        text: 'C/C++',
        typeid: 2
      },

      {
        image: 'https://boilinggame.cn/class/py/p.jpg',
        text: 'Python',
        typeid: 3
      },

      {
        image: 'https://boilinggame.cn/class/OC/oc.png',
        text: '更多',
        typeid: 4
      }
    ],
    // 5.推荐课程
    cell: [
      {
        image: '../../images/ICON/J.jpg',
        title: 'JAVA训练1',
        time: '王王老师',
        grade: '适合初学者',
        price: '￥10'
      },

      {
        image: '../../images/ICON/c.jpg',
        title: 'C++精讲',
        time: '天马老师',
        grade: '适合有一定基础的学生',
        price: '￥15'
      },

      {
        image: '../../images/ICON/p.jpg',
        title: 'Python入门',
        time: '哈哈老师',
        grade: '最新的Python课程',
        price: '￥30'
      },
      {
        image: '../../images/ICON/p.jpg',
        title: 'Python入门',
        time: '哈哈老师',
        grade: '最新的Python课程',
        price: '￥30'
      },
      {
        image: '../../images/ICON/p.jpg',
        title: 'Python入门',
        time: '哈哈老师',
        grade: '最新的Python课程',
        price: '￥30'
      },
    ],

    buttons: [{
      label: '回到顶部',
      icon: "/images/ICON/top.png",
    },
    {
      label: '我的课程',
      icon: "/images/ICON/class.png",
    },

    ],
    position: 'bottomRight',
    visible: false,
    colors: ['light', 'stable', 'positive', 'calm', 'balanced', 'energized', 'assertive', 'royal', 'dark'],
  },

  searchEvent(e) {
    console.log("用户搜索" + e.detail)
    setTimeout(() => {
      wx.hideLoading();
      wx.navigateTo({
        url: '/pages/classlist/classlist?typeid=1'
      })
    }, 1000)
  },

  toclasslist: function (e) {
    var typeid = e.currentTarget.id
    console.log("----index----" + typeid)
    wx.navigateTo({
      url: '/pages/classlist/classlist?typeid='+typeid
    })
  },

  toclassdetail: function (e) {
    wx.navigateTo({
      url: '/pages/classdetail/classdetail?courseId=' + e.currentTarget.id,
    })
  },

  onLoad: function (options){
    var that=this;
    wx.request({
      url: "https://hongguangxin20.com/ACXingAo-question-mobile/MCourse/findAllCourse.do",
      method: "POST",
      data: {
       
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        that.setData({
          cell: res.data            //将后台初始化的值赋值给页面
        })
        console.log(that.data.cell);
      },
    })
  },

  buttonClicked(e) {
    const { index } = e.detail
    index === 0 && wx.pageScrollTo({
      scrollTop: 0
    })
    index === 1 && wx.switchTab({
      url: '/pages/study/study'
    })
    index === 2 && wx.navigateTo({
      url: ''
    })
  },

})