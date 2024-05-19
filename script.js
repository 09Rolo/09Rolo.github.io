iras("h2_betoltesnel_pontok", "eleje")



document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.style.scrollBehavior = "auto"
    window.scrollTo(0,0)

    setTimeout(() => {
        startscrollanims()
    }, 200)
})







function loaded() {
    let betolto = document.getElementById("betolto")

    betolto.remove()

    iras("hello_left", "gyorsabb")
    iras("hello_right", "gyorsabb")


    
}








const obsever = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)

        if(entry.isIntersecting) {
            entry.target.classList.add("show")
        } else {
            entry.target.classList.remove("show")
        }
    })
})





const needtypeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)

        if(entry.isIntersecting) {
            entry.target.classList.add("type")

            iras(entry.target, "observeres")
        } else {
            
        }
    })
})



const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el) => {obsever.observe(el)})

const needtypeElements = document.querySelectorAll(".needtype")
needtypeElements.forEach((el) => {needtypeObserver.observe(el)})










function iras(element, arg) {


    if (!element) {
        let alltype = document.querySelectorAll(".type")

        if (alltype) {
            alltype.forEach(specelem => {
                let elem = specelem

                var txt = elem.innerHTML
                elem.innerHTML = ""
            
                var speed = 30;
            
                for (let i = 0; i < txt.length; i++) {
                    setTimeout(() => {
                        elem.innerHTML += txt.charAt(i);  
                    }, 500 + i*speed);
                }
            });
        }
    }


    if (element) {
        var elem = document.getElementById(element)


        if (!arg) {
            var elem = document.getElementById(element)
            
            if (elem) {
                var txt = elem.innerHTML
                elem.innerHTML = ""
            
                var speed = 30;
            
                for (let i = 0; i < txt.length; i++) {
                    setTimeout(() => {
                        elem.innerHTML += txt.charAt(i);  
                    }, 1500 + i*speed);
                }
            }
        }




        if (arg == "eleje") {
            if (elem) {
                var txt = elem.innerHTML
                elem.innerHTML = ""
            
                var speed = 1000;
            
                for (let i = 0; i < txt.length; i++) {
                    setTimeout(() => {
                        elem.innerHTML += txt.charAt(i);
                    }, 1500 + i*speed);
                }
            }
        }


        if (arg == "gyorsabb") {
            if (elem) {
                var txt = elem.innerHTML
                elem.innerHTML = ""
            
                var speed = 100;
            
                for (let i = 0; i < txt.length; i++) {
                    setTimeout(() => {
                        elem.innerHTML += txt.charAt(i);
                    }, 500 + i*speed);
                }
            }
        }


        if (arg == "observeres") {
            let alltype = document.querySelectorAll(".type")
            let already = false

            if (alltype) {
                alltype.forEach(specelem => {


                    for(let i = 0; i <= specelem.classList.length; i++) {
                        if (specelem.classList[i] == "typed") {
                            already = false
                            break
                        } else {
                            already = true
                        }
                    }



                    if (already == true) {
                        elem = specelem

                        var txt = elem.innerHTML
                        elem.innerHTML = ""
                        
                        var speed = 30;
                        
                        for (let i = 0; i < txt.length; i++) {
                            setTimeout(() => {
                                elem.innerHTML += txt.charAt(i);  
                            }, 1500 + i*speed);
                        }



                        elem.classList.remove("type")
                        elem.classList.remove("needtype")
                        elem.classList.add("typed")
                    }
                });
            }
        }
    }
}









function showcaseimgs(id) {
    if(id) {
        let div = document.getElementById("showcaseimgs-" + id)

        let parentproject = null

        
        parentproject = document.querySelectorAll(".project")[id - 1]


        if (div) {
            if (parentproject) {    
                if (div.style.display == "none") {
                    //mutasd



                    /*
                    for(let i = 1; i < 100; i++) {
                        setTimeout(() => {
                            if (parentproject.style.maxWidth == "80%") {
                                
                            } else {
                                parentproject.style.maxWidth = i + 30 + "%"
                            }
                        }, i * (i - i * 5))
                    }
                    */


                    parentproject.style.animationName = "projectgrow"
                    parentproject.style.animationPlayState = "running"

                    div.style.display = ""

                    setTimeout(() => {
                        parentproject.scrollIntoView({behavior: "smooth"})
                    }, 500)

                } else {
                    //nemutasd

                    parentproject.style.animationName = "projectshrink"
                    parentproject.style.animationPlayState = "running"


                    setTimeout(() => {
                        parentproject.scrollIntoView({behavior: "smooth"})
                        div.style.display = "none"
                    }, 500)
                }
            }
        }
    }
}








































const left = document.getElementById("oldal_left")

const handleOnMove = e => {
    const p = e.clientX / window.innerWidth * 100

    left.style.width = p + "%"
}


document.onmousemove = e => handleOnMove(e)
document.ontouchmove = e => handleOnMove(e.touches[0])















window.addEventListener("scroll", setScrollVar)
window.addEventListener("resize", setScrollVar)

function setScrollVar() {
    const htmlElement = document.documentElement
    const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight
    console.log(Math.min(percentOfScreenHeightScrolled * 100, 100))
    htmlElement.style.setProperty("--scroll", Math.min(percentOfScreenHeightScrolled * 100, 100))

    htmlElement.style.setProperty("--scroll-deg-left", Math.min(percentOfScreenHeightScrolled * 100, 100) + Math.min(percentOfScreenHeightScrolled * 90, -100) + "deg")
    htmlElement.style.setProperty("--scroll-deg-right", Math.min(percentOfScreenHeightScrolled * 100, 100) - Math.min(percentOfScreenHeightScrolled * 90, 100) + "deg")
}

setScrollVar()










function startscrollanims() {
    // Initialize ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);


    ScrollTrigger.create({
        trigger: ".projectseleje",
        start: "0%",
        end: "100%",
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
            gsap.to(".projectseleje", {
                x: `${-350 * self.progress}vw`,
                duration: 1.5,
                ease: "power3.out",
            })
        }
    })




    /*
    ScrollTrigger.create({
        trigger: "#whatdoido",
        start: "10%",
        end: "50%",
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
            let szovegboxes = document.querySelectorAll(".szovegbox")

            if (szovegboxes) {
                let count = 0

                szovegboxes.forEach(box => {
                    count++
                    console.log(count)
                    let left = false
                    let right = false

                    for(let i = 0; i < box.classList.length; i++) {
                        if (box.classList[i] == "left") {
                            left = true
                            break
                        } else if(box.classList[i] == "right") {
                            right = true
                            break
                        }
                    }
                    

                    if (left == true) {
                        gsap.to(box, {
                            x: `${20 * self.progress}vw`,
                            duration: 0,
                        }) 
                    } else if (right == true) {
                        gsap.to(box, {
                            x: `${-20 * self.progress}vw`,
                            duration: 0,
                        }) 
                    }
                })
            }


            /*
            gsap.to(".szovegbox", {
                x: `${10 * self.progress}vw`,
                y: `${-10 * self.progress}vh`,
                duration: 1.5,
                ease: "power3.out",
            })
            */
           /*
        }
    })
    */
}