// more/more_songer/moremore_songer.js
const API = require("../../API/api")
Page({
  data: {
    songList:[]
  },
  getSongerSong:function(id){
    let that = this
    API.getSongerSong({
      id:id
    }).then(
      res => {
        that.setData({
          songList: res.hotSongs
        })
      }
    )
  },
  handlePlayAudio:function(event){
    const audioId = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: `../../play/play?id=${audioId}`
    })
  },
  onLoad: function (options) {
    this.getSongerSong(options.id)
  }
})