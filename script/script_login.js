//alert("login : ok c'est relié");
/******************** voir le pswd   ********************/

//je récupère la checkbox
let eye = document.getElementById("visibility-pswd");
//console.log(eye);
//j'ajoute addEnventListener pour voir si c'est check ou pas
eye.addEventListener("change", function () {
    //console.log("change");
    //je récupère l'input du pswd
    let displayStatut = document.getElementById("passeword-login");
    //si c'est check je change le type en text
    if (this.checked) {
        console.log("checked");
        displayStatut.type = "text";
    } else {
        //sinon je laisse comme ça
        console.log("not checked");
        displayStatut.type = "password";
    }
});

/******************** verif des mp localstorage et input page login   ********************/
//Récupération du form
let loginForm = document.getElementById("login-form");
//Ajout addEventListener sur le btn
loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche l'action par défaut du formulaire

    // Récupération du mp login
    let mailLogin= document.getElementById("mail-login").value;
    let pswdLogin = document.getElementById("passeword-login").value;
    console.log(pswdLogin);
    // Récupération de user depuis le localStorage
    let storedUser = localStorage.getItem(mailLogin);

    if (!storedUser) {
        // Si aucun utilisateur n'est trouvé avec cet email
        alert("Utilisateur introuvable. Veuillez vous inscrire.");
        return;
    }
    
    // Conversion de la chaîne JSON en objet
    let storedUserParsed = JSON.parse(storedUser);
    
    // Vérification des informations
    if (storedUserParsed.password === pswdLogin) {
        console.log("Connexion réussie !");
        // Redirection vers la page profil
        // lorsque je me connecte je créer la clé userConnected mettre les infos sotredUser (avec set)
        localStorage.setItem("userConnected", storedUser);
        document.location.href = "profil.html"; 
    } else {
        alert("Connexion échouée : email ou mot de passe incorrect.");
    }
});

