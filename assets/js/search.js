document.addEventListener("DOMContentLoaded", () => {
    mostrarMov(movimientos);
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
    };
    
    btnShow.addEventListener("click", showTarjeta);
    
    /**funcion para cerrar tarjeta**/

    const closeTarjeta = () => {
        tarjeta.classList.remove("tarjeta");
        btnClose.classList.remove("block");
        boxContent.classList.remove("ul-st");
        limpiarHTML()
    }

    btnClose.addEventListener("click", closeTarjeta);
    

    /**funcion para mostrar movimientos**/

    function mostrarMov(movimientos){

        movimientos.forEach(movimiento => {
            const elements = document.createElement("li");
            elements.innerHTML =  `<a href="../movimientos/${movimiento.url}.html"><strong>${movimiento.name}</strong></a>`;
            boxContent.appendChild(elements);      
        })
    }
    /***buscador de mov */

    function buscarMov(){
        btnShow.addEventListener("keyup", e => {
            limpiarHTML()
            showTarjeta()
            const inputText = e.target.value.toLowerCase().trim() /* cada vez que se ingresen valores en el input se guardaran en esta variable, en minuscula y quitando espacios en blanco**/ 

            if (inputText === ''){
                buscando();
            } else {
                const mostrarFiltrado = movimientos.filter( movimiento => 
                movimiento.name.toLowerCase().startsWith(inputText)
               );            
            
            if (mostrarFiltrado.length) {
                mostrarMov(mostrarFiltrado);
            } else {
                noResultado();
            }
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
    /***** funcion ¿q estas buscando?*/

    function buscando(){
        const buscando = document.createElement("P");
        buscando.textContent = "¿Qué estás buscando?";
        boxContent.appendChild(buscando)
    }





