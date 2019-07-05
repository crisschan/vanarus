// pages/addFunction/addFunction.js
// 在页面中定义插屏广告
let interstitialAd = null

const app = getApp()

Page({

  data: {
    url: ''
  },

  onLoad: function (options) {
    var that = this;
    
    app.globalData.DB.collection('historylist').where({
      id: options.id
    }).get({
      success(res) {
        var url = res.data[0]['url']
        that.setData({
          url: url
        })
      }
    })
  },
})