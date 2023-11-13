/****boton like***** */

const sarasa = document.querySelectorAll(".sarasa");

let allMov = [];

function clickCorazon() {
    sarasa.forEach(e => {
        e.addEventListener("click", function(event) {
            event.preventDefault();
            e.classList.toggle("like");

            const isLiked = e.classList.contains("like");

            if (isLiked) {
                const infoMov = e.parentElement.querySelector('.box-content h2').textContent;
                allMov = [...allMov, infoMov];
                console.log(allMov);               
            }});        
        });
    }
/*****funcion para mostrar HTML */

const showHTML = () => {
    allMov.forEach(product => {
        const containerMov = document.querySelectorAll("cnt-wish");
        containerMov.innerHTML = `
        <div class="wish-info">
            <a href="#"><img class="wish-img" src="./assets/img/1.jpg"></a>
            <a href="#"><p class="wish-p">${infoMov}</p></a>
        </div>
        <div>
            <i class="fa-solid fa-trash"></i>
        </div>`;
        containerMov.append(product)
    })
}





document.addEventListener("DOMContentLoaded", function() {
    clickCorazon();
});


