var images = [
    'https://www.gstatic.com/webp/gallery3/1.sm.png',
    'https://www.gstatic.com/webp/gallery3/2.sm.png',
    'https://www.gstatic.com/webp/gallery3/3.sm.png'
]

var time = 2000
var i = 0
var ref = document.getElementById('img')

ref.src = images[i]

function image() {

    if (i < images.length - 1) {
        i++
    } else {
        i = 0
    }
    ref.src = images[i]
}

setInterval('image()', time)