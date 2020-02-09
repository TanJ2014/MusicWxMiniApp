// more/more_mv/more_mv.js
const API = require("../../API/api")
Page({
  data: {
    mvList:[]
  },
  getNewEst:function(){
    let that = this
    API.getNewMv({}).then(
      res => {
        if(res.code === 200){
          that.setData({
            mvList:res.data
          })
          console.log(this.data.mvList)
        }
      }
    )
  },
  playMV:function(event){
    let id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: `../../play/play_mv?id=${id}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNewEst()
  }
})