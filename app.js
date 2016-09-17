// jshint browser: true, jquery: true, esversion: 6

let player = videojs('my-video').ready(function () {
  /**
  * Hotkeys support via plugin 'videojs-hotkeys'
  */
  this.hotkeys({
    volumeStep: 0.1,
    seekStep: 1,
    alwaysCaptureHotkeys: true
  });
  /**
  * Hide controls but let the listeners persist so we can still use hotkeys
  */
  this.removeClass('vjs-controls-enabled');
  this.addClass('vjs-controls-disabled');
  this.trigger('controlsdisabled');
});
