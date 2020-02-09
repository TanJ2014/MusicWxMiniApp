// more/more_newest/more_newest.js
const API = require("../../API/api")
Page({

  /**
   * 页面的初始数据
   */
  data: {
      nList:[]
  },
  getNewEst:function(){
    let that = this
    API.getNewEst({}).then(
      res => {
        if(res.code === 200){
          that.setData({
            nList:res.albums
          })
        }
        console.log(that.data.nList)
      }
    )
  },
  handlePlayAudio:function(event){
    // console.log(event)
    const audioId = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: `../../play/play?id=${audioId}`
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNewEst()
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