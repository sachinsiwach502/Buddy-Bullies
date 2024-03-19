
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

// let check = document.querySelector("#menuIcon");
// let icons = document.querySelector(".icon");
// let nav_links = document.querySelectorAll(".nav-link");

// nav_links.forEach(otherelement => {
//     otherelement.addEventListener("click", () => {
//         check.addEventListener("change", () => {
//             if (check.checked) {
//                 icons.classList.add("show");
//             } else { icons.classList.remove("show"); }

//         });

//     });
// });
