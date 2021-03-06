Page({

  /**
   * 页面的初始数据
   */
  data: {
    weekendFlag: false,
    weekdayList: [],
    weekendList: [],
    defaultWeekdayList: [
      { name: "吃药", done: false },
      { name: "爽肤水、柳屋", done: false },
      { name: "打上班卡", done: false },
      { name: "洗鼻，保温杯里泡枸杞", done: false },
      { name: "中午keep：颈椎运动3min", done: false },
      { name: "午睡醒来洗脸", done: false },
      { name: "写日报", done: false },
      { name: "打下班卡", done: false },
      { name: "爬楼梯，不许买零食", done: false },
      { name: "keep：腹肌K4", done: false },
      { name: "眼霜、柳屋", done: false },
      { name: "学习，发博客", done: false }
    ],
    defaultWeekendList: [
      { name: "吃药", done: false },
      { name: "爽肤水、柳屋", done: false },
      { name: "学习，发博客", done: false }
    ],
    notice: ["复习面经，准备春招！！！", "KenjaTime", "吃完饭不要立即坐下或躺下，站5min"]
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
    this.setData({ weekdayList: this.data.defaultWeekdayList })
    this.setData({ weekendList: this.data.defaultWeekendList })
    
    //登录，获取openId
    var openId = 11111111111

    //根据openId查询
    wx.request({
      url: 'localhost:8082?id=' + openId,
      method: "GET",
      success(res) {
        console.log(res.data)
      },
      fail(res) {
        console.log(res)
      }
    })



    var date = new Date()
    //获取当前星期几，星期日为0
    var day = date.getDay()
    if (day == 0 || day == 6) {
      this.setData({ weekendFlag: true })
    }

    //设置定时器
    //给定一个hh:MM:ss，计算到23:59:60需要多少ms
    var h = date.getHours()
    var m = date.getMinutes()
    var s = date.getSeconds()
    var delay = ((60 - s) + 60 * (59 - m) + 3600 * (23 - h)) * 1000
    //1天(d)=86400000毫秒(ms)
    var oneDay = 86400000
    //设置定时器，当晚0点开启定时任务
    setTimeout(function () {
      //定时任务，每过24h执行一次
      setInterval(function () {
        //将todolist数据POST到服务器，后端采用beego框架
        //将todolist.done全部改为false
      }, oneDay)
    }, delay)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // this.setData({weekdatList: wx.getStorageSync("weekdayList")})
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    // wx.setStorageSync("weekdayList", this.data.weekdayList)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    // wx.setStorageSync("weekdayList", this.data.weekdayList)
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
    
  },

  //todoList更改事件
  select: function(e){
    var details = e.detail.value
    //周末
    if(this.data.weekendFlag){
      //每次触发事件后，清空todolist，将所有done设置为false
      this.data.weekendList.forEach(function (item) {
        item.done = false
      })
      //重新将点击的todolist.done设置为true
      for (var key in details) {
        this.data.weekendList[details[key]].done = true
      }
    }else{
      this.data.weekdayList.forEach(function (item) {
        item.done = false
      })
      for (var key in details) {
        this.data.weekdayList[details[key]].done = true
      }
    }
    //这一段代码耦合性太高，应该提取个函数的，但是js的函数我不熟悉 - -
    //算了，去他妈的
  },

  //加班
  work: function(){
    //周末加班，也就是说不再是周末了
    this.setData({weekendFlag: false})
  },

  //报表
  report: function(){
    console.log("报表")
  }
})
