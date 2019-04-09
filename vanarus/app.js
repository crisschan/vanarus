//app.js
const app = getApp()


App({
  onLaunch: function () {
    
   
      wx.cloud.init({
        env: 'vanarus-49df1f',
        traceUser: true,
      })
     
    /*wx.cloud.getTempFileURL({
      fileList: ['cloud://1.jpg', 'cloud://2.jpg', 'cloud://3.jpg', 'cloud://4.jpg', 'cloud://5.jpg'
        , 'cloud://6.jpg', 'cloud://7.jpg', 'cloud://8.jpg', 'cloud://9.jpg', 'cloud://10.jpg'],
      success: res => {
        // fileList 是一个有如下结构的对象数组
        // [{
        //    fileID: 'cloud://xxx.png', // 文件 ID
        //    tempFileURL: '', // 临时文件网络链接
        //    maxAge: 120 * 60 * 1000, // 有效期
        // }]
        console.log(res.fileList)
      },
      fail: console.error
    })*/
    const db = wx.cloud.database({
      config: {
        env: 'vanarus-49df1f',
      }
    });

    //const tb = db.collection('varanruslist');
    this.globalData.DB=db
    //this.globalData.TB=tb
    },

    globalData :{
        DB:null
        
    }
  
})