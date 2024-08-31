const luasPersegi = (s : number, callback: (luas: number) => void) => {
    const luas = Math.pow(s, 2)
    callback(luas)
}

const volKubus = (luas: number) => {
    const sisi = Math.sqrt(luas)
    const volume = Math.pow(sisi, 3)
    console.log(`Volume kubus: ${volume}`);
}

const luasPermukaan = (luasAlas: number) => {
    const luasPermukaanKubus = 6 * luasAlas;
    console.log(`Luas Kubus: ${luasPermukaanKubus}`);
}

export {
    luasPersegi, volKubus, luasPermukaan
}