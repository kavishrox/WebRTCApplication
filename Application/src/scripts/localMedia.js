define(function (require) {

	var localMedia = {

		getMedia: function(isAudio, isVideo) {
			window.getUserMedia({
				'audio' : isAudio,
				'video' : isVideo
			},
			this.gotUserMedia,
			this.didntGetUserMedia
			);
		},

		gotUserMedia: function(stream) {
			var myVideo = document.getElementById('local-video');
			window.attachMediaStream(myVideo, stream);
		},

		didntGetUserMedia: function() {
			console.log("couldnt get video");
		}
	}

	return localMedia;
});