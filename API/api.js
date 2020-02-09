const baseUrl = 'http://neteasecloudmusicapi.zhaoboy.com';
const request = (url,data)=>{
  var _url = baseUrl + url
  return new Promise((resolve,reject)=>{
    wx.request({
      url: _url, 
      data: data,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        resolve(res.data)
      },
      fail(error){
        reject(error)
      }
    })
  })
}

module.exports = {
  getBanner:(data)=>{
    return request('/banner',data)//个性推荐轮播
  },
  getNewSong:(data)=>{
    return request('/personalized/newsong',data) //获取最新音乐
  },
  getSongsheet:(data)=>{
    return request('/top/playlist',data) //精选歌单
  },
  getMV:(data)=>{
    return request('/personalized/mv',data) //推荐MV
  },
  getNewMv:(data)=>{
    return request('/mv/first',data)//最新MV
  },
  getNewEst:(data)=>{
    return request('/album/newest',data)//最新专辑
  },
  getDJ:(data)=>{
    return request('/dj/recommend',data) //精选电台
  },
  getAlbums:(data)=>{
    return request('/album/newest',data) //最新专辑
  },
  getMusic:(data)=>{
    return request('/song/url',data) //播放音乐
  },
  getMusicDetail:(data)=>{
    return request('/song/detail',data) //获取音乐的详情
  },
  getSheetDetail:(data)=>{
    return request('/playlist/detail',data) //获取歌单的详情
  },
  getMVDetail:(data)=>{
    return request('/mv/detail',data)  //获取MV的详情
  },
  getHotDJ:(data)=>{
    return request('/dj/hot',data) //获取电台
  },
  gethotsongs:(data) =>{
    return request('/search/hot',data)//热搜接口
  },
  getSearchSuggest:(data)=>{
    return request("/search/suggest",data) //搜索建议
  },
  getSearchResult:(data)=>{
    return request("/search",data) //搜索结果
  },
  getSonger:(data)=>{
    return request("/toplist/artist",data) //获取歌手
  },
  getSongerSong:(data)=>{
    return request("/artists",data) //获取歌手的歌曲
  },
  getTopList:(data)=>{
    return request("/toplist",data)
  },
  // 主播电台
  getRecommendType:(data)=>{
    return request('/dj/recommend/type',data)//所有电台分类推荐
  },
  getDJBanner:(data)=>{
    return request('/dj/banner',data) //dj轮播图
  },
  getDJCatelist:(data) => {
    return request('/dj/catelist',data) //电台分类
  },
  getProgramRecommend:(data)=>{
    return request('/program/recommend',data)//推荐节目接口
  },
  getPay:(data)=>{
    return request('/dj/paygift',data) //付费精品
  }
}