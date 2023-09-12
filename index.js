var tl = gsap.timeline()

tl.from("nav img, .nav-2 h3, .nav-3 h3, .nav-3 button",{
    x: -100,
    duration: 1.4,
    delay: 0.1,
    opacity: 0,
    stagger: 0.2
})
tl.from (".main h1",{
    y: 100,
    opacity: 0,
    stagger: 0.2
})
tl.from (".main2 img",{
    scale: 0,
    opacity:0
})

// 2nd website 
// var tl = gsap.timeline()

// function time(){
//     var a = 0

//     setInterval(function(){
//         a += Math.floor(Math.random()*20)
//         if(a < 100){
//             document.querySelector("#loader h1").innerHTML = a + "%"
//         }
//         else{
//             a = 100
//             document.querySelector("#loader h1").innerHTML = a + "%"
//         }
//     },160)
// }

// tl.to("#loader h1",{
//     delay: '0.4',
//     duration: 1,
//     scale: 1.4,
//     onStart: time()
// })
// tl.to("#loader",{
//     top: '-100vh',
//     delay: 0.4,
//     duration: 1.3,
// })

// gsap.to("#page1 h1",{
//     transform: "translateX(-320%)",
    
//     scrollTrigger: {
//         trigger: "#page1",
//         scroller: "body",
//         scrub: 3,
//         pin: true,
//     }
// })