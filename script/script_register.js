//alert("register : ok c'est relié");
/******************** voir le pswd   ********************/

//je récupère la checkbox
let eye = document.getElementById("visibility-pswd");
//console.log(eye);
//j'ajoute addEnventListener pour voir si c'est check ou pas
eye.addEventListener("change", function () {
    //console.log("change");
    //je récupère l'input du pswd
    let displayStatut = document.getElementById("pswd");
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


/******************** récupérer les data localstorage ********************/

//Récupération du form
let registerForm = document.getElementById("register-form");
//Ajout addEventListener sur le btn
registerForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche l'action par défaut du formulaire

    // Récupération mes valeurs des inputs register
    let userName = document.getElementById("username").value;
    let email = document.getElementById("mail").value;
    let pswd = document.getElementById("pswd").value;
    let confirmedPswd = document.getElementById("confirmed-pswd").value;

    // Vérification des mots de passe
    //je compare les 2 pswd
    if (pswd !== confirmedPswd) {
        alert("Les mots de passe sont différents !");
        return; // Arrête l'exécution si les mots de passe ne correspondent pas
    }

    // Création de l'objet user
    const user = {
        username: userName,
        mail: email,
        password: pswd
    };

    console.log("Utilisateur enregistré :", user);

    // Ajout dans le localStorage (avec stringify pour la lecture)
    localStorage.setItem(email, JSON.stringify(user));

    alert("Inscription réussie !");
    // Je redirige vers la page de connexion
    document.location.href = "login.html"; 
});


