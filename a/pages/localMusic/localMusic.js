Page({
  data:{
    currentTab:0,
    songs:[]
  },
  switchNav:function(e){
    var page = this;
    var id = e.target.dataset.current;
    if(this.data.currentTab == id){
      return false;
    }else{
      page.setData({ currentTab:id});
    }
  },
  onLoad:function(){
    this.loadSongs();
  },
  loadSongs:function(){
    var songs = wx.getStorageSync("songs");
    this.setData({songs:songs});
  },
  playSong:function(e){
     var songs = wx.getStorageSync("songs");
     var id = e.currentTarget.id;
     var arr = new Array();
     for(var i=0;i<songs.length;i++){
        var m = songs[i];
        if(id==m.id){
          m.type = "2";
        }else{
          m.type = "1";
        }
        arr.push(m);
     }
     wx.setStorageSync("songs", arr);
     this.loadSongs();
  },
  searchSong:function(e){
    var name = e.detail.value;
    var songs = wx.getStorageSync("songs");
    var arr = new Array();
    for(var i=0;i<songs.length;i++){
        var m = songs[i];
        if(m.name.indexOf(name) > -1 || m.singer.indexOf(name) > -1){
           arr.push(m);
        }
    }
    this.setData({songs:arr});
  }
})