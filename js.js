//VALOR DEL RECIBO
let recibo = 0;

//PRECIOS FINALES DE CADA PLATO
let primero_final;
let guarnicion_final;
let bebida_final;

//PRECIOS PRIMER PLATO
const hamburguesa = 10;
const lasaña = 11;
const fideos = 10;
const galets = 12;

//PRECIOS GUARNICION
const tiras = 9;
const deluxe = 7;
const ensalada = 8;
const fritas = 6;

//PRECIOS BEBIDA
const cocacola = 2.5;
const nestea = 2;
const agua = 1.50;
const fanta = 2;


window.addEventListener("DOMContentLoaded", () => {



    //BOTONES DE LLAMDA A POPUPS

    //PRIMERO
    let open_popup_hamburguesa = document.getElementById("open-popup-hamburguesa");
    let open_popup_lasaña = document.getElementById("open-popup-lasaña");
    let open_popup_fideos = document.getElementById("open-popup-fideos");
    let open_popup_galets = document.getElementById("open-popup-galets");

    //GUARNICION
    let open_popup_tiras = document.getElementById("open-popup-tiras");
    let open_popup_deluxe = document.getElementById("open-popup-deluxe");
    let open_popup_ensalada = document.getElementById("open-popup-ensalada");
    let open_popup_fritas = document.getElementById("open-popup-fritas");

    //GUARNICION
    let open_popup_cocacola = document.getElementById("open-popup-cocacola");
    let open_popup_nestea = document.getElementById("open-popup-nestea");
    let open_popup_agua = document.getElementById("open-popup-agua");
    let open_popup_fanta = document.getElementById("open-popup-fanta");



    //BOTONES DE CERRADA A POPUPS

    //PRIMERO
    let close_popup_hamburguesa = document.getElementById("close-hamburguesa");
    let close_popup_lasaña = document.getElementById("close-lasaña");
    let close_popup_fideos = document.getElementById("close-fideos");
    let close_popup_galets = document.getElementById("close-galets");

    //GUARNICION
    let close_popup_tiras = document.getElementById("close-tiras");
    let close_popup_deluxe = document.getElementById("close-deluxe");
    let close_popup_ensalada = document.getElementById("close-ensalada");
    let close_popup_fritas = document.getElementById("close-fritas");

    //BEBIDA
    let close_popup_cocacola = document.getElementById("close-cocacola");
    let close_popup_nestea = document.getElementById("close-nestea");
    let close_popup_agua = document.getElementById("close-agua");
    let close_popup_fanta = document.getElementById("close-fanta");

    //POPUPS

    //PRIMERO
    let popup_hamburguesa = document.getElementById("popup-hamburguesa");
    let popup_lasaña = document.getElementById("popup-lasaña");
    let popup_fideos = document.getElementById("popup-fideos");
    let popup_galets = document.getElementById("popup-galets");

    //GUARNICION
    let popup_tiras = document.getElementById("popup-tiras");
    let popup_deluxe = document.getElementById("popup-deluxe");
    let popup_ensalada = document.getElementById("popup-ensalada");
    let popup_fritas = document.getElementById("popup-fritas");

    //BEBIDA
    let popup_cocacola = document.getElementById("popup-cocacola");
    let popup_nestea = document.getElementById("popup-nestea");
    let popup_agua = document.getElementById("popup-agua");
    let popup_fanta = document.getElementById("popup-fanta");

    //FUNCION PARA LLAMAR Y CERRAR POPUPS
    function popup_open(button_open, button_close, popup) {
        button_open.addEventListener("click", () => {
            popup.showModal();
        });
        button_close.addEventListener("click", () => {
            popup.close();
        });
    }

    //POPUPS PRIMERO
    popup_open(open_popup_hamburguesa, close_popup_hamburguesa, popup_hamburguesa);
    popup_open(open_popup_lasaña, close_popup_lasaña, popup_lasaña);
    popup_open(open_popup_fideos, close_popup_fideos, popup_fideos);
    popup_open(open_popup_galets, close_popup_galets, popup_galets);

    //POPUPS GUARNICION
    popup_open(open_popup_tiras, close_popup_tiras, popup_tiras);
    popup_open(open_popup_deluxe, close_popup_deluxe, popup_deluxe);
    popup_open(open_popup_ensalada, close_popup_ensalada, popup_ensalada);
    popup_open(open_popup_fritas, close_popup_fritas, popup_fritas);

    //POPUPS BEBIDA
    popup_open(open_popup_cocacola, close_popup_cocacola, popup_cocacola);
    popup_open(open_popup_nestea, close_popup_nestea, popup_nestea);
    popup_open(open_popup_agua, close_popup_agua, popup_agua);
    popup_open(open_popup_fanta, close_popup_fanta, popup_fanta);

});


function seleccion(sel) {

    //IMAGENES DEL PRIMERO//
    let hamburguesa_img = document.getElementById("hamburguesa");
    let lasaña_img = document.getElementById("lasaña");
    let fideos_img = document.getElementById("fideos");
    let galets_img = document.getElementById("galets");

    //IMAGENES DEL PRIMERO//
    let tiras_img = document.getElementById("tiras");
    let deluxe_img = document.getElementById("deluxe");
    let ensalada_img = document.getElementById("ensalada");
    let fritas_img = document.getElementById("fritas");

    //IMAGENES DE BEBIDA//
    let cocacola_img = document.getElementById("cocacola");
    let nestea_img = document.getElementById("nestea");
    let agua_img = document.getElementById("agua");
    let fanta_img = document.getElementById("fanta");




    //FUNCION PARA OSCURECER IMAGENES 
    function oscurecer(img1, img2, img3, img_remove) {
        img1.classList.add('oscurecer');
        img2.classList.add('oscurecer');
        img3.classList.add('oscurecer');
        img_remove.classList.remove('oscurecer');
    }

    //RECIBO Y SUS TEXTOS//
    let primero_texto = document.getElementById("primero_price");
    let guarnicion_texto = document.getElementById("guarnicion");
    let bebida_texto = document.getElementById("bebida");

    //VALORES PRIMERO
    if (sel == "hamburguesa") {
        primero_final = hamburguesa;
        document.getElementById('recibo_valor').innerHTML = "Total: " + recibo + "$"; //ACTUALIZA EL VALOR TOTAL DEL RECIBO
        primero_texto.innerText = 'Hamburguesa-->' + primero_final + '$'; //INGRESA EL PLATO ELEGIDO JUNTO SU PRECIO
        oscurecer(lasaña_img, fideos_img, galets_img, hamburguesa_img); //OSCURECE LAS IMAGENES MENOS LA SELECCIONADA
    } else if ((sel == "lasaña")) {
        primero_final = lasaña;
        document.getElementById('recibo_valor').innerHTML = "Total: " + recibo + "$";
        primero_texto.innerText = 'Lasaña-->' + primero_final + '$';
        oscurecer(hamburguesa_img, fideos_img, galets_img, lasaña_img);
    } else if ((sel == "fideos")) {
        primero_final = fideos;
        document.getElementById('recibo_valor').innerHTML = "Total: " + recibo + "$";
        primero_texto.innerText = 'Fideos-->' + primero_final + '$';
        oscurecer(hamburguesa_img, lasaña_img, galets_img, fideos_img);
    } else if ((sel == "galets")) {
        primero_final = galets;
        document.getElementById('recibo_valor').innerHTML = "Total: " + recibo + "$";
        primero_texto.innerText = 'Galets-->' + primero_final + '$';
        oscurecer(hamburguesa_img, fideos_img, lasaña_img, galets_img);
    }


    //VALORES GUARNICION
    if (sel == "tiras") {
        guarnicion_final = tiras;
        recibo = primero_final + guarnicion_final;
        document.getElementById('recibo_valor').innerHTML = "Total: " + recibo + "$";
        guarnicion_texto.innerText = 'Tiras De Pollo-->' + tiras + '$';
        oscurecer(deluxe_img, ensalada_img, fritas_img, tiras_img);
    } else if ((sel == "deluxe")) {
        guarnicion_final = deluxe;
        recibo = primero_final + guarnicion_final;
        document.getElementById('recibo_valor').innerHTML = "Total: " + recibo + "$";
        guarnicion_texto.innerText = 'Patatas Deluxe-->' + deluxe + '$';
        oscurecer(tiras_img, ensalada_img, fritas_img, deluxe_img);
    } else if ((sel == "ensalada")) {
        guarnicion_final = ensalada;
        recibo = primero_final + guarnicion_final;
        document.getElementById('recibo_valor').innerHTML = "Total: " + recibo + "$";
        guarnicion_texto.innerText = 'Ensalada-->' + ensalada + '$';
        oscurecer(tiras_img, deluxe_img, fritas_img, ensalada_img);
    } else if ((sel == "fritas")) {
        guarnicion_final = fritas;
        recibo = primero_final + guarnicion_final;
        document.getElementById('recibo_valor').innerHTML = "Total: " + recibo + "$";
        guarnicion_texto.innerText = 'Patatas Fritas-->' + fritas + '$';
        oscurecer(ensalada_img, deluxe_img, tiras_img, fritas_img);
    }

    //VALORES BEBIDA
    if (sel == "cocacola") {
        guarnicion_final = cocacola;
        recibo = primero_final + guarnicion_final + bebida_final;
        document.getElementById('recibo_valor').innerHTML = "Total: " + recibo + "$";
        bebida_texto.innerText = 'Cocacola-->' + cocacola + '$';
        oscurecer(nestea_img, agua_img, fanta_img, cocacola_img);
    } else if ((sel == "nestea")) {
        guarnicion_final = nestea;
        recibo = primero_final + guarnicion_final + bebida_final;
        bebida_texto.innerText = 'Nestea-->' + nestea + '$';
        oscurecer(cocacola_img, agua_img, fanta_img, nestea_img);
    } else if ((sel == "agua")) {
        guarnicion_final = agua;
        recibo = primero_final + guarnicion_final + bebida_final;
        bebida_texto.innerText = 'Agua-->' + agua + '$';
        oscurecer(cocacola_img, nestea_img, fanta_img, agua_img);
    } else if ((sel == "fanta")) {
        bebida_final = fanta;
        recibo = primero_final + guarnicion_final + bebida_final;
        bebida_texto.innerText = 'Fanta-->' + fanta + '$';
        oscurecer(cocacola_img, nestea_img, agua_img, fanta_img);
    }
};


class plato extends HTMLElement {
    constructor() {
        super();
        this.name;
        this.src_plato;
        this.description;
        this.name_id;
        this.open_popup_id;
    }

    static get observedAttributes() {
        return ['name', "src_plato", "description", "name_id", "open_popup_id"];
    }

    attributeChangedCallback(nameAttr, oldValue, newValue) {
        switch (nameAttr) {
            case "name":
                this.name = newValue;
                break;
            case "src_plato":
                this.src_plato = newValue;
                break;
            case "description":
                this.description = newValue;
                break;
            case "name_id":
                this.name_id = newValue;
                break;
            case "open_popup_id":
                this.open_popup_id = newValue;
                break;
        }
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img id="${this.name_id}" src="${this.src_plato}" class="card-img-top" height="200px">
                <div class="card-body">
                    <button id="${this.open_popup_id}" class="button-popup" type="button"> <img class="info" src="./img/info.png"></button>
                    <h5 class="card-title">${this.name}</h5>
                    <p class="card-text">${this.description}</p>
                    <a onclick="seleccion('${this.name_id}')" class="btn btn-danger">SELECCIONAR</a>
                </div>
            </div>
            `;
    }
}

window.customElements.define("plato-template", plato);

class popup extends HTMLElement {
    constructor() {
        super();
        this.popup_id;
        this.titulo;
        this.ingr_1;
        this.ingr_2;
        this.ingr_3;
        this.ingr_4;
        this.close_id;
    }

    static get observedAttributes() {
        return ["titulo", "ingr_1", "ingr_2", "ingr_3", "ingr_4", "popup_id", "close_id"];
    }

    attributeChangedCallback(nameAttr, oldValue, newValue) {
        switch (nameAttr) {
            case "titulo":
                this.titulo = newValue;
                break;
            case "ingr_1":
                this.ingr_1 = newValue;
                break;
            case "ingr_2":
                this.ingr_2 = newValue;
                break;
            case "ingr_3":
                this.ingr_3 = newValue;
                break;
            case "ingr_4":
                this.ingr_4 = newValue;
                break;
            case "popup_id":
                this.popup_id = newValue;
                break;
            case "close_id":
                this.close_id = newValue;
                break;

        }
    }

    connectedCallback() {
        this.innerHTML = `
        <dialog class="popup" id="${this.popup_id}">
            <button class="close-popup" id="${this.close_id}" type="button"> <img class="info" src="./img/close.png"></button>
            <h2>${this.titulo}</h2>
            <hr id="linea" class="w-100 clearfix d-md" />
            <h3>Ingredientes:</h3>
            <p>-${this.ingr_1}</p>
            <p>-${this.ingr_2}</p>
            <p>-${this.ingr_3}</p>
            <p>-${this.ingr_4}</p>
        </dialog>
            `;
    }
}

window.customElements.define("popup-template", popup);