"use strict";
class capoAbbigliamento {
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    getsaldocapo() {
        let result = (this.prezzoivainclusa * this.saldo) / 100;
        return parseFloat(result.toFixed(2)); //toFixed(2) converte un numero in stringa che abbia massimo 2 cifre decimali
    }
    getacquistocapo() {
        let result = this.prezzoivainclusa - this.getsaldocapo();
        return parseFloat(result.toFixed(2));
    }
}
const getCapo = function () {
    fetch("Abbigliamento.json")
        .then((res) => {
        if (res) {
            return res.json();
        }
        else {
            throw new Error("errore");
        }
    })
        .then((data) => {
        console.log(data); //dati recuperati
        const arrayCapi = []; //creo un array vuoto di tipo capiAbbigliamento
        data.forEach((e, i) => {
            let nuovoCapo = new capoAbbigliamento(e.id, e.codprod, e.collezione, e.capo, e.modello, e.quantita, e.colore, e.prezzoivaesclusa, e.prezzoivainclusa, e.disponibile, e.saldo);
            arrayCapi.push(nuovoCapo);
        });
        console.log(arrayCapi);
        arrayCapi.forEach((e) => {
            console.log(`-Lo sconto sul capo ${e.capo}, di colore ${e.colore} è di: ${e.getsaldocapo()}€ (${e.saldo}%). Il prezzo finale dell' articolo è di: ${e.getacquistocapo()}€.`);
            console.log('------------------------------------------------------');
        });
    })
        .catch((err) => {
        console.log(err);
    });
};
getCapo();
