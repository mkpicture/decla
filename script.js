// Message d'introduction
const introMessage = "J'ai quelque chose de spécial à te dire...";

// La déclaration d'amour est prédéfinie dans le code
const declaration = "Ma Princesse Desir.Aujourd'hui, je prends le temps de mettre par écrit tout ce que je ressens pour toi, car il est essentiel pour moi de te faire comprendre à quel point tu comptes dans ma vie. Cela fait maintenant deux ans que nous sommes ensemble, et en y réfléchissant, je réalise à quel point notre parcours a été riche et unique.Ces deux années ont été un véritable voyage, rempli de moments de joie et de quelques défis. Nous avons traversé des hauts qui nous ont fait éclater de rire, des instants de bonheur simple, des balades main dans la main, et des soirées passées à discuter jusqu'à tard dans la nuit. Chaque instant partagé avec toi m'a appris à apprécier la beauté des petites choses et à valoriser notre complicité.Cependant, je ne peux pas ignorer les bas que nous avons également connus. Ces moments difficiles, parfois accablants, nous ont mis à l'épreuve, mais je crois fermement qu'ils ont été nécessaires pour nous renforcer. Ils ont révélé notre force, notre résilience et notre capacité à nous soutenir mutuellement. Grâce à ces épreuves, nous avons appris à mieux nous comprendre, à être plus attentifs aux besoins de l'autre et à construire une confiance mutuelle.Je me souviens de ces jours où l'incertitude pesait sur nous, où nous avions l'impression que tout était compliqué. Mais même dans ces moments-là, il y avait toujours une lueur d'espoir. C'était toi, avec ton sourire apaisant, qui me rappelait que, ensemble, nous pouvions surmonter n'importe quel obstacle. Ta force et ta détermination m'inspirent chaque jour, et je suis si reconnaissant d'avoir une personne aussi incroyable à mes côtés.Ce que nous avons vécu, je ne l'échangerais pour rien au monde. Chaque épreuve nous a permis de grandir, de mieux nous connaître et d'approfondir notre amour. Je suis convaincu que ces deux années n'étaient qu'un début, une introduction à une belle histoire que nous avons encore tant de choses à écrire ensemble.Je rêve de notre avenir, de ce que nous allons construire ensemble. Je veux être celui qui te soutiendra dans tes rêves, celui qui sera là dans les moments de joie comme dans les moments difficiles. Je veux partager avec toi chaque chapitre de notre vie, que ce soit des rires, des larmes, des aventures ou des moments de tranquillité à deux.Je tiens à te dire que je souhaite te rendre heureuse pour le reste de notre vie. Je veux être celui qui te fera sourire même dans les moments les plus sombres, celui qui t'apportera des fleurs pour égayer ta journée, et celui qui se battra à tes côtés, peu importe les obstacles.Ma chérie, je t'aime de tout mon cœur. J'espère de tout mon être que nous pourrons continuer à avancer ensemble, main dans la main, vers un avenir radieux et plein d'amour.Avec toute mon affection,";

// Fonction pour simuler l'effet de la machine à écrire
function typeWriter(text, elementId, delay, callback) {
    const element = document.getElementById(elementId);
    let i = 0;

    function write() {
        if (i < text.length) {
            element.innerHTML = text.substring(0, i + 1);
            i++;
            setTimeout(write, delay);
        } else {
            // Une fois tout le texte affiché, exécuter le callback
            if (callback) callback();
        }
    }
    write();
}

// Commencer l'animation de la machine à écrire pour le message d'introduction
window.onload = function() {
    typeWriter(introMessage, "typingText", 100, function() {
        // Après l'affichage complet, afficher le prompt
        setTimeout(() => {
            document.getElementById("introMessage").style.display = "none";
            document.getElementById("readPrompt").style.display = "block";
        }, 500); // Petite pause avant d'afficher le prompt
    });
};

// Gestion des boutons Oui et Non
document.getElementById('yesButton').addEventListener('click', function() {
    // Si l'utilisateur choisit "Oui", afficher directement la déclaration
    const declarationElement = document.createElement('p');
    declarationElement.textContent = declaration; // Afficher directement le texte de la déclaration
    document.getElementById('display').appendChild(declarationElement);

    // Cacher le prompt une fois la déclaration affichée
    document.getElementById('readPrompt').style.display = 'none';
});

document.getElementById('noButton').addEventListener('click', function() {
    // Si l'utilisateur choisit "Non", cacher simplement le prompt
    document.getElementById('readPrompt').style.display = 'none';
});
