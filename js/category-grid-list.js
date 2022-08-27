let elGrid = document.querySelector(".categories-right-card-grid")
let elList = document.querySelector(".categories-right-card-list")
let elGridBtn = document.querySelector(".category-grid")
let elListBtn = document.querySelector(".category-list")

elGridBtn.addEventListener("click", function(){
    elGrid.classList.add("category-active")
    elList.classList.remove("category-active")
    elGridBtn.classList.add("category-active-btn")
    elListBtn.classList.remove("category-active-btn")
})
elListBtn.addEventListener("click", function(){
    elList.classList.add("category-active")
    elGrid.classList.remove("category-active")
    elListBtn.classList.add("category-active-btn")
    elGridBtn.classList.remove("category-active-btn")
})