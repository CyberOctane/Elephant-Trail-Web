/////////// Nav controls ///////////

// menu btn actions//

var menuBtn = document.getElementById('menu-btn');
var menu = document.getElementById('menu');
var subMenuBtn = document.getElementById('sub-menu-btn');
var menuDrop = document.getElementById('sub-menu-drop');

menuBtn.addEventListener("click", function () {
    menu.classList.toggle('open');
    menuBtn.classList.toggle('open');
    if (menuDrop.classList.contains('open')) {
        menuDrop.classList.toggle('open');
    }
});

// toggle transparent nav //

var nav = document.getElementById('land-nav');

var viewHeight = window.innerHeight;
var scrollSection = 0;

window.addEventListener('scroll', ()=> {
    var scrollAmount = window.pageYOffset;
    
    if (scrollAmount > viewHeight*0.9) {
        nav.classList.remove("transparent");
    }
    
    if (scrollAmount < viewHeight*0.9) {
        nav.classList.add("transparent");
    }
})

/*
window.addEventListener('scroll', ()=>{
    var scrollAmount = window.pageYOffset;
    
    if( scrollSection > 0 && scrollAmount < viewHeight*0.2) {
        heroContent.classList.remove('hide');
        scrollSection = 0;
    } else if( scrollSection == 0 && scrollAmount > viewHeight*0.01) {
        heroContent.classList.add('hide');
        scrollSection = 1;
    } else if( scrollSection == 1 && scrollAmount > viewHeight){
        nav.classList.remove('white-nav');
        scrollSection = 2;
    } else if(scrollSection == 2 && scrollAmount > viewHeight*3){
        nav.classList.remove('clear');
    } else if(scrollSection == 2 && scrollAmount < viewHeight*3){
        nav.classList.add('clear')
    }

})
*/