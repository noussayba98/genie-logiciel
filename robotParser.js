export function parse(flux) {
    const codes = flux.split(" ");
    const resultat = [];
    for(const code of codes) {
        if (code === "0X123") {
            resultat.push("moveForward");
        }
        else if (code === "0X789") {
            resultat.push("moveBackward");
        }
        else if (code === "0XABC") {
            resultat.push("stop");
        }
    }
    return resultat;
}