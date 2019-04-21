//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var songs = wx.getStorageSync('a');
    if (!songs) {
      songs = this.loadSongs();
      wx.setStorageSync('a', songs);
    }
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    userInfo: null
  },
  loadSongs: function () {
    var songs = new Array();
    var song = new Object();
    song.id = 1;
    song.name = "微微一笑很倾城";
    song.singer = "杨洋";
    song.img = "http://y.gtimg.cn/music/photo_new/T002R90x90M000003RxTdZ0sJLwo.jpg"
    song.url = "http://isure.stream.qqmusic.qq.com/C400002NbtFA3fuJhD.m4a?guid=6037385760&vkey=7044FCF89865418E01D9A9964A467EB3F97D96F2E2A5433C615DE2AE9BEB706A9F0C088579C39C8645679BC57181E826A14C559C53828C98&uin=346&fromtag=66";
    song.type = "2";
    songs.push(song);

    var song2 = new Object();
    song2.id = 2;
    song2.name = "你还要我怎样";
    song2.singer = "薛之谦";
    song2.img = "http://y.gtimg.cn/music/photo_new/T002R90x90M000000aWdOx24i3dG.jpg"
    song2.url = "http://dl.stream.qqmusic.qq.com/C400003odRSi1odVpq.m4a?guid=6037385760&vkey=17C1A0807D243F503CC1216A358B13654A302AF5E1C88FCC0BC412AA06361C34732EA53DE53799F65C4B87CEF8377F763319C86D743CB8B3&uin=346&fromtag=66";
    song2.type = "1";
    songs.push(song2);

    var song3 = new Object();
    song3.id = 3;
    song3.name = "演员";
    song3.singer = "薛之谦";
    song3.img = "http://y.gtimg.cn/music/photo_new/T002R90x90M000003y8dsH2wBHlo.jpg"
    song3.url = "http://113.105.141.23/amobile.music.tc.qq.com/C400001Qu4I30eVFYb.m4a?guid=6037385760&vkey=12859114149486941431BFFA228CC409C6EB3B4B5FDF4447439DAB60F23ED9F5D46D64D644FD25CD004C5BDCD01D5D6E0EC2108D5CF7DB51&uin=346&fromtag=66";
    song3.type = "1";
    songs.push(song3);

    var song4 = new Object();
    song4.id = 4;
    song4.name = "此时此刻";
    song4.singer = "许巍";
    song4.img = "http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000"
    song4.url = "http://dl.stream.qqmusic.qq.com/C400001VfvsJ21xFqb.m4a?guid=6037385760&vkey=CE244898F63D85DB92C67D03CBF2B65CEC072C1268C2BBE185B5E5019177528CDD19F74CF207437B3F550555A232A60D72BC1F559EB05A24&uin=346&fromtag=66";
    song4.type = "1";
    songs.push(song4);

    var song5 = new Object();
    song5.id = 5;
    song5.name = "告白气球";
    song5.singer = "周杰伦";
    song5.img = "http://y.gtimg.cn/music/photo_new/T002R90x90M000003RMaRI1iFoYd.jpg";
    song5.url = "http://dl.stream.qqmusic.qq.com/C4000045Ipx704Olyk.m4a?guid=6037385760&vkey=CF9AF447D46E271BDDEE5679F55D72A5DDA98CC9D33F9C0A6BD866477940E132506DB87ADB5D2D1548F0744E2B98D0D1D096F9C8DDF51CBD&uin=346&fromtag=66";
    song5.type = "1";
    songs.push(song5);

    return songs;

  }
})