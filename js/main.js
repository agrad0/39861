let bdodaj = document.getElementById('dodaj');
let busun = document.getElementById('usun');
let maintext = document.getElementById('tekst');
bdodaj.onclick = function show() {
    maintext.innerHTML= 'dowolny tekst';
}
busun.onclick = function show2(){
    maintext.innerHTML= null
}
