define(function (require) {
	var webrtc = require('src/scripts/webrtc-main');

	var VideoArea = React.createClass({
		displayName: 'video',
		render: function() {
			return (
				React.createElement('video', {className: "webrtc-video", autoPlay: "autoplay", id: "local-video"})
			);
		}
	});

	React.render(
		React.createElement(VideoArea),
		document.getElementById("WebRTCApplication-container")
	);

	webrtc.init();
	webrtc.getMedia(true,true);
});