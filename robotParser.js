const commandes = {
    "0X123": "moveForward",
    "0X789": "moveBackward",
    "0XABC": "stop",
};

export function parse(flux) {
    const codes = flux.split(" ");
    const resultat = [];

    for (const morceau of codes) {
        const parties = morceau.split("*");
        const code = parties[0];
        let nombre = 1;
        if (parties.length === 2) {
            nombre = parties[1];
        }

        for (let i = 0; i < nombre; i++) {
            resultat.push(commandes[code]);
        }
    }

    return resultat;
}