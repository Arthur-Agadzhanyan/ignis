@@include('webpTest.js');

const introTitle = document.querySelector('.intro__title');
const navigation = document.getElementById('navigation')
const introInfo = document.querySelector('.intro__info')
const introContent = document.querySelector('.intro__content')
const listLinks = document.querySelectorAll('.list__link')

introTitle.addEventListener('click',()=>{
    window.scrollTo(0, 0)
    document.body.classList.toggle("scroll_block")
    navigation.classList.toggle("nav_closed")

    introInfo.classList.toggle("info_opened")
    introContent.classList.toggle("content_opened")

    listLinks.forEach((item)=>{
        item.classList.remove('list__link-active')
    })
})

listLinks.forEach((link)=>{

    link.addEventListener('click',(e)=>{
        listLinks.forEach((item)=>{
            item.classList.remove('list__link-active')
        })
        e.currentTarget.classList.add("list__link-active")
    })

})