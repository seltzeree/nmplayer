$(function () {
    var playerTrack = $("#player-track"),
      bgArtwork = $("#bg-artwork"),
      bgArtworkUrl,
      albumName = $("#album-name"),
      trackName = $("#track-name"),
      albumArt = $("#album-art"),
      sArea = $("#s-area"),
      seekBar = $("#seek-bar"),
      trackTime = $("#track-time"),
      insTime = $("#ins-time"),
      sHover = $("#s-hover"),
      playPauseButton = $("#play-pause-button"),
      i = playPauseButton.find("i"),
      tProgress = $("#current-time"),
      tTime = $("#track-length"),
      seekT,
      seekLoc,
      seekBarPos,
      cM,
      ctMinutes,
      ctSeconds,
      curMinutes,
      curSeconds,
      durMinutes,
      durSeconds,
      playProgress,
      bTime,
      nTime = 0,
      buffInterval = null,
      tFlag = false,
      albums = [
        "Please Tell Me Why",
        "Dope Lovers",
        "Set It Off",
        "Undefeated",
        "Love is Ugly",
        "End of the World",
        "Lovers in the Night",
        "Internet Moms",
        "Heat Waves",
        "Fantasy",
        "I Really Want to Stay at Your House",
        "Let You Down",
        "Don't Belong",
        "God Complex",
        "If And/Or When",
        "Dazed and Confused",
        "Painkiller",
        "Drifting Away",
        "Hollow",
        "Save Me",
        "Not You",
        "Novocaine",
        "Hell/Heaven",
        "Understand",
        "Somebody",
        "Alone, Pt.II",
        "Hero",
        "Aurora",
        "Who I Am",
        "Worlds Away",
        "Ghost",
        "Bad Habits",
        "Ghost in the Machine",
        "Dust + Stars",
        "Ghost",
        "Rush Over Me",
        "The Equaliser",
        "In The End",
        "AKIRA",
        "Speed Is Life",
        "Freaks",
        "Night Phonk",
        "Step Back!",
        "Limbo",
        "Land of Fire",
        "Cowbell Goth",
        "Ghost in the Shell",
        "Fuku",
        "Murder in my Mind",
        "Metamorphosis",
        "Worth Nothing",
        "Tokyo Drift"
      ],
      trackNames = [
        "Freestyle",
        "DPR Ian",
        "LoL, DPR Ian",
        "XG, Valorant",
        "Jay Park, HWASA",
        "Epik High, GSoul",
        "Seori",
        "Castle Carousel",
        "Glass Animals",
        "Khai Dreams",
        "Rosa Walton",
        "Davvid Podsiadlo",
        "Toyko",
        "The True Blue",
        "Ruel",
        "Ruel",
        "Ruel",
        "Khai Dreams",
        "Dabin, Lø Spirit",
        "NURKO, Kyle Hume",
        "Alan Walker",
        "Shiloh Dynasty",
        "Keshi",
        "Keshi",
        "Keshi",
        "Alan Walker",
        "Alan Walker",
        "K-391, RøRY",
        "Alan Walker",
        "Dabin, Trella",
        "Au/Ra, Alan Walker",
        "Cherry Nightcore",
        "Trivecta",
        "Rogue VHS",
        "Gunship, Power Glove",
        "The Midnight",
        "Dabin, Said The Sky",
        "Seven Lions, Dabin",
        "Rogue VHS",
        "Lykia",
        "PHARAøH, Fyex",
        "COWBELL DYNASTY",
        "1nonly, SXMPRA",
        "Freddie Dredd",
        "Kordell",
        "DRAGONMANE",
        "Savage Ga$p, KAMAARA, SXMPRA",
        "Kordhell, ZWE1HVNDXR",
        "Kordell",
        "Interworld",
        "Twisted, Oliver Tree",
        "PRXSXNT FXTURE"
      ],
      albumArtworks = ["_1", "_2", "_3", "_4", "_5", "_6", "_7", "_8", "_9", "_10", "_11", "_12", "_13", "_14", "_15", "_16", "_17", "_18", "_19", "_20", "_21", "_22", "_23", "_24", "_25", "_26", "_27", "_28", "_29", "_30", "_31", "_32", "_33", "_34", "_35", "_36", "_37", "_38", "_39", "_40", "_41", "_42", "_43", "_44", "_45", "_46", "_47", "_48", "_49", "_50", "_51", "_52"];
      trackUrl = [
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/1.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/2.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/3.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/4.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/5.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/6.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/7.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/8.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/9.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/10.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/11.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/12.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/13.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/14.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/15.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/16.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/17.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/18.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/19.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/20.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/21.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/22.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/23.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/24.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/25.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/26.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/27.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/28.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/29.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/30.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/31.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/32.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/33.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/34.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/35.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/36.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/37.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/38.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/39.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/40.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/41.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/42.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/43.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/44.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/45.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/46.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/47.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/48.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/49.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/50.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/51.mp3",
          "https://raw.githubusercontent.com/seltzeree/nmplayer/main/songs/52.mp3"
      ],
      playPreviousTrackButton = $("#play-previous"),
      playNextTrackButton = $("#play-next"),
      currIndex = -1;
  
    function playPause() {
      setTimeout(function () {
        if (audio.paused) {
          playerTrack.addClass("active");
          albumArt.addClass("active");
          checkBuffering();
          i.attr("class", "fas fa-pause");
          audio.play();
        } else {
          playerTrack.removeClass("active");
          albumArt.removeClass("active");
          clearInterval(buffInterval);
          albumArt.removeClass("buffering");
          i.attr("class", "fas fa-play");
          audio.pause();
        }
      }, 300);
    }
  
    function showHover(event) {
      seekBarPos = sArea.offset();
      seekT = event.clientX - seekBarPos.left;
      seekLoc = audio.duration * (seekT / sArea.outerWidth());
  
      sHover.width(seekT);
  
      cM = seekLoc / 60;
  
      ctMinutes = Math.floor(cM);
      ctSeconds = Math.floor(seekLoc - ctMinutes * 60);
  
      if (ctMinutes < 0 || ctSeconds < 0) return;
  
      if (ctMinutes < 0 || ctSeconds < 0) return;
  
      if (ctMinutes < 10) ctMinutes = "0" + ctMinutes;
      if (ctSeconds < 10) ctSeconds = "0" + ctSeconds;
  
      if (isNaN(ctMinutes) || isNaN(ctSeconds)) insTime.text("--:--");
      else insTime.text(ctMinutes + ":" + ctSeconds);
  
      insTime.css({ left: seekT, "margin-left": "-21px" }).fadeIn(0);
    }
  
    function hideHover() {
      sHover.width(0);
      insTime.text("00:00").css({ left: "0px", "margin-left": "0px" }).fadeOut(0);
    }
  
    function playFromClickedPos() {
      audio.currentTime = seekLoc;
      seekBar.width(seekT);
      hideHover();
    }
  
    function updateCurrTime() {
      nTime = new Date();
      nTime = nTime.getTime();
  
      if (!tFlag) {
        tFlag = true;
        trackTime.addClass("active");
      }
  
      curMinutes = Math.floor(audio.currentTime / 60);
      curSeconds = Math.floor(audio.currentTime - curMinutes * 60);
  
      durMinutes = Math.floor(audio.duration / 60);
      durSeconds = Math.floor(audio.duration - durMinutes * 60);
  
      playProgress = (audio.currentTime / audio.duration) * 100;
  
      if (curMinutes < 10) curMinutes = "0" + curMinutes;
      if (curSeconds < 10) curSeconds = "0" + curSeconds;
  
      if (durMinutes < 10) durMinutes = "0" + durMinutes;
      if (durSeconds < 10) durSeconds = "0" + durSeconds;
  
      if (isNaN(curMinutes) || isNaN(curSeconds)) tProgress.text("00:00");
      else tProgress.text(curMinutes + ":" + curSeconds);
  
      if (isNaN(durMinutes) || isNaN(durSeconds)) tTime.text("00:00");
      else tTime.text(durMinutes + ":" + durSeconds);
  
      if (
        isNaN(curMinutes) ||
        isNaN(curSeconds) ||
        isNaN(durMinutes) ||
        isNaN(durSeconds)
      )
        trackTime.removeClass("active");
      else trackTime.addClass("active");
  
      seekBar.width(playProgress + "%");
  
      if (playProgress == 100) {
        i.attr("class", "fa fa-play");
        seekBar.width(0);
        tProgress.text("00:00");
        albumArt.removeClass("buffering").removeClass("active");
        clearInterval(buffInterval);
      }
    }
  
    function checkBuffering() {
      clearInterval(buffInterval);
      buffInterval = setInterval(function () {
        if (nTime == 0 || bTime - nTime > 1000) albumArt.addClass("buffering");
        else albumArt.removeClass("buffering");
  
        bTime = new Date();
        bTime = bTime.getTime();
      }, 100);
    }
  
    function selectTrack(flag) {
      if (flag == 0 || flag == 1) ++currIndex;
      else --currIndex;
  
      if (currIndex > -1 && currIndex < albumArtworks.length) {
        if (flag == 0) i.attr("class", "fa fa-play");
        else {
          albumArt.removeClass("buffering");
          i.attr("class", "fa fa-pause");
        }
  
        seekBar.width(0);
        trackTime.removeClass("active");
        tProgress.text("00:00");
        tTime.text("00:00");
  
        currAlbum = albums[currIndex];
        currTrackName = trackNames[currIndex];
        currArtwork = albumArtworks[currIndex];
  
        audio.src = trackUrl[currIndex];
  
        nTime = 0;
        bTime = new Date();
        bTime = bTime.getTime();
  
        if (flag != 0) {
          audio.play();
          playerTrack.addClass("active");
          albumArt.addClass("active");
  
          clearInterval(buffInterval);
          checkBuffering();
        }
  
        albumName.text(currAlbum);
        trackName.text(currTrackName);
        albumArt.find("img.active").removeClass("active");
        $("#" + currArtwork).addClass("active");
  
        bgArtworkUrl = $("#" + currArtwork).attr("src");
  
        bgArtwork.css({ "background-image": "url(" + bgArtworkUrl + ")" });
      } else {
        if (flag == 0 || flag == 1) --currIndex;
        else ++currIndex;
      }
    }
  
    function initPlayer() {
      audio = new Audio();
  
      selectTrack(0);
  
      audio.loop = false;
  
      playPauseButton.on("click", playPause);
  
      sArea.mousemove(function (event) {
        showHover(event);
      });
  
      sArea.mouseout(hideHover);
  
      sArea.on("click", playFromClickedPos);
  
      $(audio).on("timeupdate", updateCurrTime);
  
      playPreviousTrackButton.on("click", function () {
        selectTrack(-1);
      });
      playNextTrackButton.on("click", function () {
        selectTrack(1);
      });
    }
  
    initPlayer();
  });
  