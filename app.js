document.querySelectorAll("[data-dd]").forEach(btn=>{
  btn.addEventListener("click",(e)=>{
    e.preventDefault();
    const li = btn.closest("li");
    const open = li.classList.contains("open");
    document.querySelectorAll(".menu li.open").forEach(x=>x.classList.remove("open"));
    if(!open) li.classList.add("open");
  });
});

document.addEventListener("click",(e)=>{
  if(!e.target.closest(".menu")){
    document.querySelectorAll(".menu li.open").forEach(x=>x.classList.remove("open"));
  }
});

const burger = document.getElementById("burger");
const panel = document.getElementById("mobilePanel");
if(burger && panel){
  burger.addEventListener("click",()=>panel.classList.toggle("show"));
}
