// play/play_mv.js
const API = require("../API/api")
Page({
  data: {
    mvDetail:{}
  },
  playMV:function(options){
    let that = this
    API.getMVDetail({
      mvid:options.id
    }).then(
      res => {
        if(res.code === 200){
          that.setData({
            mvDetail: res.data
          })
        }
      }
    )
  },
  onLoad: function (options) {
    this.playMV(options)
  }
})