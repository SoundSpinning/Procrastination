/**/
/* JScript for Audio Blind Test app */
/**/
// Initialize Tooltip
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip({trigger: 'hover'});
});

// 
// Play/Pause tracks with single play click & when ended it moves to next track
// Note: it should works on iOS devices
window.onload = init;
function init() {
    document.addEventListener('play', function (e) {
        var allTracks = document.getElementsByTagName('audio');
        var indexT = Array.prototype.indexOf.call(allTracks, e.target);

        for (var i = 0, len = allTracks.length; i < len; i++) {
            if (allTracks[i] != e.target) {
                allTracks[i].pause(); // stop All Sounds except play one
            }
        }

        // this moves onto next track when current one ends
        e.target.addEventListener('ended', function(){            
            if (indexT != null) {
                if (indexT == allTracks.length-1) {
                    indexT = -1;
                }
            allTracks[indexT+1].load();
            allTracks[indexT+1].play();
            }
        });
    }, true);
}
