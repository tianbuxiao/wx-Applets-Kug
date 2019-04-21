Page({
  data:{
    playing:false,
    song:{}
  },
  onLoad:function(){
    var songs = wx.getStorageSync("a");
    this.setData({song:songs[0]});
  },
  play:function(e){
    var id = e.currentTarget.id;
    console.log(id);
    var songs = wx.getStorageSync("a");
    var song = new Object();
    for(var i=0;i<songs.length;i++){
       if(id==songs[i].id){
          song = songs[i];
          break;
       }
    }
    var page = this;
    wx.playBackgroundAudio({
      dataUrl: song.url,
      name:song.name,
      singer:song.singer,
      coverImgUrl:song.img,
      complete:function(res){
         page.setData({playing:true});
      }
    })
  },
  stop:function(e){
    var page = this;
    wx.pauseBackgroundAudio({
      success:function(){
        page.setData({playing:false});
      }
    });
  },
  localMusic:function(){
    wx.navigateTo({
      url: '../localMusic/localMusic'
    })
  }
})