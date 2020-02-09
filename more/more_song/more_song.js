// more/more_song/more_song.js
const API = require('../../API/api')
Page({
  data: {
    newsong:[]
  },
  getNewSong:function(){
    let that = this
    API.getNewSong({}).then(
      res => {
        if(res.code === 200){
          that.setData({
            newsong: res.result
          })
          console.log(this.data.newsong)
        }
      }
    )
  },
  handlePlayAudio:function(event){
    console.log(event.currentTarget.dataset.id)
    const id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: `../../play/play?id=${id}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNewSong()
  }
})