// Carga los datos desde el archivo JSON
fetch("../data/data.json")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        mostrarMovimientos(data);
    })
    .catch(error => {
        console.error("Error al cargar data.json:", error);
    });

// Función para mostrar los movimientos en la galería
function mostrarMovimientos(movimientos) {
    const galeria = document.getElementById("galeria");

    if (!galeria) {
        console.error("No se encontró el elemento con ID 'galeria'");
        return;
    }

    movimientos.forEach(movimiento => {
        const card = document.createElement("div");
        card.innerHTML = `
            <a class="card" href="../mov-details.html?title=${movimiento.title}" value="${movimiento.id}">
                <div class="item">
                    <div class="box-img">
                        <img src="./assets/img/${movimiento.id}.webp" alt="${movimiento.title}">
                    </div>
                    <div class="box-content">
                        <h2>${movimiento.title}</h2>
                        <p>${movimiento.years}</p>
                    </div>                    
                </div>
            </a>`;
        card.addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.setItem("movimiento", JSON.stringify(movimiento));
            window.location.href = "../mov-details.html";
        });
        galeria.appendChild(card);
    });
}

// Evento que se ejecuta al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
    const movimiento = JSON.parse(localStorage.getItem("movimiento"));

    if (!movimiento) {
        console.error("No se encontró el movimiento en LocalStorage.");
        return;
    }

    // Actualiza la información del movimiento en la página
    document.getElementById("title").textContent = movimiento.title;
    document.getElementById("years").textContent = movimiento.years;

    const contPara = document.getElementById("cont-paragraph");
    const banner = document.getElementById("banner");

    if (banner) {
        const imagen = document.createElement("div");
        imagen.innerHTML = `<img src="../assets/img/${movimiento.id}.webp" alt="${movimiento.title}">`;
        banner.appendChild(imagen);
    }

    if (contPara) {
        const parrafo = document.createElement("p");
        parrafo.innerHTML = movimiento.paragraph;
        contPara.appendChild(parrafo);
    }

    // Muestra las obras representativas
    obrasRepresentativas(movimiento);
});

// Función para mostrar las obras representativas del movimiento
function obrasRepresentativas(movimiento) {
    const cardsFlex = document.getElementById("cards-flex");

    if (!cardsFlex) {
        console.error("No se encontró el elemento con ID 'cards-flex'");
        return;
    }

    movimiento.representativeWorks.forEach(obra => {
        const cardFlex = document.createElement("div");
        cardFlex.classList.add("card-flex");
        cardFlex.innerHTML = `
            <div class='card-img'>
                <img src="../assets/img/${movimiento.id}/${obra.ruta}.jpg" alt="${obra.title}">
            </div>
            <div>
                <h2 class='card-title'>${obra.title}</h2>
                <p class='card-subtitle'>${obra.artist}</p>
                <p class='card-p'>${obra.country}, ${obra.year}</p>
            </div>`;
        cardsFlex.appendChild(cardFlex);
    });
}
