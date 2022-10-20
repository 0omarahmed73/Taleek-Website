let menu = document.getElementById("menu");
let right_links = document.getElementById("right");
let leave = document.getElementById("leave");
let parent_nav = document.getElementById("parent-nav");
let links = document.querySelectorAll("#right > ul > li > a")
let taleelk = document.querySelector("#taleek")
let icon = document.getElementById("icon-menu")
let originalLogo = document.getElementById("original_logo")
let scrollLogo = document.getElementById("scroll_logo")
let taleekHead = document.getElementById("taleekHead");
let scrollLeft = document.getElementById("chevleft");
let scrollRight = document.getElementById("chevright");
let opcardcont = document.getElementById("opcardcont");

console.log(icon)
console.log(taleelk)
console.log(links)
menu.addEventListener("click" , (eo) => {{
    right_links.classList.add("active");
    icon.classList.add("icon-menu-none");

}
})

leave.addEventListener("click" , (eo) => {{
    right_links.classList.remove("active");
    icon.classList.remove("icon-menu-none");
}
})

window.addEventListener('scroll', () => {

if(window.matchMedia("(min-width: 768px)").matches){
 if (this.scrollY >= 90){
        parent_nav.style.backgroundColor = "white";
        // parent_nav.style.opacity = "0.7";
    links.forEach(element => {
        element.style.color = "black"
    });    
    taleek.style.color = "black"
    originalLogo.style.display = "none";
    scrollLogo.style.display = "block";
    }
    else{
    parent_nav.style.backgroundColor = "transparent";
    parent_nav.style.opacity = "1";
    originalLogo.style.display = "block";
    scrollLogo.style.display = "none"
    links.forEach(element => {;
        element.style.color = "white"
    }); 
    taleek.style.color = "white"
}}})

let i = 0;
var TaleekText = "aleek"


let set = setInterval(function(){
    if(i < TaleekText.length){
    taleekHead.textContent += TaleekText[i];
    i +=1;    
}
    else {
        i = 0
        taleekHead.textContent = "T";
    }
},300)

scrollRight.addEventListener("click" , (eo) => {
opcardcont.scrollLeft += 20;
})

scrollLeft.addEventListener("click" , (eo) => {
opcardcont.scrollLeft -= 20;
})