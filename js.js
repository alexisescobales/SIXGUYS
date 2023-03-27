//VALOR DEL RECIBO
let recibo = 0;

//PRECIOS PRIMER PLATO
const hamburguesa = 9;
const lasaña = 11;
const fideos = 10;
const galets = 12;

window.addEventListener("DOMContentLoaded", () => {



    //BOTONES DE LLAMDA A POPUPS
    let open_popup_hamburguesa = document.getElementById("open-popup-hamburguesa");
    let open_popup_lasaña = document.getElementById("open-popup-lasaña");
    let open_popup_fideos = document.getElementById("open-popup-fideos");
    let open_popup_galets = document.getElementById("open-popup-galets");

    //BOTONES DE CERRADA A POPUPS
    let close_popup_hamburguesa = document.getElementById("close-hamburguesa");
    let close_popup_lasaña = document.getElementById("close-lasaña");
    let close_popup_fideos = document.getElementById("close-fideos");
    let close_popup_galets = document.getElementById("close-galets");

    //POPUPS
    let popup_hamburguesa = document.getElementById("popup-hamburguesa");
    let popup_lasaña = document.getElementById("popup-lasaña");
    let popup_fideos = document.getElementById("popup-fideos");
    let popup_galets = document.getElementById("popup-galets");

    open_popup_hamburguesa.addEventListener("click", () => {
        popup_hamburguesa.showModal();
    });
    close_popup_hamburguesa.addEventListener("click", () => {
        popup_hamburguesa.close();
    });


    open_popup_lasaña.addEventListener("click", () => {
        popup_lasaña.showModal();
    });
    close_popup_lasaña.addEventListener("click", () => {
        popup_lasaña.close();
    });


    open_popup_fideos.addEventListener("click", () => {
        popup_fideos.showModal();
    });
    close_popup_fideos.addEventListener("click", () => {
        popup_fideos.close();
    });

    open_popup_galets.addEventListener("click", () => {
        popup_galets.showModal();
    });
    close_popup_galets.addEventListener("click", () => {
        popup_galets.close();
    });


});


function seleccion(sel) {

    let elegido = false;

    //IMAGENES DEL PRIMERO//
    let hamburguesa_img = document.getElementById("hamburguesa");
    let lasaña_img = document.getElementById("lasaña");
    let fideos_img = document.getElementById("fideos");
    let galets_img = document.getElementById("galets");

    //FUNCION PARA OSCURECER IMAGENES 
    function oscurecer(img1, img2, img3, img_remove) {
        img1.classList.add('oscurecer');
        img2.classList.add('oscurecer');
        img3.classList.add('oscurecer');
        img_remove.classList.remove('oscurecer');
    }

    //RECIBO Y SUS TEXTOS//
    let primero = document.getElementById("primero_price");


    if (sel == "hamburguesa") {
        //SUMA EL PRECIO AL RECIBO
        recibo = hamburguesa;
        //ACTUALIZA EL VALOR TOTAL DEL RECIBO
        document.getElementById('recibo_valor').innerHTML = "Total: " + recibo + "$";
        //INGRESA EL PLATO ELEGIDO JUNTO SU PRECIO
        primero.innerText = 'Hamburguesa-->' + hamburguesa + '$';
        //OSCURECE LAS IMAGENES MENOS LA SELECCIONADA
        oscurecer(lasaña_img, fideos_img, galets_img, hamburguesa_img);
    } else if ((sel == "lasaña")) {
        recibo = lasaña;
        document.getElementById('recibo_valor').innerHTML = "Total: " + recibo + "$";
        primero.innerText = 'Lasaña-->'+lasaña+'$';
        oscurecer(hamburguesa_img, fideos_img, galets_img, lasaña_img);
    } else if ((sel == "fideos")) {
        recibo = fideos;
        document.getElementById('recibo_valor').innerHTML = "Total: " + recibo + "$";
        primero.innerText = 'Fideos-->'+fideos+'$';
        oscurecer(hamburguesa_img, lasaña_img, galets_img, fideos_img);
    } else if ((sel == "galets")) {
        recibo = galets;
        document.getElementById('recibo_valor').innerHTML = "Total: " + recibo + "$";
        primero.innerText = 'Galets-->'+galets+'$';
        oscurecer(hamburguesa_img, fideos_img, lasaña_img, galets_img);
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
                    <a href="#" onclick="seleccion('${this.name_id}')" class="btn btn-danger">SELECCIONAR</a>
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