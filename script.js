document.addEventListener("DOMContentLoaded", function () {
    const projets = document.querySelectorAll(".Exemple");
    const popup = document.getElementById("popup");
    const popupTitre = document.getElementById("popup-titre");
    const popupTexte = document.getElementById("popup-texte");

    // Définition du contenu des pop-ups
    const contenuPopups = {
        "logo": {
            titre: "Plus sur le logo :",
            texte: "Ce logo a été créé dans le cadre d’un projet personnel pour représenter mon identité visuelle dans mes vidéos."
        },
        "affiche1": {
            titre: "Plus sur l'affiche :",
            texte: "Cette affiche informative a été réalisée dans le cadre d’un projet en cours d’anglais sur le coquelicot (Poppy) au Canada pour le Remembrance Day. Elle explique l’origine et la signification de ce symbole de mémoire, utilisé pour honorer les soldats tombés au combat."
        },
        "carte": {
            titre: "Plus sur la carte mentale :",
            texte: "Cette carte mentale a été réalisée dans le cadre d’un projet en histoire sur Alexis de Tocqueville. Elle met en avant les concepts clés de sa pensée, notamment la démocratie, la liberté, ... À travers cette carte, l’objectif est de mieux comprendre son analyse du fonctionnement des institutions et de la démocratie, notamment aux États-Unis."
        },
        "affiche2": {
            titre: "Plus sur l'Affiche :",
            texte: "Cette affiche a été réalisée dans le cadre de la Journée du Handicap pour faire découvrir le tennis fauteuil, un sport adapté permettant aux personnes en situation de handicap de pratiquer le tennis avec des règles spécifiques. L'affiche met en avant les principes de ce sport, son histoire, ainsi que de grands athlètes français qui ont marqué la discipline."
        },
        "video": {
            titre: "Plus sur la Vidéo :",
            texte: "Dans le cadre de ce projet, j'ai réalisé une vidéo de sensibilisation sur le réchauffement climatique, en mettant en avant des réformes et des innovations pour lutter contre ce phénomène mondial. Travaillant en groupe de quatre, nous avons conçu un support de 30 minutes illustré et animé, destiné à informer et à susciter une prise de conscience. Cependant, en raison de l'absence de droits à l'image de mes camarades, je ne peux pas diffuser la vidéo publiquement. La réalisation du montage m'a particulièrement plu. Cela m'a permis d’explorer des aspects créatifs tout en transmettant efficacement un message percutant. Cette expérience m'a également sensibilisé davantage à l'importance d'utiliser les médias pour informer sur des questions cruciales telles que le réchauffement climatique."
        },
        "affiche3": {
            titre: "Plus sur l'Affiche :",
            texte: "J'ai réalisé une affiche sur le panda roux afin de sensibiliser à la situation critique de cet animal en voie de disparition."
        },
    };

    // Ouvrir le pop-up
    projets.forEach(projet => {
        projet.addEventListener("click", function () {
            const popupKey = this.getAttribute("data-popup");
            popupTitre.innerText = contenuPopups[popupKey].titre;
            popupTexte.innerText = contenuPopups[popupKey].texte;
            popup.style.display = "flex";
        });
    });

    // Fermer le pop-up en cliquant en dehors
    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});
