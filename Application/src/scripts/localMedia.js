var localMedia = {

	getMedia: function(isAudio, isVideo) {
		window.getUserMedia({
			'audio' : isAudio,
			'video' : isVideo
		},
		gotUserMedia,
		didntGetUserMedia
		);
	}

	gotUserMedia: function(stream) {
		window.attachMediaStream($(".webrtc-video"), stream);
	},

	didntGetUserMedia: function() {
		console.log("couldnt get video");
	}
}

return localMedia;