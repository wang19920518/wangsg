// pages/frist/fristpage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // Banner数据
    images: [
      "http://img.zcool.cn/community/014056564bd8596ac7251c94eb5559.jpg",
      "http://img.zcool.cn/community/01e03b58047e96a84a0e282b09e8fc.jpg",
      "http://pic.90sjimg.com/back_pic/00/00/69/40/d678a42886e0232aaea0d6e69e9b1945.jpg",
      "http://img.zcool.cn/community/0132dd55800bc700000059ffbe83e9.jpg@1280w_1l_2o_100sh.jpg",
      "http://img.zcool.cn/community/0154755a2df102a80120ba3828b5af.jpg@1280w_1l_2o_100sh.jpg",
      "http://pic.90sjimg.com/back_pic/00/00/69/40/bf4f8e2ab7e05dc3c7cc2a7f7e9c2fe7.jpg",
      "http://img.zcool.cn/community/01a2a2594943d3a8012193a328e0fd.jpg@1280w_1l_2o_100sh.jpg"
    ],
    // 是否显示面板指示点
    indicatorDots: true,
    // 滑动方向是否为纵向
    vertical: false,
    // 自动切换
    autoplay: true,
    // 采用衔接滑动
    circular: true,
    // 自动切换时间间隔2s
    interval: 2000,
    // 滑动动画时长0.5s
    duration: 500,
    // 前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值
    previousMargin: 0,
    // 后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值
    nextMargin: 0

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

  },
  map: function () {
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28
        })
      }
    })
  }

})