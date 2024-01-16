
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');
var nt = document.querySelector('.hola div span:nth-child(8)');
var a = document.querySelector('.hola div span:nth-child(7)');
var b = document.querySelector('.hola div span:nth-child(6)');
var c = document.querySelector('.hola div span:nth-child(5)');
var d = document.querySelector('.hola div span:nth-child(4)');
var e = document.querySelector('.hola div span:nth-child(3)');
var f = document.querySelector('.hola div span:nth-child(2)');
var g = document.querySelector('.hola div span:nth-child(1)');
var m = document.querySelector('.work .slider');
var n = document.querySelector('.work .menu');
var h = document.querySelector('.work .logo');
var i = document.querySelector('.work .arrows');
var j = document.querySelector('.work .thumbnail');
// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 2000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 2000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})
gsap.to('.hola', { scale: 0, delay: 9.5, 
onComplete: function(){
    gsap.set('.hola', {display: 'none'});
} });
gsap.set(n, { y: -100});
gsap.set(j, { y: 1000});
gsap.set(i, { x: -10000});
gsap.set(h, { x: 10000, scale: 2});
gsap.set('.work', { display: 'block', delay: 10
});
gsap.to(m, { scale: 1, ease: 'power4.inOut', duration: 1, delay: 10})
gsap.to(n, { y: 0, delay: 10.5, duration: 1})
gsap.to(h, { x: 0, delay: 10.5, duration: 2, scale: 1})
gsap.to(i, { x: 0, delay: 11, duration: 1})
gsap.to(j, { y: 0, delay: 11, duration: 1 })
gsap.from(nt, { duration: 1, y: '400%', delay: 0, ease: 'power4.in', onComplete: function(){ gsap.to(nt, { duration: 2, scale: 5, delay: 6.5,})}})
gsap.from(a, { duration: 1, y: '-400%', delay: 0.1, ease: 'power4.in' })
gsap.from(b, { duration: 1, y: '400%', delay: 0.2, ease: 'power4.in' })
gsap.from(c, { duration: 1, y: '-400%', delay: 0.3, ease: 'power4.in' })
gsap.from(d, { duration: 1, y: '400%', delay: 0.4, ease: 'power4.in' })
gsap.from(e, { duration: 1, y: '-400%', delay: 0.5, ease: 'power4.in' })
gsap.from(f, { duration: 1, y: '400%', delay: 0.6, ease: 'power4.in' })
gsap.from(g, { duration: 1, y: '-400%', delay: 0.7, ease: 'power4.in' })
gsap.from(h, { duration: 1, y: '400%', delay: 0.8, ease: 'power4.in' })
