let inputUrl = document.querySelector('input[type=submit]')
inputUrl.addEventListener('click', function() {
	let videoSrc = document.querySelector('#input-url').value
	let getVideoTag = document.querySelector('#video-player')
	let videoSource = document.createElement('source')
		videoSource.setAttribute('src', videoSrc)
		getVideoTag.appendChild(videoSource)
		getVideoTag.play()
		getVideoTag.requestFullscreen()
})