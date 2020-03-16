Page({
  data: {
    // text:"这是一个页面"
    postList: [{
      "name": "Java中，哪种不可以用来限制存取权限的关键字?",
      "daan": "C",
      "content": ["public", "protected", "extends", "private"]
    },
    {
      "name": "Java语言中下面哪个可以用作正确的变量名称？",
      "daan": "B",
      "content": ["3D", "name", "extends", "implements"]
    },
    {
      "name": "构造函数何时被调用？",
      "daan": "B",
      "content": ["类定义时", "创建对象时", "调用对象方法时", "使用对象的变量时"]

    }
    ],
    index: 0,
    bc_default: '#FBFBFB',
    bc_right: '#98FB98',
    bc_wrong: '#FF99B4',
    bcA: '',
    bcB: '',
    bcC: '',
    bcD: '',
    ny: '显示答案',
    defen: 0
  },

  nextQuestion: function () {
    var that = this;
    if (that.data.index < that.data.postList.length - 1) {
      this.setData({
        index: that.data.index + 1,
        bcA: that.data.bc_default,
        bcB: that.data.bc_default,
        bcC: that.data.bc_default,
        bcD: that.data.bc_default,
        ny: '显示答案'
      });
    }
  },

  lastQuestion: function () {
    var that = this;
    if (that.data.index > 0) {
      this.setData({
        index: that.data.index - 1,
        ny: '显示答案'
      });
    }
  },

  btnOpClick: function (e) {
    var that = this;
    var select = e.currentTarget.id;
    var jieg = this.data.postList[that.data.index].daan;
    if (select == jieg) {
      if (that.data.index < that.data.postList.length - 1) {
        if (select == 'A') {
          this.setData({ bcA: that.data.bc_right });
        }
        else if (select == 'B') {
          this.setData({ bcB: that.data.bc_right });
        }
        else if (select == 'C') {
          this.setData({ bcC: that.data.bc_right });
        }
        else if (select == 'D') {
          this.setData({ bcD: that.data.bc_right });
        }
        that.nextQuestion();
        this.setData({
          defen: that.data.defen + 2
        })
      }
      else {
        if (select == 'A') {
          this.setData({ bcA: that.data.bc_right });
        }
        else if (select == 'B') {
          this.setData({ bcB: that.data.bc_right });
        }
        else if (select == 'C') {
          this.setData({ bcC: that.data.bc_right });
        }
        else if (select == 'D') {
          this.setData({ bcD: that.data.bc_right });
        }
        that.gotonext();
      }
    }
    else {
      if (select == 'A') {
        this.setData({ bcA: that.data.bc_wrong });
      }
      else if (select == 'B') {
        this.setData({ bcB: that.data.bc_wrong });
      }
      else if (select == 'C') {
        this.setData({ bcC: that.data.bc_wrong });
      }
      else if (select == 'D') {
        this.setData({ bcD: that.data.bc_wrong });
      }
      else if (select == 'E') {
        this.setData({ bcE: that.data.bc_wrong });
      }
    }
  },

  gotonext: function () {
    wx.navigateTo({
      url: './../tiaozhuan/tiaozhuan',
    })
  },

  xianshi: function () {
    var that = this;
    this.setData({
      ny: '答案是：' + that.data.postList[that.data.index].daan
    })
  }

})