// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("amigo");
    const nameList = document.getElementById("listaAmigos");
    const resultDisplay = document.getElementById("resultado");
    
    let names = [];

    window.agregarAmigo = function () {
        const name = nameInput.value.trim();
        if (name === "") {
            alert("Por favor, ingrese un nombre válido.");
            return;
        }
        
        names.push(name);
        updateNameList();
        nameInput.value = "";
    };

    window.sortearAmigo = function () {
        if (names.length === 0) {
            alert("No hay nombres en la lista para sortear.");
            return;
        }
        
        const randomIndex = Math.floor(Math.random() * names.length);
        const secretFriend = names[randomIndex];
        resultDisplay.innerHTML = `<li>El amigo secreto es: <strong>${secretFriend}</strong></li>`;
        
        // Limpiar la lista después del sorteo
        names = [];
        updateNameList();
    };

    function updateNameList() {
        nameList.innerHTML = "";
        names.forEach(name => {
            const li = document.createElement("li");
            li.textContent = name;
            nameList.appendChild(li);
        });
    }
});