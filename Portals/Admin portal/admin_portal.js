// NAV TOGGLE EVENT
const navContentTitle = document.getElementsByClassName('nav_content_title');
const navContentChild = document.getElementsByClassName('nav_content_child');

for(let i = 0; i < navContentTitle.length; i++){
    navContentTitle[i].onclick = function(){
        this.nextElementSibling.classList.toggle('view_self');
        this.children[1].classList.toggle('rotate_toggle');
    }
}

// launching the mobile nav canvas
openNav = () =>{
    const navigationBar = document.querySelector(".navigations");
    navigationBar.style.display = "block";
}

exitNav = () =>{
    const navigationBar = document.querySelector(".navigations");
    navigationBar.style.display = "none";
}











































































































































