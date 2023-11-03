document.addEventListener("DOMContentLoaded", () => {
    buscarMov()
    showTarjeta();
    closeTarjeta();
});


/****Abrir y cerrar search*/
    
    const tarjeta = document.getElementById("box");
    const boxContent = document.getElementById("box-cont");
    const btnShow = document.getElementById("btnShow");
    const btnClose = document.getElementById("btnClose");

    /**funcion para mostrar tarjeta**/ 
    const showTarjeta = () =>{
        tarjeta.classList.add("tarjeta");
        btnClose.classList.add("block");
        boxContent.classList.add("ul-st");
    }
    
    btnShow.addEventListener("click", showTarjeta);

    /**funcion para cerrar tarjeta**/
    const closeTarjeta = () => {
        tarjeta.classList.remove("tarjeta");
        btnClose.classList.remove("block");
        boxContent.classList.remove("ul-st");
        limpiarHTML()
    }

    btnClose.addEventListener("click", closeTarjeta);


    /**array de movimientos*/
    const movimientos = ["accion", "art brut", "art deco", "arte abstracto", "arte cinetico", "arte conceptual", "arte povera", "art noveau", "barroco",
    "cinquecento", "constructivismo", "cubismo", "dadaismo", "expresionismo", "expresionismo abstracto", "fauvismo", "futurismo", "hiperrealismo"
    , "impresionismo", "informalismo", "land art", "manierismo", "minimalismo", "neoclasicismo", "neoplasticismo", "nouveau realisme", "nueva figuracion",
    "nueva objetividad", "nuevo realismo", "op art", "orfismo", "orientalismo", "pintura metafisica", "pop art", "post impresionismo", 
    "post impresionismo", "post modernidad", "precisionismo", "primitivismo", "proto-renacimiento", "quattrocento", "realismo",
    "realismo social", "renacimiento del norte de europa", "rococo", "romaticismo", "simbolismo", "street art", "suprematismo", "surrealismo"];
   
    /**funcion para mostrar movimientos**/

    function mostrarMov(movimientos){

        movimientos.forEach(movimiento => {
            const elements = document.createElement("li");
            elements.innerHTML =  `<a href="#"><strong>${movimiento}</strong></a>`;
            boxContent.appendChild(elements);      
        })
    }
    /***buscador de mov */

    function buscarMov(){
        btnShow.addEventListener("keyup", e => {
            limpiarHTML()
            const inputText = e.target.value.toLowerCase().trim() /* cada vez que se ingresen valores en el input se guardaran en esta variable, en minuscula y quitando espacios en blanco**/ 

            const mostrarFiltrado = movimientos.filter( movimiento => 
                movimiento.toLowerCase().startsWith(inputText)
            );
            
            if (mostrarFiltrado.length) {
                mostrarMov(mostrarFiltrado);
            } else {
                noResultado();
            }
        })
    }

    /***actualiza y limpiar HTML****/

    function limpiarHTML() {
        while (boxContent.firstChild) { 
            boxContent.removeChild(boxContent.firstChild)
        }
    }

    /***funcion no resultado */

    function noResultado(){
        const noResultado = document.createElement("P");
        noResultado.textContent = "No hemos encontrado resultados para esa búsqueda.";
        boxContent.appendChild(noResultado)
    }





