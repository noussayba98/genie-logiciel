// Liste des commandes passées par les clients
const data = [
    { id: 1, n: "Alice", p: "Laptop", x: 900, q: 2, s: "completed", c: "France" },
    { id: 2, n: "Bob", p: "Mouse", x: 25, q: 3, s: "pending", c: "Germany" },
    { id: 3, n: "Charlie", p: "Keyboard", x: 80, q: 2, s: "completed", c: "France" },
    { id: 4, n: "David", p: "Screen", x: 250, q: 1, s: "completed", c: "Spain" },
    { id: 5, n: "Emma", p: "Headphones", x: 120, q: 2, s: "cancelled", c: "France" },
    { id: 6, n: "Frank", p: "Tablet", x: 400, q: 2, s: "completed", c: "Germany" },
    { id: 7, n: "Alice", p: "Phone", x: 700, q: 1, s: "completed", c: "France" },
    { id: 8, n: "Bob", p: "Cable", x: 15, q: 4, s: "completed", c: "Germany" }
];
// Traite les commandes terminées :
// applique les remises, calcule les frais de livraison
// et affiche les statistiques des ventes
function doStuff(a) {
    let r = [];
    let t = 0;
    let nb = 0;

    for (let i = 0; i < a.length; i++) {
        let o = a[i];

        if (o.s === "completed") {
            let v = o.x * o.q;

            if (v > 1000) {
                v = v * 0.85;
            } else {
                if (v > 500) {
                    v = v * 0.90;
                } else {
                    if (v > 100) {
                        v = v * 0.95;
                    }
                }
            }

            let z = 0;

            if (o.c === "France") {
                z = 5;
            } else {
                if (o.c === "Germany") {
                    z = 10;
                } else {
                    z = 15;
                }
            }

            if (v > 500) {
                z = 0;
            }

            let f = v + z;
            t = t + f;
            nb = nb + 1;

            r.push({
                id: o.id,
                n: o.n,
                p: o.p,
                v: f,
                z: z
            });
        }
    }

    console.log("Number:", nb);
    console.log("Total:", t);

    if (nb > 0) {
        console.log("Average:", t / nb);
    } else {
        console.log("Average:", 0);
    }

    return r;
}
// Recherche toutes les commandes d'un client
function getThings(a, b) {
    let r = [];

    for (let i = 0; i < a.length; i++) {
        if (a[i].n === b) {
            r.push(a[i]);
        }
    }

    return r;
}
// Compte le nombre de commandes ayant un statut donné
function checkStuff(a, b) {
    let x = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i].s === b) {
            x = x + 1;
        }
    }

    return x;
}
// Récupère les commandes dont le montant brut dépasse 500
function findThings(a) {
    let r = [];

    for (let i = 0; i < a.length; i++) {
        let x = a[i].x * a[i].q;

        if (x > 500) {
            r.push(a[i]);
        }
    }

    return r;
}
// Calcule le montant brut total des commandes terminées
// sans remise ni frais de livraison
function calculateSomething(a) {
    let x = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i].s === "completed") {
            x = x + a[i].x * a[i].q;
        }
    }

    return x;
}
// Affiche le nom du client et le produit de chaque commande
function showData(a) {
    for (let i = 0; i < a.length; i++) {
        console.log(a[i].n + " bought " + a[i].p);
    }
}

console.log(doStuff(data));
console.log(getThings(data, "Alice"));
console.log(checkStuff(data, "pending"));
console.log(findThings(data));
console.log(calculateSomething(data));
showData(data);