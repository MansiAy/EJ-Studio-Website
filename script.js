var a= document.querySelector("#main")
var round= document.querySelector("#round")
a.addEventListener("mousemove",function(dets){
    round.style.left= (dets.x+15)+"px"
    round.style.top= (dets.y+15)+"px"
   
},)















var tl2 = gsap.timeline()
tl2
.to("#page1 #nav",{
    delay:1,
    duration:3,
    opacity:1

},"a")
.from("#text1 h2",{
    duration: 0.85,
  y: 250,
  ease: Power3.out,
  stagger: 1.5


},"a")
.from("#text2 h1",{
  
  y: 250,
  autoAlpha: 0,
  ease: Power3.out,
  stagger: 1.5,
  delay:.2
},"a")


var tl = gsap.timeline(
    {
        scrollTrigger:{
            trigger:"#page1",
            start:"top top",
            pin:true,
            scrub:1
        }
    }
)
tl
.to("#image",{
    delay:1,
    duration: 1.5,
    top:"20%",
    ease: Power3.out,
    scale:1
})
.to("#image",{
    duration: 1,
    delay:".5",
    top:"0%",
    left:"0",
    height:"100%",
    width:"100%",
    ease: Power3.out,
    scale:1
})
var tl3= gsap.timeline(
    {
        scrollTrigger:{
            trigger:"#page2",
            start:"top top",
            pin:"#page2",
            scrub:1
        }
    }
)
// .from("#pera p",{
//     y:140,
//     opacity:1,
//     duration: 0.85,
//     ease: Power3.out,
//     stagger: 1.5,
//     rotate:"40deg",


// })

.to(".line p",{
    y:-120,
    rotate:"0deg",
    stagger:.5,
    duration:0.85,
    opacity:1

})


var tl3 = gsap.timeline(
    {
        scrollTrigger:{
            trigger:"#page3",
            start:"top top",
            pin:true,
            scrub:1
        }
    }
)
tl3
.to(" #text4",{
    duration:1,
    delay:".1",
    scale:".8"
    
   

},"a")
.to("#image2",{
    duration: 2,
    // delay:"3",
    top:"0%",
    left:"0",
    height:"100%",
    width:"100%",
    ease: Power3.out,
},"a")

.from("#image2 img",{
    height:"130vh",
    duration:1.5,
    delay:"1",
},"a")
var tl4= gsap.timeline(
    {
        scrollTrigger:{
            trigger:"#page4",
            start:"top top",
            pin:true,
            scrub:1
        }
    }
)
tl4
.from("#page4 img",{
    height:"130vh",
    duration:1.5,
    delay:"1",
},"a")

var tl5 = gsap.timeline(
    {
        scrollTrigger:{
            trigger:"#page5",
            start:"top top",
            pin:true,
            scrub:1
        }
    }
)
tl5
.from("#page5 img",{
    height:"130vh",
    duration:1.5,
    delay:"1",
},"a")


var tl6= gsap.timeline(
    {
        scrollTrigger:{
            trigger:"#page7",
            start:"top -1%",

            pin:true,
            scrub:1
        }
    }
)
tl6
.to("#center",{
    // opacity:"0",
    deley:3,
    duration:1.5,
    scale:5

},"a")
.to("#center h1",{
    deley:3,
    duration:2.5,
    opacity:0,
},"a")
.to("#center ",{
    opacity:0,
    duration:3,
    delay:1
    
    
},"a")

var tl7= gsap.timeline(
    {
        scrollTrigger:{
            trigger:"#page8",
            start:"top top",
            pin:true,
            scrub:1
        }
    }
)

tl7
.to("#text8 h2",{
    opacity:1,
    duration: 0.85,
  y:-1,

  ease: Power3.out,
  stagger:.1,
})
// .from("#text8 h2",{
 




// },"a")
// .from("#text2 h1",{
  
//   y: 250,
//   autoAlpha: 0,
//   ease: Power3.out,
//   stagger: 1.5,
//   delay:.2
// },"a")
