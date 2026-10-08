// Liste des commandes passées par les clients
const commandes = [
    { id: 1, client: "Alice", produit: "Laptop", prix: 900, quantite: 2, statut: "completed", pays: "France" },
    { id: 2, client: "Bob", produit: "Mouse", prix: 25, quantite: 3, statut: "pending", pays: "Germany" },
    { id: 3, client: "Charlie", produit: "Keyboard", prix: 80, quantite: 2, statut: "completed", pays: "France" },
    { id: 4, client: "David", produit: "Screen", prix: 250, quantite: 1, statut: "completed", pays: "Spain" },
    { id: 5, client: "Emma", produit: "Headphones", prix: 120, quantite: 2, statut: "cancelled", pays: "France" },
    { id: 6, client: "Frank", produit: "Tablet", prix: 400, quantite: 2, statut: "completed", pays: "Germany" },
    { id: 7, client: "Alice", produit: "Phone", prix: 700, quantite: 1, statut: "completed", pays: "France" },
    { id: 8, client: "Bob", produit: "Cable", prix: 15, quantite: 4, statut: "completed", pays: "Germany" }
];
// Traite les commandes terminées :
// applique les remises, calcule les frais de livraison
// et affiche les statistiques des ventes
function calculerremise(valeur) {
    if (valeur > 1000) return valeur = valeur * 0.85;
    if (valeur > 500) return valeur = valeur * 0.90;
    if (valeur > 100) return valeur = valeur * 0.95;

    return valeur

}
function calculerfraislivraison(pays, valeur) {
    if (valeur > 500) return 0;
    if (pays === "France") return 5;
    if (pays === "Germany") return 10;
    return 15;
}
function traitercommandes(commandes) {
    let commandestraitees = [];
    let chiffre = 0;
    let nb = 0;
    for (let i = 0; i < commandes.length; i++) {
        let commande = commandes[i];

        if (commande.statut === "completed") {
            let montantapresremise = calculerremise(commande.prix * commande.quantite);
            let fraislivraison = calculerfraislivraison(commande.pays, montantapresremise);
            let montantfinal = montantapresremise + fraislivraison;
            chiffre = chiffre + montantFinal;
            nb = nb + 1;

            commandestraitees.push({
                id: commande.id,
                client: commande.client,
                prix: commande.prix,
                montantapresremise: montantfinal,
                fraislivraison: fraislivraison
            });

        }
    }

    console.log("Number:", nb);
    console.log("Total:", chiffre);

    if (nb > 0) {
        console.log("Average:", chiffre / nb);
    } else {
        console.log("Average:", 0);
    }

    return commandestraitees;
}
// Recherche toutes les commandes d'un client
function obtenircommandes(commandes, nomclient) {
    let r = [];

    for (let i = 0; i < commandes.length; i++) {
        if (commandes[i].n === nomclient) {
            r.push(commandes[i]);
        }
    }

    return r;
}
// Compte le nombre de commandes ayant un statut donné
function comptercommandeparstatut(commandes, nomclient) {
    let x = 0;

    for (let i = 0; i < commandes.length; i++) {
        if (commandes[i].s === nomclient) {
            x = x + 1;
        }
    }

    return x;
}
// Récupère les commandes dont le montant brut dépasse 500
function Récupèrercommandes(commandes) {
    let r = [];

    for (let i = 0; i < commandes.length; i++) {
        let x = commandes[i].x * commandes[i].q;

        if (x > 500) {
            r.push(commandes[i]);
        }
    }

    return r;
}
// Calcule le montant brut total des commandes terminées
// sans remise ni frais de livraison
function calculerchiffreaffaire(commandes) {
    let x = 0;

    for (let i = 0; i < commandes.length; i++) {
        if (commandes[i].s === "completed") {
            x = x + commandes[i].x * commandes[i].q;
        }
    }

    return x;
}
// Affiche le nom du client et le produit de chaque commande
function affichercommandes(commandes) {
    for (let i = 0; i < commandes.length; i++) {
        console.log(commandes[i].n + " bought " + commandes[i].p);
    }
}

console.log(traitercommandes(commandes));
console.log(obtenircommandes(commandes, "Alice"));
console.log(comptercommandeparstatut(commandes, "pending"));
console.log(Récupèrercommandes(commandes));
console.log(calculerchiffreaffaire(commandes));
affichercommandes(commandes);