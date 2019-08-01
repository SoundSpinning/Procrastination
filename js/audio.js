/**/
/* JScript for Audio Blind Test app */
/**/
// Initialize Tooltip
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip({trigger: 'hover'});
});

// attempt to hack iOS audio play problem, doesn't work yet ...
var isUnlocked = false;
function unlock() {
            
    if(isIOS || this.unlocked)
        return;

    // create empty buffer and play it
    var buffer = myContext.createBuffer(1, 1, 22050);
    var source = myContext.createBufferSource();
    source.buffer = buffer;
    source.connect(myContext.destination);
    source.noteOn(0);

    // by checking the play state after some time, we know if we're really unlocked
    setTimeout(function() {
        if((source.playbackState === source.PLAYING_STATE || source.playbackState === source.FINISHED_STATE)) {
            isUnlocked = true;
        }
    }, 0);

}


// 
// Play/Pause tracks with single play click
// Note: it doesn't work yet on iOS devices ...
window.onload = init;
function init() {
    document.addEventListener('play', function (e) {
        var allTracks = document.getElementsByTagName('audio');

        for (var i = 0, len = allTracks.length; i < len; i++) {
            if (allTracks[i] != e.target) {
                allTracks[i].pause(); // stop All Sounds except play one
            }
        }
        // this moves onto next track when current one ends
        e.target.addEventListener('ended', function(){
            var indexT = Array.prototype.indexOf.call(allTracks, e.target);
            if (indexT != null) {
                allTracks[indexT+1].play();
            }
        });
    }, true);
}
