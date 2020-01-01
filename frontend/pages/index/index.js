Page({

  /**
   * 页面的初始数据
   */
  data: {
    weekendFlag: false,
    weekdayList: [
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
      { name: "学习，发博客", done: false}
    ],
    weekendList: [
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
    var day = new Date().getDay()
    if(day == 0 || day == 6) {
      this.setData({weekendFlag: true})
    }
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
    
  },

  //todoList更改事件
  select: function(e){
    console.log(e)
    console.log(e.detail.value)
  },

  //加班
  work: function(){
    console.log("加班")
    this.setData({weekendFlag: false})
  },

  //报表
  report: function(){
    console.log("报表")
  }
})
