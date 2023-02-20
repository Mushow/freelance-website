document.getElementById('bar-icon').addEventListener('click',function(){
    const menubar = document.getElementById('menubar');
    menubar.classList.toggle('offcanvas-menu');
})

document.getElementById('menubar').addEventListener('click',function(){
    const menubar = document.getElementById('menubar');
    if(menubar.classList.contains('offcanvas-menu')) {
        menubar.classList.toggle('offcanvas-menu');
    }
})