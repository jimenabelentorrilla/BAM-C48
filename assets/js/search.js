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
        limpiarHTML()
    }
    
    btnShow.addEventListener("click", showTarjeta);

    /**funcion para cerrar tarjeta**/
    const closeTarjeta = () => {
        tarjeta.classList.remove("tarjeta");
        btnClose.classList.remove("block");
        limpiarHTML()
    }

    btnClose.addEventListener("click", closeTarjeta);


    /**array de movimientos*/
    const movimientos = ["sarasa", "pepito", "agustin", "jimena"];
   
    /**funcion para mostrar movimientos**/

    function mostrarMov(movimientos){

        movimientos.forEach(movimiento => {
            const elements = document.createElement("li");
            elements.innerHTML =  `<strong>${movimiento}</strong>`;
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
            
            if (mostrarFiltrado.length){
                mostrarMov(mostrarFiltrado)
            } else {
                noResultado()
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





