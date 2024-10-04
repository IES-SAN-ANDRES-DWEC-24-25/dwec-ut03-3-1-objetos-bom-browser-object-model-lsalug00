// Author:  Lidia Saludes González (lsalug00)
// Version: 1.0
// Date:    2024/10/01

// variable ventana emergente
var myWindow;

// Variable para el  temporizador
var timer;
// Número de segundos transcurridos
var count = 0;

document.addEventListener("DOMContentLoaded", function () {
    // Variables botones
    const btnInfo = document.getElementById("btnInfo");
    const btnUrl = document.getElementById("btnUrl");
    const btnClose = document.getElementById("btnClose");

    const url = document.getElementById("inputUrl");
    const btnBack = document.getElementById("btnBack");
    const btnForward = document.getElementById("btnForward");
    const redirection = document.getElementById("redirection");
    const btnRedirection = document.getElementById("btnRedirection");

    const btnStartTimer = document.getElementById("btnStartTimer");
    const btnStopTimer = document.getElementById("btnStopTimer");
    const btnRestartTimer = document.getElementById("btnRestartTimer");

    // Añadir eventos click a los botones

    // Muestra la información del navegador
    btnInfo.addEventListener("click", function () {
        informacionNavegador();
    });

    // Redirecciona a la URL introducida en el input a la nueva ventana mywindow
    btnUrl.addEventListener("click", function () {
            // si la URL no está vacía, redireccionar a www.educa.jcyl.es"
    });

    // Cierra la ventana emergente mywindow
    btnClose.addEventListener("click", function () {});

    // Retroceder en la historia del navegador
    btnBack.addEventListener("click", function () {});

    // Avanzar en la historia del navegador
    btnForward.addEventListener("click", function () {});

    // Temoporizador
    btnStartTimer.addEventListener("click", function () {
        // Iniciar el temporizador timer cada segundo para poner en counter el valor de segundos transcurridos
    });

    btnStopTimer.addEventListener("click", function () {
        // Detener el temporizador timer
    });

    btnRestartTimer.addEventListener("click", function () {
        // Reiniciar el temporizador timer
    });

    btnRedirection.addEventListener("click", function () {
        // avisar en el párrafo redirection que se va a redireccionar a www.educa.jcyl.es en 5 segundos
        // Redireccionar a la página de la Junta de Castilla y León en una nueva pestaña en 5 segundos
    });

    updateScreenSize();
});

// Función para actualizar el tamaño de la pantalla
function updateScreenSize() {
    document.getElementById("width").textContent = outerWidth;
    document.getElementById("height").textContent = outerHeight;
}

// Evento de cambio de pantalla
// Si cambia el tamaño de la pantalla, llamamos de nuevo a la función updateScreenSize
window.onresize = updateScreenSize;

// Eventos de conexión a internet
/*
window.addEventListener('COMPLETAR', () => {
    document.getElementById('status').textContent = 'Desconectado';
});
*/

/*
window.addEventListener('COMPLETAR', () => {
    document.getElementById('status').textContent = 'Conectado';
});
*/

// mostrar la información del navegador en una ventana emergente
function informacionNavegador() {
    const userAgent = navigator.userAgent;
    let browserName, fullVersion;

    // Detectar el nombre y la versión del navegador usando userAgent
    if (userAgent.indexOf("OPR") > -1) {
        browserName = "Opera";
        fullVersion = userAgent.split("OPR/")[1];
    } else if (userAgent.indexOf("Chrome") > -1) {
        browserName = "Chrome";
        fullVersion = userAgent.split("Chrome/")[1].split(" ")[0];
    } else if (userAgent.indexOf("Firefox") > -1) {
        browserName = "Firefox";
        fullVersion = userAgent.split("Firefox/")[1];
    } else if (userAgent.indexOf("Safari") > -1) {
        browserName = "Safari";
        fullVersion = userAgent.split("Version/")[1].split(" ")[0];
    } else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident") > -1) {
        browserName = "Internet Explorer";
        fullVersion = userAgent.split("MSIE ")[1] || userAgent.split("rv:")[1];
    } else {
        browserName = "Desconocido";
        fullVersion = "Desconocido";
    }

    // Obtener el sistema operativo
    const platform = navigator.platform;

    // Obtener el idioma del navegador
    const language = navigator.language || navigator.userLanguage;

    // Crear un mensaje con la información
    const message = `Nombre del navegador: ${browserName}\n` +
                    `Versión del navegador: ${fullVersion}\n` +
                    `Sistema operativo: ${platform}\n` +
                    `Idioma del navegador: ${language}`;

    // Mostrar la información en una ventana emergente
    alert(message);
}

// Función para redireccionar a una URL en una ventana nueva
function redirect(url) {}