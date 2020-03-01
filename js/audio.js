/**/
/* JScript for Audio Blind Test / Music Badge apps */
/**/
// Initialize Tooltip
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip({trigger: 'hover'});
});

var isNoShow = document.querySelectorAll('.no-show');
var isLand1 = document.querySelectorAll('.land-1');
var isLand2 = document.querySelectorAll('.land-2');
var isTracks = document.querySelector('#Tracks');

isTracks.addEventListener('click', function () {
    for (var i = 0, len = isNoShow.length; i < len; i++) {
        isNoShow[i].classList.toggle('no-show');
    }
    for (var i = 0, len = isLand1.length; i < len; i++) {
        isLand1[i].classList.toggle('land-1');
    }
    for (var i = 0, len = isLand2.length; i < len; i++) {
        isLand2[i].classList.toggle('land-2');
    }
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
            allTracks[indexT+1].play();
            }
        });
    }, true);
}

// SiriWave settings
// var siriWave = new SiriWave({
//     container: document.getElementById('siri-container'),
//     width: 640,
//     height: 200,
// });
