// Fonction pour rediriger vers la page d'accueil
function redirectToHome() {
    window.location.href = 'index.html';
}

// Récupération du bouton "Retour à l'accueil"
const backButton = document.getElementById('back-to-home');

// Ajout d'un écouteur d'événements pour le clic sur le bouton
if (backButton) {
    backButton.addEventListener('click', redirectToHome);
}
