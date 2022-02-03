// -------------------------------   VEZBANJE   ---------------------------------------------------------
// Nova terminologija: snippet code - isecak koda, u ovom slucaju ce biti deo skripte zbog kratkih resenja.
// Napisati javascript snippet code koji :
// 1. Ispisuje prosledjeni niz brojeva jedan ispod drugog.
// 2. Od prosledjenjog niza brojeva ispisuje samo parne
// 3. Racuna sumu prosledjenog niza
// 4. Ispisuje koliko ima brojeva vecih od prvog elementa niza


function ispisiNiz(niz){
    for(element in niz){
        console.log(niz[element])
    }
   
}

function paran(niz){
    for (let i = 0; i <  niz.length; i++) {
       if(niz[i]%2==0)
        console.log(niz[i]);
       
    }
}


function saberi(niz){
    var suma = 0;
    niz.forEach((item) => {
        sum+=item;
    });
    return niz;
}
function veciODprvog(niz){
    var prvi = niz[0];
    var veci = 0
    arr.forEach(element => {
        if(element>prvi)
        veci++;
    })
    return veci
}