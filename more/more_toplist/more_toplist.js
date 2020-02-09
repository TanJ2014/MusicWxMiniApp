// more/more_toplist/more_toplist.js
const API = require("../../API/api")
Page({
  data: {
    topList:[]
  },
  getTopList:function(){
    let that = this
    API.getTopList({
    }).then(res => {
      if(res.code === 200){
        that.setData({
          topList: res.list
        })
      }
    })
  },
  onLoad: function (options) {
    this.getTopList()
  }
})