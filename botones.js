const menos = document.querySelector("#menos");
const mas = document.querySelector("#mas");
const cantidad = document.querySelector("#cantidad");

menos.addEventListener("click", () => {
    if (isNaN(Number(cantidad.value))) {
        cantidad.value = 0;
    }
    cantidad.value = Math.round(Number(cantidad.value)) - 1;
    if (Number(cantidad.value) < 0) {
        cantidad.value = 0;
    }
});

mas.addEventListener("click", () => {
    if (isNaN(Number(cantidad.value))) {
        cantidad.value = 0;
    }
    cantidad.value = Math.round(Number(cantidad.value)) + 1;
    if (Number(cantidad.value) > 999) {
        cantidad.value = 999;
    }
});
