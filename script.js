const videoElement = document.getElementById('video')
const button = document.getElementById('button')

// Prompt to select media stream, pass to video element, then play

async function selectMediaStream() {
    try {
        const mediaStrem = await navigator.mediaDevices.getDisplayMedia()
        videoElement.srcObject = mediaStrem;
        videoElement.onloadedmetadata = () => {
            videoElement.play()
        }
    } catch (error) {
        console.log('Opa hay un error', error)
    }
}

button.addEventListener('click', async () => {
    // Disable button
    button.disabled = true
    // Start Picture in Picture 
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false

})

// onLoad
selectMediaStream()