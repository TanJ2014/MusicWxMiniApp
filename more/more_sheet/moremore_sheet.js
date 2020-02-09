// more/more_sheet/moremore_sheet.js
const API = require("../../API/api")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    songList:[]
  },
  getSheetDetail:function(options){
    let that = this
    API.getSheetDetail({
      id:options.id
    }).then(
      res => {
        if(res.code === 200){
          that.setData({
            songList: res.playlist.tracks
          }) 
        }
      }
    )
  },
  handlePlayAudio:function(event){
    const id = event.currentTarget.dataset.id
    console.log(event)
    wx.navigateTo({
      url: `../../play/play?id=${id}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSheetDetail(options)
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