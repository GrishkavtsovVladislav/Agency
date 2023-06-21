var modalTurkey = document.getElementById('modalTurkey');
var btnTurkey = document.getElementById('btnTurkey');
var modalTurkeyAllClose = document.getElementsByClassName('modal_turkey_all_close')[0];
btnTurkey.onclick = function() {
    modalTurkey.style.display = 'block';
};
modalTurkeyAllClose.onclick = function() {
    modalTurkey.style.display = 'none';
};

var modalEgypt = document.getElementById('modalEgypt');
var btnEgypt = document.getElementById('btnEgypt');
var modalEgyptAllClose = document.getElementsByClassName('modal_egypt_all_close')[0];
btnEgypt.onclick = function() {
    modalEgypt.style.display = 'block';
};
modalEgyptAllClose.onclick = function() {
    modalEgypt.style.display = 'none';
};

var modalUAE = document.getElementById('modalUAE');
var btnUAE = document.getElementById('btnUAE');
var modalUAEAllClose = document.getElementsByClassName('modal_uae_all_close')[0];
btnUAE.onclick = function() {
    modalUAE.style.display = 'block';
};
modalUAEAllClose.onclick = function() {
    modalUAE.style.display = 'none';
};

var modalGeorgia = document.getElementById('modalGeorgia');
var btnGeorgia = document.getElementById('btnGeorgia');
var modalGeorgiaAllClose = document.getElementsByClassName('modal_georgia_all_close')[0];
btnGeorgia.onclick = function() {
    modalGeorgia.style.display = 'block';
};
modalGeorgiaAllClose.onclick = function() {
    modalGeorgia.style.display = 'none';
};

var modalItaly = document.getElementById('modalItaly');
var btnItaly = document.getElementById('btnItaly');
var modalItalyAllClose = document.getElementsByClassName('modal_italy_all_close')[0];
btnItaly.onclick = function() {
    modalItaly.style.display = 'block';
};
modalItalyAllClose.onclick = function() {
    modalItaly.style.display = 'none';
};

var modalSpain = document.getElementById('modalSpain');
var btnSpain = document.getElementById('btnSpain');
var modalSpainAllClose = document.getElementsByClassName('modal_spain_all_close')[0];
btnSpain.onclick = function() {
    modalSpain.style.display = 'block';
};
modalSpainAllClose.onclick = function() {
    modalSpain.style.display = 'none';
};

var modalCyprus = document.getElementById('modalCyprus');
var btnCyprus = document.getElementById('btnCyprus');
var modalCyprusAllClose = document.getElementsByClassName('modal_cyprus_all_close')[0];
btnCyprus.onclick = function() {
    modalCyprus.style.display = 'block';
};
modalCyprusAllClose.onclick = function() {
    modalCyprus.style.display = 'none';
};

var modalCuba = document.getElementById('modalCuba');
var btnCuba = document.getElementById('btnCuba');
var modalCubaAllClose = document.getElementsByClassName('modal_cuba_all_close')[0];
btnCuba.onclick = function() {
    modalCuba.style.display = 'block';
};
modalCubaAllClose.onclick = function() {
    modalCuba.style.display = 'none';
};

var modalBulgaria = document.getElementById('modalBulgaria');
var btnBulgaria = document.getElementById('btnBulgaria');
var modalBulgariaAllClose = document.getElementsByClassName('modal_bulgaria_all_close')[0];
btnBulgaria.onclick = function() {
    modalBulgaria.style.display = 'block';
};
modalBulgariaAllClose.onclick = function() {
    modalBulgaria.style.display = 'none';
};

var modalMontenegro = document.getElementById('modalMontenegro');
var btnMontenegro = document.getElementById('btnMontenegro');
var modalMontenegroAllClose = document.getElementsByClassName('modal_montenegro_all_close')[0];
btnMontenegro.onclick = function() {
    modalMontenegro.style.display = 'block';
};
modalMontenegroAllClose.onclick = function() {
    modalMontenegro.style.display = 'none';
};

var modalIndia = document.getElementById('modalIndia');
var btnIndia = document.getElementById('btnIndia');
var modalIndiaAllClose = document.getElementsByClassName('modal_india_all_close')[0];
btnIndia.onclick = function() {
    modalIndia.style.display = 'block';
};
modalIndiaAllClose.onclick = function() {
    modalIndia.style.display = 'none';
};

var modalDominican = document.getElementById('modalDominican');
var btnDominican = document.getElementById('btnDominican');
var modalDominicanAllClose = document.getElementsByClassName('modal_dominican_all_close')[0];
btnDominican.onclick = function() {
    modalDominican.style.display = 'block';
};
modalDominicanAllClose.onclick = function() {
    modalDominican.style.display = 'none';
};

window.onclick = function(event) {
    if (event.target == modalTurkey) {
        modalTurkey.style.display = 'none';
    }
    if (event.target == modalEgypt) {
        modalEgypt.style.display = 'none';
    }
    if (event.target == modalUAE) {
        modalUAE.style.display = 'none';
    }
    if (event.target == modalGeorgia) {
        modalGeorgia.style.display = 'none';
    }
    if (event.target == modalItaly) {
        modalItaly.style.display = 'none';
    }
    if (event.target == modalSpain) {
        modalSpain.style.display = 'none';
    }
    if (event.target == modalCyprus) {
        modalCyprus.style.display = 'none';
    }
    if (event.target == modalCuba) {
        modalCuba.style.display = 'none';
    }
    if (event.target == modalBulgaria) {
        modalBulgaria.style.display = 'none';
    }
    if (event.target == modalMontenegro) {
        modalMontenegro.style.display = 'none';
    }
    if (event.target == modalIndia) {
        modalIndia.style.display = 'none';
    }
    if (event.target == modalDominican) {
        modalDominican.style.display = 'none';
    }
};