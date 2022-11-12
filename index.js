// const hamburger=document.querySelector('.hamburger');
// const menu=document.querySelector('mobile-menu');
// hamburger.addEventListener('click',
// ()=>{
//   menu.classList.toggle('hidden')
// })

function Menu(e) {
  let list = document.querySelector("ul");
  // let myList = document.getElementById("myList").classList;

  e.name === "close"
    ? ((e.name = "menu"),
      list.classList.add("top-[100px]"),
      list.classList.add("hidden"))
    : ((e.name = "close"),
      list.classList.remove("top-[100px]"),
      list.classList.remove("hidden"));
}

function myFunction() {
  document.getElementById("myList").classList.toggle("myStyle");
}
