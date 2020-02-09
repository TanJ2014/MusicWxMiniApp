// pages/search/search.js
var API = require("../../API/api")
Page({
  /**
   * 页面的初始数据
   */
  data: {
    inputValue:null, //搜索框中的文字
    searchHot:[],
    searchSuggest:[],
    searchResult:[],
    searchKey:"",//搜索的内容
    showView:true,//显示热门和历史搜索
    showSuggest:false,//显示建议搜索
    showResult:false,//显示搜索结果
    history:[],//搜素历史
  },
  clearInput:function(){
    this.setData({
      inputValue:""
    })
  },
  cancel:function(){
    wx.switchTab({
      url: '../../pages/index/index',
    })
  },
  getHotSearch:function(){
    let that = this
    API.gethotsongs({
      type: 'new'
    }).then(
      res => {
        if(res.code === 200){
          that.setData({
            searchHot:res.result.hots
          })
        }
      }
    )
  },
  getInputValue:function(e){

    // console.log(e.detail.value)
    this.setData({
      inputValue: e.detail.value,
      showView:false,
      showSuggest: true,
      showResult:false
    })
    let that = this
    API.getSearchSuggest({
      keywords:e.detail.value,
      type:'mobile'
    }).then(
      res => {
        if(res.code === 200){
          that.setData({
            searchSuggest:res.result.allMatch
          })
        }
      }
    )
  },
  go_hotList:function(e){
    let b = {
      detail:{
        value:""
      }
    }
    b.detail.value = e.currentTarget.dataset.value
    let that = this
    this.setData({
      inputValue:e.currentTarget.dataset.value,
      searchKey:e.currentTarget.dataset.value,
      showView:false
    })
    that.searchResult()
    that.saveHistory(b)
  },
  go_searchList:function(e){
    let that = this
    this.setData({
      inputValue:e.detail.value,
      searchKey:e.detail.value,
      showView:false,
      showSuggest:false
    })
    that.searchResult()
  },
  // 执行搜索的页面
  searchResult:function(){
    let that = this
    API.getSearchResult({
        keywords:that.data.searchKey
    }).then(
      res => {
        that.setData({
          showResult: true,
          searchResult:res.result.songs
        })
      }
    )
  },
  saveHistory:function(e){
    let local = wx.getStorageSync('history') || []
    if(e.detail.value != ""){
      local.push(e.detail.value)
      this.setData({
        history: local
      })
      wx.setStorageSync('history', local)
    }
  },
  getHistory:function(){
    this.setData({
      history:wx.getStorageSync('history') || []
    })
  },
  handleSearchKey:function(event){
    this.setData({
      inputValue:event.currentTarget.dataset.key,
      searchKey:event.currentTarget.dataset.key,
      showView:false,
      showSuggest:false
    })
    this.searchResult()
  },
  handlePlayAudio:function(event){
    const audioId = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: `../../play/play?id=${audioId}`
    })
  },
  clear_history:function(){
    let that = this
    wx.showModal({
      title: '清除历史',
      content: '确定清除搜索历史？',
      confirmColor:"#FB7299",
      success (res) {
        if (res.confirm) {
          wx.setStorageSync('history', [])
          that.setData({
            history:[]
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getHotSearch()
    this.getHistory()
  },
})
