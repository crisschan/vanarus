//index.js
const app = getApp()


// pages/myOrder/myOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uhide: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // 在页面onLoad回调事件中创建插屏广告实例
  
  },

  //切换隐藏和显示 
  toggleBtn: function (e) {
    var that = this;
   
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../addFunction/addFunction?id='+id,
    })
  },
  toggleBtnhistry: function (e) {
    var that = this;

    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../chooseLib/chooseLib?id=11',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    var data = {
      "datas": null
    }
    
    
    app.globalData.DB.collection('varanruslist').limit(10).get({
      success(res) {
        data = {
          "datas": res.data
        }
        that.setData({
          carInfoData: data.datas
          
        })
      }
    })

    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})

/*
Page({
  data: {
    uhide: 0
  },


  onLoad: function() {
    var that = this;
    var data ={}
    app.globalData.DB.collection('varanruslist').get({
      success(res) {
        //console.log(res.data)
         data = {
          "datas": res.data
        };
      }
    })
   
    //console.log(data.datas);
    //设置车辆展示信息
    that.setData({
      carInfoData: data.datas
    })
  },
  onShow:function(){
    
  }
})*/