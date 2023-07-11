let vw = window.matchMedia("(min-width: 1024px)");
let vid = document.querySelector('.video');
let source = document.querySelector('.video source');
let aboutImage = document.querySelector('.about-us .image img');

window.addEventListener('load', function() {
    if (vw.matches) {
        source.src = 'videos/Lines2comp.mp4';
        console.log(`onload ${source.src}`);
        vid.load();
    }
})

window.addEventListener('resize', function() {
    if (vw.matches) {
        source.src = 'videos/Lines2comp.mp4';
        console.log(`resize ${source.src}`);
        vid.load();
    } else {
        source.src = 'videos/BannerVideoLines.mp4';
        vid.load();
    }
});

let original = true;

setInterval(function(){
    original = !original;
    if(original === true) {
        aboutImage.setAttribute('src', 'branding/Rhino_Space_02_small.jpg');
    } else {
        aboutImage.setAttribute('src', 'branding/Rhino_Space_small.jpg');
    }
}, 6000);