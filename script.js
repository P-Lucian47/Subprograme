// DARK MODE

const darkButton = document.getElementById("darkModeBtn");

darkButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

});


// QUIZ

function verificaRaspuns(raspunsCorect)
{
    let rezultat =
    document.getElementById("rezultatQuiz");

    if(raspunsCorect)
    {
        rezultat.innerHTML =
        "Corect! Funcțiile organizează codul eficient.";

        rezultat.style.color = "#2ecc71";
    }
    else
    {
        rezultat.innerHTML =
        "Răspuns greșit. Mai încearcă.";

        rezultat.style.color = "#e74c3c";
    }
}
