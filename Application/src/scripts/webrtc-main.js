define(function (require) {

	var localMediaComponent = require('src/scripts/localMedia');

	var webrtc = {

		init: function() {
			console.log('webrtc-js initialized');
		},

		getMedia: function(isAudio, isVideo) {
			localMediaComponent.getMedia(isAudio, isVideo);
		}
	};

	return webrtc;
});