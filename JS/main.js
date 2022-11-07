const burguer = document.getElementById('burguer');
const x = document.getElementById('x');
const menuOpen = document.getElementById('menu-cerrado');
burguer.addEventListener('click', function(){
    menuOpen.classList.toggle("open");
});
x.addEventListener('click', function(){
    menuOpen.classList.toggle("open");
})
// x.classList.toggle('x');
