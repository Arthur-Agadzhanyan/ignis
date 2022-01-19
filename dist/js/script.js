function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
});;

const introTitle = document.querySelector('.intro__title');

const navigation = document.getElementById('navigation')
const navigationMb = document.querySelector('.navbar_mobile')

const introInfo = document.querySelector('.intro__info')
const introContent = document.querySelector('.intro__content')
const listLinks = document.querySelectorAll('.list__link')

const navbarBtn = document.getElementById("navbar__btn")
const mobileBar = document.querySelector(".mobile_bar")

window.scrollTo(0, 0)

introTitle.addEventListener('click',()=>{
    window.scrollTo(0, 0)
    document.body.classList.toggle("scroll_block")
    navigation.classList.toggle("nav_closed")
    navigationMb.classList.toggle("nav_closed")

    introInfo.classList.toggle("info_opened")
    introContent.classList.toggle("content_opened")

    listLinks.forEach((item)=>{
        item.classList.remove('list__link-active')
    })
})

navbarBtn.addEventListener('click',(e)=>{

    e.currentTarget.classList.toggle('burger_active')

    mobileBar.classList.toggle("mb_bar_closed")
})

listLinks.forEach((link)=>{

    link.addEventListener('click',(e)=>{
        listLinks.forEach((item)=>{
            item.classList.remove('list__link-active')
        })
        e.currentTarget.classList.add("list__link-active")
        mobileBar.classList.add("mb_bar_closed")
        navbarBtn.classList.remove('burger_active')
    })

})