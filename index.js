const navItem = document.querySelectorAll('.navitem');
    for(let i = 0; i < navItem.length; i++){
        navItem[i].onmouseenter = function(){
        this.lastElementChild.style.display = 'block';
    }
        navItem[i].onmouseleave = function(){
        this.lastElementChild.style.display = 'none';
    }
}







