@@include('webpTest.js');
@@include("hover-effect.umd.js");

const introTitle = document.querySelector('.intro__title');
const navigation = document.getElementById('navigation')
const introInfo = document.querySelector('.intro__info')
const introContent = document.querySelector('.intro__content')

introTitle.addEventListener('click',()=>{
    window.scrollTo(0, 0)
    document.body.classList.toggle("scroll_block")
    navigation.classList.toggle("nav_closed")

    introInfo.classList.toggle("info_opened")
    introContent.classList.toggle("content_opened")
})

// new hoverEffect({
//     parent: document.querySelector(".distortion"),
//     intensity: 0.2,
//     image1: "../img/01.png",
//     image2: "../img/02.png",
//     displacementImage: "../img/diss.png",
//     imagesRatio: 580 / 500
// })

// //navbar
// TweenMax.staggerFrom(".navbar div",1.5,{
//     delay: 1.5,
//     opacity: 0,
//     y: "20",
//     ease: Expo.easeInOut
// })

// // media
// TweenMax.from(".media ul",1.5,{
//     delay: 1,
//     y: "-100%",
//     opacity: 0,
//     ease: Expo.easeInOut
// },0.08)

// //text

// TweenMax.from(".text h1 .hidetext",1.5,{
//     delay: 1,
    
//     y: "100%",
//     ease: Expo.easeInOut
// })

// TweenMax.from(".text h3 .hidetext",1.5,{
//     delay: 1.2,
//     y: "100%",
//     ease: Expo.easeInOut
// })

// TweenMax.from(".text p .hidetext",1.5,{
//     delay: 1.3,
//     y: "200%",
//     ease: Expo.easeInOut
// })

// TweenMax.from(".text h2",1.5,{
//     delay: 1.5,
//     opacity: 0,
//     x: "-10000",
//     ease: Expo.easeInOut
// })

// //sponsor

// TweenMax.from(".sponsor img",1.5,{
//     delay: 1.5,
//     opacity: 0,
//     y: "20",
//     ease: Expo.easeInOut
// })

// TweenMax.from(".sponsor p",1.5,{
//     delay: 1.6,
//     opacity: 0,
//     y: "20",
//     ease: Expo.easeInOut
// })

// //distortion

// TweenMax.from(".distortion",1.5,{
//     delay: 2,
//     opacity: 0,
//     y: "20",
//     ease: Expo.easeInOut
// })

// //overlays

// TweenMax.to(".first",1.5,{
//     delay: 0.5,
//     top: "-100%",
//     ease: Expo.easeInOut
// })

// TweenMax.to(".second",1.5,{
//     delay: 0.7,
//     top: "-100%",
//     ease: Expo.easeInOut
// })

// TweenMax.to(".third",1.5,{
//     delay: 0.9,
//     top: "-100%",
//     ease: Expo.easeInOut
// })
