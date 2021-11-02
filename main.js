let nevHiba, jelszoHibas, jelszoIsmertHiba;

function Billentyu(e) {
    e.stopPropagation();
}

function nevHossza(){
    let hossz = document.getElementById("nev").value.length;
    document.getElementById("nevhossz").innerHTML = hossz+'/20';
    if (hossz>20) {
        nevhossz.classList.add("piros");
        nevHiba=true;
    }else{
        nevhossz.classList.remove("piros");
        nevHiba=false;
    }

}

function jelszoHossza(){
    let hossz = document.getElementById("jelszo").value.length;
    document.getElementById("jelszohossz").innerHTML = hossz+'/8';
    if (hossz<=8) {
        jelszohossz.classList.add("piros");
        jelszoHibas=false;
    }else{
        jelszohossz.classList.remove("piros");
        jelszoHibas=true;
    }

}

function jelszoHiba(){
    let jelszo1 = document.getElementById("jelszo").value;
    let jelszo2 = document.getElementById("jelszoIsmet").value;
    if (jelszo1!=jelszo2) {
        document.getElementById("jelszohiba").innerHTML = 'A két jelszó nem egyezik!';
        document.getElementById("jelszohiba").classList.add("piros");
        document.getElementById("jelszohiba").classList.remove("fekete");
        jelszoIsmertHiba=true;
    }else{
        document.getElementById("jelszohiba").innerHTML = '';
        jelszoIsmertHiba=false;

    }

}

function helyesRegisztracio(){
    if (!jelszoIsmertHiba && !jelszoHibas && !nevHiba) {
        document.getElementById("sikeres").innerHTML = 'Sikeres Regisztráció';
        document.getElementById("sikeres").classList.add("lila");
        document.getElementById("sikeres").classList.remove("fekete");
    }else{
        document.getElementById("sikeres").innerHTML = '';
    }
}

function kesleltet(e){
    setTimeout(helyesRegisztracio, 2000);
}

function init() {

    document.getElementById("nev").addEventListener("keydown", Billentyu);
    document.getElementById("nev").addEventListener("input", nevHossza);

    document.getElementById("jelszo").addEventListener("keydown", Billentyu);
    document.getElementById("jelszo").addEventListener("input", jelszoHossza);

    document.getElementById("jelszoIsmet").addEventListener("change", jelszoHiba);

    document.getElementById("regisztral").addEventListener("click", kesleltet);

}
document.addEventListener("DOMContentLoaded", init);