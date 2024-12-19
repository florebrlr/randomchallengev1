//alert("profil : ok c'est relié");

//créer nouvelle clé userConnected
// qu'est ce que je stock?
// soit que ce que j'ai besoin /l'ensemble des infos user => choix + judicieux ici
// soit uniquement la clé

// Récupération userConnected
let userLocalStorage = localStorage.getItem("userConnected");
console.log("userLocalStorage");
console.log(userLocalStorage);
//convertir la chaîne de caratères en objet JS
let parseUser = JSON.parse(userLocalStorage);
console.log("parseUser");
console.log(parseUser);


if (parseUser == null) {
    console.log("userLocalStorage est vide ou n'existe pas.");
}

// Vérifier si l'objet a bien été récupéré
if (!parseUser) {
    console.log("user n'est pas présente dans localStorage.");
} else {
    // Mise à jour de l'élément HTML avec le nom d'utilisateur
    let jsonNameSpan = document.getElementById("json-name");
    if (jsonNameSpan) {
        jsonNameSpan.textContent = parseUser.username;
        
    } else {
        console.error("L'élément avec l'ID 'json-name' est introuvable.");
    }
}

