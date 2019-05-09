// pages/chooseLib/chooseLib.js
const app = getApp()
let interstitialAd = null
Page({

  data: {
    url: ''
  },
  onShow:function(){

    // 在适合的场景显示插屏广告
    if (interstitialAd) {
      interstitialAd.show().catch((err) => {
        console.error(err)
      })
    }
  },
  onLoad: function(options) {
    if (wx.createInterstitialAd) {
      interstitialAd = wx.createInterstitialAd({
        adUnitId: 'adunit-cedc5db694a00cb3'
      })
      interstitialAd.onLoad(() => { })
      interstitialAd.onError((err) => { })
      interstitialAd.onClose(() => { })
    }
   
    var that = this;
    app.globalData.DB.collection('varanruslist').where({
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