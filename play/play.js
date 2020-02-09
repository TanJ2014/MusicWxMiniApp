// play/play.js
const API = require('../API/api')
const app = getApp()
Page({

  data: {
    musicUrl:" ",
    song:[],
    isPlay:true,
    showLyrics:false
  },
  getMusic:function(options){
    let that = this
    API.getMusic({
      id: options.id
    }).then(
      res => {
       if(res.code === 200){
          wx.playBackgroundAudio({
            dataUrl:res.data[0].url,
            isPlay: true
          })
       }
      }
    )
  },
  getMusicDetail:function(options){
    let that = this
    API.getMusicDetail({
      ids:options.id
    }).then(
      res => {
        if(res.code === 200){
          that.setData({
            song: res.songs[0]
          })
          console.log(res.songs)
        }
      }
    )
  },
  togglePlay:function(){
    if(this.data.isPlay === true){
      wx.pauseBackgroundAudio()
      this.setData({ isPlay:false})
    }else{
      wx.playBackgroundAudio()
      this.setData({ isPlay:true})
    }
  },
  getLyrics:function(){
    console.log(this.data.showLyrics)
    if(this.data.showLyrics){
      this.setData({ showLyrics:false})
    }else{
      this.setData({ showLyrics:true})
    }
  },
  go_lastSong:function(){
    console.log(app.globalData)
  },
  onLoad: function (options) {
      this.getMusic(options)
      this.getMusicDetail(options)
  },

})