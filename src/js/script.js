@@include('webpTest.js');

AOS.init();

const navigation = document.getElementById('navigation')
const navigationMb = document.querySelector('.navbar_mobile')

const introInfo = document.querySelector('.intro__info')
const introContent = document.querySelector('.intro__content')
const listLinks = document.querySelectorAll('.list__link')

const navbarBtn = document.getElementById("navbar__btn")
const mobileBar = document.querySelector(".mobile_bar")

const introBlock = document.querySelector('.intro_block')

window.scrollTo(0, 0)

window.addEventListener('scroll',()=>{
    // window.scrollTo(0, 0)

    document.body.classList.remove("scroll_block")
    navigation.classList.remove("nav_closed")
    navigationMb.classList.remove("nav_closed")

    introInfo.classList.add("info_opened")
    introContent.classList.add("content_opened")

    listLinks.forEach((item)=>{
        item.classList.remove('list__link-active')
    })
})

navbarBtn.addEventListener('click',(e)=>{

    e.currentTarget.classList.toggle('burger_active')

    mobileBar.classList.toggle("mb_bar_closed")

    if(mobileBar.classList.contains('bot_0')){
        mobileBar.classList.remove("bot_0")
    }else{
        setTimeout(()=>{
            mobileBar.classList.add("bot_0")
        },500)
    } 
})

listLinks.forEach((link)=>{

    link.addEventListener('click',(e)=>{
        listLinks.forEach((item)=>{
            item.classList.remove('list__link-active')
        })
        e.currentTarget.classList.add("list__link-active")
        mobileBar.classList.add("mb_bar_closed")
        mobileBar.classList.remove("bot_0")
        navbarBtn.classList.remove('burger_active')
    })

})

document.addEventListener("touchmove", function(event){ // отключение отскока
    event.preventDefault();
});