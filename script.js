document.addEventListener("DOMContentLoaded", function () {
    const texto1 = "Hola,"; // Primera parte del texto
    const texto2 = " soy Claudia :)"; // Segunda parte del texto
    const textoSpan1 = document.getElementById("texto1");
    const textoSpan2 = document.getElementById("texto2");
    const cursor = document.querySelector(".cursor");
    let index = 0;

    function escribirTexto1() {
        textoSpan1.textContent += texto1[index];
        index++;

        if (index === texto1.length) {
            // Cuando termine de escribir la primera parte, muestra la segunda línea y comienza a escribir la segunda parte
            cursor.style.display = "none";
            setTimeout(function () {
                document.querySelector(".linea-2").style.display = "block";
                escribirTexto2();
            }, 500); // Espera medio segundo antes de mostrar la segunda línea
            return;
        }

        setTimeout(escribirTexto1, 100); // Cambia la velocidad de escritura ajustando el valor aquí
    }

    function escribirTexto2() {
        textoSpan2.textContent += texto2[index - texto1.length];
        index++;

        if (index < texto1.length + texto2.length) {
            setTimeout(escribirTexto2, 100); // Cambia la velocidad de escritura ajustando el valor aquí
        }
    }

    escribirTexto1();
});

