// more/more_program/more_program.js
const API = require("../../API/api")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pay:[],
  },
  getPay:function(){
    let that = this
    API.getPay({}).then(
      res => {
        console.log(res)
        if(res.code === 200){
          that.setData({
            pay:res.data.list
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPay()
  }
})