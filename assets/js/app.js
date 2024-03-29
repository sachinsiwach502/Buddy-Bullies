
let accor_item = document.querySelectorAll(".full-part");
let txt = document.querySelector(".hidden-txt");
let img = document.querySelector(".svg");

txt.style.display = "block";
img.style.transform = "rotate(180deg)";

accor_item.forEach(element => {
    let clickable = element.querySelector(".click-part");
    let txt = element.querySelector(".hidden-txt")
    let img = element.querySelector(".svg")

    clickable.addEventListener("click", () => {
        accor_item.forEach(otherelement => {
            let txt = otherelement.querySelector(".hidden-txt");
            let img = otherelement.querySelector(".svg");
            if (otherelement !== element) {
                txt.style.display = "none";
                img.style.transform = "rotate(0deg)";
            }
        })
        let txt_display = window.getComputedStyle(txt).display;
        if (txt_display === "none") {
            txt.style.display = "block";
            img.style.transform = "rotate(180deg)";
        } else {
            txt.style.display = "none";
            img.style.transform = "rotate(0deg)";
        }
    });
});


let to_top = document.querySelector(".scroll-top")
let pt = 200;

window.addEventListener("scroll", () => {
    if (window.scrollY > pt) {
        to_top.style.display = "block"
    }
    else {
        to_top.style.display = "none";
    }
});

to_top.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})


to_top.addEventListener("mouseover", () => {
    gsap.from(".scroll-top", {
        y: 30,
        repeat: -1,
        duration: 0.2,
        yoyo: true
    })
})
to_top.addEventListener("mouseout", () => {
    gsap.from(".scroll-top", {
        y: 0,
        repeat: -1,
        duration: 1,
        yoyo: true
    })
})




let chk = document.querySelector(".check");
let icon = document.querySelector(".icon");
let link = document.querySelectorAll(".nav-link");
let body = document.body;
chk.addEventListener("click", () => {
    icon.classList.toggle("show");
    if (icon.classList.contains("show")) {
        body.style.overflow = "hidden";
        link.forEach(other => {
            other.addEventListener("click", () => {
                icon.classList.remove("show");
            });
        });
    } else {
        body.style.overflow = "auto";
    }
});



let loader = document.querySelector(".loder");
loader.classList.remove("top-100");
setTimeout(() => {
    loader.classList.add("top-100");
}, 3000);
