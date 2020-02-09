// more/more_songer/more_songer.js
const API = require("../../API/api")
Page({
  data: {
    songList:[],
  },
  getSonger:function(){
    let that = this
    API.getSonger({}).then(
      res => {
        if(res.code === 200){
          that.setData({
            songList: res.list.artists
          })
        }
      }
    )
  },
  go_list:function(e){
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `../more_songer/moremore_songer?id=${id}`,
    })
  },
  onLoad: function (options) {
    this.getSonger()
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