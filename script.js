const tabsBtns = document.querySelectorAll(".tabs_nav button");
const tabsItems = document.querySelectorAll(".tabs_item");

// ф-я скрывает табы и убирает active у кнопок 
function hideTabs() {
    tabsItems.forEach(item => item.classList.add("hide"));
    tabsBtns.forEach(item => item.classList.remove("active"));

}

// ф-я показывает переданный номер таба и делает соответствующую ему кнопку активной
function showTab(index) {
    tabsItems [index].classList.remove("hide");
    tabsBtns [index].classList.add("active");
}
hideTabs();
showTab(0);

tabsBtns.forEach((btn, index) => btn.addEventListener("click", () => {
    hideTabs();
    showTab(index);

}));
