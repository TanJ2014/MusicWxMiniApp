// more/more_djlist/more_djlist.js
const API = require("../../API/api")
Page({
  data: {
    djList:[],
  },
  getDJCatelist:function(){
    let that = this
    API.getDJCatelist({}).then(
      res => {
        if(res){
          that.setData({
            djList:res.categories
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
    this.getDJCatelist()
  }
})