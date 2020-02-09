// more/more_radio/more_radio.js
const API = require("../../API/api")
Page({
  data: {
    DJ:[]
  },
  getHotDJ:function(){
    let that = this
    API.getHotDJ({}).then(
      res => {
        if(res.code === 200){
          that.setData({
            DJ: res.djRadios
          })  
        }
      }
    )
  },
  handlePlayDj:function(){
    wx.showModal({
      title: '提示',
      content: '暂时不提供电台支持',
      confirmText:'返回',
      cancelColor:'#FB7299',
      confirmColor: '#FB7299',
      showCancel:false
    })
  },
  onLoad: function (options) {
    this.getHotDJ()
  }
})