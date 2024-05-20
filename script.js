
//-------------------------------------------------------------------------------Legeleje

iras("h2_betoltesnel_pontok", "eleje")
kurzor()



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
//-------------------------------------------------------------------------------










//-------------------------------------------------------------------------------Iras

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
//-------------------------------------------------------------------------------










//-------------------------------------------------------------------------------Showcaseimgs
function showcaseimgs(id) {
    if(id) {
        let div = document.getElementById("showcaseimgs-" + id)

        let parentproject = null

        
        parentproject = document.querySelectorAll(".project")[id - 1]


        if (div) {
            if (parentproject) {    
                if (div.style.display == "none") {
                    //mutasd

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
//-------------------------------------------------------------------------------










//-------------------------------------------------------------------------------Scrollcuccok
window.addEventListener("scroll", setScrollVar)
window.addEventListener("resize", setScrollVar)

function setScrollVar() {
    const htmlElement = document.documentElement
    const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight
    //console.log(Math.min(percentOfScreenHeightScrolled * 100, 100))
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

}
//-------------------------------------------------------------------------------










//-------------------------------------------------------------------------------Kurzor
function kurzor() {
    let body = document.querySelector("body")
    body.id = "body"
    body = document.getElementById("body")
    


    body.innerHTML += `
        <div class='cursor'></div>
        <div class='cursor-border cursor_pulse'></div>
    `

    
    
    const cursor = document.querySelector(".cursor")
    const cursor_border = document.querySelector(".cursor-border")

    document.addEventListener("mousemove", (merre) => {
        handleOnMove(merre)
    
        const posX = merre.clientX
        const posY = merre.clientY
    
        
        //cursor.setAttribute("style", "top: " + merre.clientY + "px" +    "; left: " + merre.clientX + "px;")
        cursor.style.left = posX + "px"
        cursor.style.top = posY + "px"
    
        cursor_border.style.left = posX + "px"
        cursor_border.style.top = posY + "px"
    
    
        cursor_border.animate({
            left: posX + "px",
            top: posY + "px"
        }, {duration: 500, fill: "forwards"})
    })




    document.addEventListener("click", (args) => {
        //console.log(args)

        if (args.target.localName == "img") {
            //console.log("img")


            //cursor_border.classList.add("clicked_img")


            //setTimeout(() => {
            //    cursor_border.classList.remove("clicked_img")
            //}, 1000)


            cursor_border.classList.add("clicked_cursor")

            setTimeout(() => {
                cursor_border.classList.remove("clicked_cursor")
            }, 400)

        } else {
            cursor_border.classList.add("clicked_cursor")

            setTimeout(() => {
                cursor_border.classList.remove("clicked_cursor")
            }, 400)
        }

        
    })









    setTimeout(() => {
        let buttons = document.getElementsByTagName("button")

        for(let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("mouseenter", () => {

                cursor.classList.remove("mouse_leave_buttons")
                cursor.classList.add("mouse_enter_buttons")
                cursor_border.style.border = "none"
                cursor_border.style.width = "0px"
                cursor_border.style.height = "0px"
                cursor_border.classList.remove("cursor_pulse")
            })
    
            
    
            buttons[i].addEventListener("mouseleave", () => {

                cursor.classList.add("mouse_leave_buttons")
                cursor.classList.remove("mouse_enter_buttons")
                cursor_border.style.width = "50px"
                cursor_border.style.height = "50px"
                cursor_border.style.border = "2px solid rgba(255, 255, 255, 0.5)"
                cursor_border.classList.add("cursor_pulse")
            })
        }




        let ak = document.getElementsByTagName("a")

        for(let i = 0; i < ak.length; i++) {
            ak[i].addEventListener("mouseenter", () => {

                cursor.classList.remove("mouse_leave_buttons")
                cursor.classList.add("mouse_enter_buttons")
                cursor_border.style.border = "none"
                cursor_border.style.width = "0px"
                cursor_border.style.height = "0px"
                cursor_border.classList.remove("cursor_pulse")
            })
    
            
    
            ak[i].addEventListener("mouseleave", () => {

                cursor.classList.add("mouse_leave_buttons")
                cursor.classList.remove("mouse_enter_buttons")
                cursor_border.style.width = "50px"
                cursor_border.style.height = "50px"
                cursor_border.style.border = "2px solid rgba(255, 255, 255, 0.5)"
                cursor_border.classList.add("cursor_pulse")
            })
        }

    }, 2000);


}
//-------------------------------------------------------------------------------










//-------------------------------------------------------------------------------Hero és Megjelenés
const left = document.getElementById("oldal_left")

const handleOnMove = e => {
    const p = e.clientX / window.innerWidth * 100

    left.style.width = p + "%"
}


document.ontouchmove = e => handleOnMove(e.touches[0])





const obsever = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        //console.log(entry)

        if(entry.isIntersecting) {
            entry.target.classList.add("show")
        } else {
            entry.target.classList.remove("show")
        }
    })
})





const needtypeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        //console.log(entry)

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
//-------------------------------------------------------------------------------

