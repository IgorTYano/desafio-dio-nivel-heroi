let vitorias = 0;
let derrotas = 0;
let nivel = "Undefined";

function vitoriasRanking (vitorias, derrotas, nivel) {
    let saldo = vitorias - derrotas;

    if (vitorias > 100) {
        nivel = "Imortal"
    } else if (vitorias > 90) {
        nivel = "Lendário"
    } else if (vitorias > 80) {
        nivel = "Diamante"
    } else if (vitorias > 50) {
        nivel = "Ouro"
    } else if (vitorias > 20) {
        nivel = "Prata"
    } else {
        nivel = "Ferro"
    };

    console.log(`O Herói tem de saldo de ${saldo} está no nível de ${nivel}`);
};

vitoriasRanking(vitorias, derrotas, nivel);