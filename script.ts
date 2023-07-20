class capoAbbigliamento {
  constructor(
    public id: number,
    public codprod: number,
    public collezione: string,
    public capo: string,
    public modello: number,
    public quantita: number,
    public colore: string,
    public prezzoivaesclusa: number,
    public prezzoivainclusa: number,
    public disponibile: string,
    public saldo: number
  ) {
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

  getsaldocapo(): number {
    let sconto: number = (this.prezzoivainclusa * this.saldo) / 100;
    return parseFloat(sconto.toFixed(2)); //toFixed(2) converte un numero in stringa che abbia massimo 2 cifre decimali
  }

  getacquistocapo(): number {
    let costo: number = this.prezzoivainclusa - this.getsaldocapo();
    return parseFloat(costo.toFixed(2));
  }
}

const getCapo = function () {
  fetch("Abbigliamento.json")
    .then((res) => {
      if (res) {
        return res.json();
      } else {
        throw new Error("errore");
      }
    })

    .then((data) => {
      
      console.log(data); //dati recuperati

      const arrayCapi: capoAbbigliamento[] = []; //creo un array vuoto di tipo capiAbbigliamento

      data.forEach((e: capoAbbigliamento, i: number) => {  //ciclo l'array ricevuto e lo metto dentro il mio array di classe capi
        let nuovoCapo = new capoAbbigliamento(
          e.id,
          e.codprod,
          e.collezione,
          e.capo,
          e.modello,
          e.quantita,
          e.colore,
          e.prezzoivaesclusa,
          e.prezzoivainclusa,
          e.disponibile,
          e.saldo
        );

        arrayCapi.push(nuovoCapo);
      });

      console.log(arrayCapi);
      
      arrayCapi.forEach((e) => {
        console.log(
          `-Lo sconto sul capo ${e.capo}, di colore ${
            e.colore
          } è di: ${e.getsaldocapo()}€ (${e.saldo}%). Il prezzo finale dell' articolo è di: ${e.getacquistocapo()}€. Sono disponibili ${e.quantita} pezzi in ${e.disponibile}`
        );
        console.log('==============================================================');

        
      });
    })

    .catch((err) => {
      console.log(err);
    });
};

getCapo();
