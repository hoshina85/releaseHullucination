
$(function() {
  var bgm, button_close, button_open, el, ext;
  console.log('start');
  bgm = new Audio;
  el = "";
  $(bgm).bind('loadstart', function(e) {
    return $(el).children('i').removeClass('icon-play').addClass('icon-refresh');
  }).bind('loadeddata', function(e) {
    $(el).children('i').removeClass('icon-refresh').addClass('icon-play');
    return this.play();
  });
  if (bgm.canPlayType('audio/mp3')) {
    ext = '.mp3';
  } else {
    ext = '.ogg';
  }
  console.log(bgm);
  console.log('ext:' + ext);
  $('.play_music').click(function() {
    var btn, src;
    btn = $(this);
    el = this;
    if (btn.hasClass('btn-primary')) {
      src = (btn.attr('data-src')) + ext;
      bgm.src = src;
      $('.play_music').each(function() {
        return button_close($(this));
      });
      return button_open(btn);
    } else {
      bgm.pause();
      bgm.currentTime = 0;
      return button_close(btn);
    }
  });
  button_close = function(btn) {
    return btn.removeClass('btn-danger').addClass('btn-primary').children('i').removeClass('icon-stop').addClass('icon-play');
  };
  button_open = function(btn) {
    return btn.removeClass('btn-primary').addClass('btn-danger').children('i').removeClass('icon-play').addClass('icon-stop');
  };
});
