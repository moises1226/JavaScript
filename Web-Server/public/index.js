let menu = document.getElementById("menu");
let dropDown = document.querySelector(".dropDown");
let salir = document.getElementById("salir");
let overlay = document.getElementById("overlay");
let body = document.body;
menu.addEventListener('click', function() {
    if (dropDown.style.transform === "translateX(-100%)" || dropDown.style.opacity === "0") {
        dropDown.style.transform = "translateX(0)"; // Vuelve a la posición original
        dropDown.style.opacity = "1"; // Vuelve a ser visible
        overlay.style.display = 'block'; // Muestra el overlay
        dropDown.style.zIndex = '2'
        body.style.overflow = 'hidden';
    }
});

salir.addEventListener('click', function() {
    dropDown.style.transform = "translateX(-100%)"; // Mueve el elemento a la izquierda
    dropDown.style.opacity = "0"; // Hace que el elemento sea invisible
    overlay.style.display = 'none'; // Oculta el overlay
    body.style.overflow = 'visible';
});
