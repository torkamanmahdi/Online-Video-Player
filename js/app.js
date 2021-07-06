const inputUrl = document.querySelector('input[type=submit]')
inputUrl.addEventListener('click', function() {
	const videoSrc = document.querySelector('#input-url').value
	// const videoUrl = document.querySelector('#input-url')
	const getVideoTag = document.querySelector('#player')
	const videoSource = document.createElement('source')
		videoSource.setAttribute('src', videoSrc)
		getVideoTag.appendChild(videoSource)
		getVideoTag.play()
		// getVideoTag.requestFullscreen()
		// videoUrl.style.display = 'none'
		// inputUrl.style.display = 'none'
})
const player = new Plyr('#player', {
	controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen']}
)
const removeCopyright = document.querySelector('#remove')
removeCopyright.addEventListener('click', function() {
	getComputedStyle(document.querySelector('.plyr__video-wrapper'), ':before').getPropertyValue('content')
})