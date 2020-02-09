//index.js
//获取应用实例
const app = getApp()
// var API = require('../../mock/api')
const API = require('../../API/api')

Page({
  data: {
    banner:[],
    newsong:[], //最新音乐全部
    newsong_index:[],//最新音乐前六
    songsheet_index:[],//精选歌单列表前6
    songsheet:[],//歌单全部
    recommend_MV:[],//推荐MV
    dj_index:[],//精选电台
    dj:[],//所有电台
    newAlbum:[],//最新专辑
    albums:[],//所有专辑
    activeIndex:0,//选中
    recommend_create:[],
    more_recommend_create:[],
    d3:[],
    more_d3:[],
    recommend_feeling:[],
    more_recommend_feeling:[],
    more_recommend_musicstory:[],
    recommend_musicstory:[],
    recommend_2D:[],
    more_recommend_2D:[],
    recommend_audiobook:[],
    more_recommend_audiobook:[],
    recommend_radioplay:[],
    more_recommend_radioplay:[],
    recommend_reading:[],
    more_recommend_reading:[],
    recommend_crosstalk:[],
    more_recommend_crosstalk:[],
    recommend_history:[],
    more_recommend_history:[],
    recommend_talkshow:[],
    more_recommend_talkshow:[],
    recommend_foreignlanguage:[],
    more_recommend_foreignlanguage:[],
    recommend_skills: [], //知识技能
    more_recommend_skills:[],
    recommend_baby: [], //亲子宝贝
    more_recommend_baby:[],
    recommend_education: [], //校园教育
    more_recommend_education:[],
    recommend_finance: [], //商业财经
    more_recommend_finance:[],
    recommend_science: [], //科技科学
    more_recommend_science:[],
    recommend_tourism: [], //路途|城市
    more_recommend_tourism:[],
    recommend_movies: [], //娱乐影视
    more_recommend_movies:[],
    dj_banner:[],//电台的轮播图

  },
  getBanner: function(){
    let that = this
    API.getBanner({
      type:2
    }).then(res=>{
        if(res.code === 200){
          that.setData({
            banner: res.banners
          })
        }
      }
    )
  },
  getNewSong:function(){
    let that = this
    API.getNewSong({}).then(
      res => {
        if(res.code === 200){
          that.setData({
            newsong: res.result,
            newsong_index: res.result.slice(0,6)
          })
        }
      }
    )
  },
  getSongsheet:function(){
    let that = this
    API.getSongsheet({order: 'hot'}).then(
      res =>{
        if(res.code===200){
          that.setData({
            songsheet: res.playlists,
            songsheet_index: res.playlists.slice(0,6)
          })
        }
      }
    )
  },
  getMV:function(){
    let that = this
    API.getMV({}).then(
      res => {
        if(res.code === 200){
          that.setData({
            recommend_MV: res.result
          })
        }
      }
    )
  },
  getDJ:function(){
    let that = this
    API.getDJ({}).then(
      res => {
        if(res.code === 200){
          that.setData({
            dj: res.djRadios,
            dj_index: res.djRadios.slice(0,6)
          })
        }
      }
    )
  },
  getAlbums:function(){
    let that = this
    API.getAlbums({}).then(
      res => {
        if(res.code === 200){
          that.setData({
            newAlbum:res.albums.slice(4, 10),
            albums:res.albums
          })
        }
      }
    )
  },
  go_search:function(){
    wx.navigateTo({
      url: '../search/search',
    })
  },
  handlePlayAudio:function(event){
    // console.log(event)
    const audioId = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: `../../play/play?id=${audioId}`
    })
  },
  handleSheet:function(event){
    const newestId = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: `../../more/more_sheet/moremore_sheet?id=${newestId}`,
    })
  },
  handlePlayMv:function(event){
    let id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: `../../play/play_mv?id=${id}`,
    })
  },
  go_sheet:function(){
    wx.navigateTo({
      url: '../../more/more_sheet/more_sheet',
    })
  },
  go_newsong:function(){
    wx.navigateTo({
      url: '../../more/more_song/more_song',
    })
  },
  go_MV:function(){
    wx.navigateTo({
      url: '../../more/more_mv/more_mv',
    })
  },
  go_radio:function(){
    wx.navigateTo({
      url: '../../more/more_radio/more_radio',
    })
  },
  go_newest:function(){
    wx.navigateTo({
      url: '../../more/more_newest/more_newest',
    })
  },
  go_songer:function(){
    wx.navigateTo({
      url: '../../more/more_songer/more_songer',
    })
  },
  go_toplist:function(){
    wx.navigateTo({
      url: '../../more/more_toplist/more_toplist',
    })
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
  changeLine:function(e){
    this.setData({
      activeIndex:e.detail.current
    })
  },
  onLoad: function () {
    this.getBanner()
    this.getNewSong()
    this.getSongsheet()
    this.getMV()
    this.getDJ()
    this.getAlbums()
    this.getRecommadCreate()
    this.getDJBanner()
  },
  // 电台
  go_DJList:function(){
    wx.navigateTo({
      url: '../../more/more_djlist/more_djlist',
    })
  },
  getRecommadCreate:function(){
    let that = this
    API.getRecommendType({
      type: 2001
    }).then(
      res => {
        if(res.code === 200){
          that.setData({
            recommend_create: res.djRadios.slice(0,3),
            more_recommend_create:res.djRadios
          })
        }
      }
    )
    API.getRecommendType({
      type: 10002 
    }).then(
      res => {
        if(res.code === 200){
          that.setData({
            d3: res.djRadios.slice(0,3),
            more_d3:res.djRadios
          })
        }
      }
    )
    API.getRecommendType({
      type: 3
    }).then(res => {
      this.setData({
        recommend_feeling: res.djRadios.slice(0, 3),
        more_recommend_feeling: res.djRadios
      })
    })
    API.getRecommendType({
      type: 2
    }).then(res => {
      this.setData({
        recommend_musicstory: res.djRadios.slice(0, 3),
        more_recommend_musicstory: res.djRadios
      })
    })
    API.getRecommendType({
      type: 3001
    }).then(res => {
      this.setData({
        recommend_2D: res.djRadios.slice(0, 3),
        more_recommend_2D: res.djRadios
      })
    })
    API.getRecommendType({
      type: 10001
    }).then(res => {
      this.setData({
        recommend_audiobook: res.djRadios.slice(0, 3),
        more_recommend_audiobook: res.djRadios
      })
    })
    API.getRecommendType({
      type: 7
    }).then(res => {
      this.setData({
        recommend_radioplay: res.djRadios.slice(0, 3),
        more_recommend_radioplay: res.djRadios
      })
    })
    API.getRecommendType({
      type: 6
    }).then(res => {
      this.setData({
        recommend_reading: res.djRadios.slice(0, 3),
        more_recommend_reading: res.djRadios
      })
    })
    API.getRecommendType({
      type: 8
    }).then(res => {
      this.setData({
        recommend_crosstalk: res.djRadios.slice(0, 3),
        more_recommend_crosstalk: res.djRadios
      })
    })
    API.getRecommendType({
      type: 11
    }).then(res => {
      this.setData({
        recommend_history: res.djRadios.slice(0, 3),
        more_recommend_history: res.djRadios
      })
    })
    API.getRecommendType({
      type: 5
    }).then(res => {
      this.setData({
        recommend_talkshow: res.djRadios.slice(0, 3),
        more_recommend_talkshow: res.djRadios
      })
    })
    API.getRecommendType({
      type: 4
    }).then(res => {
      this.setData({
        recommend_movies: res.djRadios.slice(0, 3),
        more_recommend_movies: res.djRadios
      })
    })
    API.getRecommendType({
      type: 13
    }).then(res => {
      this.setData({
        recommend_foreignlanguage: res.djRadios.slice(0, 3),
        more_recommend_foreignlanguage: res.djRadios
      })
    })
    API.getRecommendType({
      type: 453050
    }).then(res => {
      this.setData({
        recommend_skills: res.djRadios.slice(0, 3),
        more_recommend_skills: res.djRadios
      })
    })
    API.getRecommendType({
      type: 14
    }).then(res => {
      this.setData({
        recommend_baby: res.djRadios.slice(0, 3),
        more_recommend_baby: res.djRadios
      })
    })
    API.getRecommendType({
      type: 4001
    }).then(res => {
      this.setData({
        recommend_education: res.djRadios.slice(0, 3),
        more_recommend_education: res.djRadios
      })
    })
    API.getRecommendType({
      type: 453051
    }).then(res => {
      this.setData({
        recommend_finance: res.djRadios.slice(0, 3),
        more_recommend_finance: res.djRadios
      })
    })
    API.getRecommendType({
      type: 453052
    }).then(res => {
      this.setData({
        recommend_science: res.djRadios.slice(0, 3),
        more_recommend_science: res.djRadios
      })
    })
    API.getRecommendType({
      type: 12
    }).then(res => {
      this.setData({
        recommend_tourism: res.djRadios.slice(0, 3),
        more_recommend_tourism: res.djRadios
      })
    })
  },
  getDJBanner:function(){
    let that = this
    API.getBanner({}).then(
      res => {
        if(res.code === 200){
          that.setData({
            dj_banner: res.banners
          })
        }
      }
    )
  },
  go_program:function(){
    wx.navigateTo({
      url: '../../more/more_program/more_program',
    })
  },
  go_pay:function(){
    wx.navigateTo({
      url: '../../more/more_pay/more_pay',
    })
  },
  change_pic:function(arr_more){
    let maxLen = arr_more.length
    let arrNew = []
    arrNew.push(arr_more[parseInt(Math.random() * (maxLen - 0) + 0)])
    arrNew.push(arr_more[parseInt(Math.random() * (maxLen - 0) + 0)])
    arrNew.push(arr_more[parseInt(Math.random() * (maxLen - 0) + 0)])
    return arrNew
  },
  change:function(event){
    let name = event.currentTarget.dataset.name
    let nomore = name.substring(5,name.length)
    let newArr = this.change_pic(this.data[name])
    this.data[nomore] = newArr
    this.setData({
      [nomore]:newArr
    })
  }
})
