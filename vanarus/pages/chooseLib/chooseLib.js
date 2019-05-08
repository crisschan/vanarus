// pages/chooseLib/chooseLib.js
const app = getApp()
Page({

  data: {
    url: ''
  },

  onLoad: function(options) {
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