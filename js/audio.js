/**/
/* JScript for Audio Blind Test / Music Badge apps */
/**/

// Initialise BS Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

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
// Note: it should work on iOS devices
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


// starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
  

// Disable right-click menu on page
// window.addEventListener('contextmenu', function (e) { 
//     // do something here... 
//     e.preventDefault(); 
//   }, false);
