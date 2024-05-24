document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('video');
    var playPauseButton = document.getElementById('play-pause');
    var muteButton = document.getElementById('mute');
    var progressBar = document.getElementById('progress-bar');
    var volumeBar = document.getElementById('volume-bar');
    var commentInput = document.getElementById('comment-input');
    var submitCommentButton = document.getElementById('submit-comment');
    var commentsSection = document.querySelector('.comments-section');

    // Play and Pause the video
    playPauseButton.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            playPauseButton.textContent = 'Pause';
        } else {
            video.pause();
            playPauseButton.textContent = 'Play';
        }
    });

    // Mute and Unmute the video
    muteButton.addEventListener('click', function() {
        if (video.muted) {
            video.muted = false;
            muteButton.textContent = 'Mute';
        } else {
            video.muted = true;
            muteButton.textContent = 'Unmute';
        }
    });

    // Update the progress bar as the video plays
    video.addEventListener('timeupdate', function() {
        var value = (100 / video.duration) * video.currentTime;
        progressBar.value = value;
    });

    // Seek the video when the progress bar is changed
    progressBar.addEventListener('input', function() {
        var time = video.duration * (progressBar.value / 100);
        video.currentTime = time;
    });

    // Adjust the volume of the video
    volumeBar.addEventListener('input', function() {
        video.volume = volumeBar.value;
    });

    // Submit a new comment
    submitCommentButton.addEventListener('click', function() {
        var commentText = commentInput.value.trim();
        if (commentText !== "") {
            var commentElement = document.createElement('div');
            commentElement.className = 'comment';
            commentElement.innerHTML = '<p><strong>You:</strong> ' + commentText + '</p>';
            commentsSection.insertBefore(commentElement, commentInput);
            commentInput.value = '';
        }
    });
});
