export function parse(flux) {
    const codes = flux.split(" ");
    const resultat = [];
    for(const morceau of codes) {
        const parties = morceau.split("*");
        const code = parties[0];
        let nombre = 1;
        if (parties.length === 2) {
            nombre = parties[1];
        }
        for(let i = 0; i < nombre; i++) {
        if (code === "0X123") {
            resultat.push("moveForward");
        }
        if (code === "0X789") {
            resultat.push("moveBackward");
        }
        if (code === "0XABC") {
            resultat.push("stop");
        }
    }
}
    return resultat;
}