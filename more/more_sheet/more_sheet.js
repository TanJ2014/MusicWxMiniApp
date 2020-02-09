// more/more_sheet/more_sheet.js
const API = require("../../API/api")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    songsheet:[]
  },
  getSongsheet:function(){
    let that = this
    API.getSongsheet({order: 'hot'}).then(
      res =>{
        if(res.code===200){
          that.setData({
            songsheet: res.playlists
          })
        }
      }
    )
  },
  handleSheet:function(event){
    let id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: `../../more/more_sheet/moremore_sheet?id=${id}`,
    })
  },
  onLoad: function (options) {
    this.getSongsheet()
  }
})