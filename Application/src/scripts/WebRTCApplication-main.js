var webrtc = require('webrtc-main');

var VideoArea = React.createClass({
	displayName: 'video',
	render: function() {
		return (
			React.createElement('div', {className: "webrtc-video"});
		);
	}
});

React.render(
	React.createElement(VideoArea, {autoplay: 'autoplay'}),
	document.getElementById("WebRTCApplication-container")
);

webrtc.init();