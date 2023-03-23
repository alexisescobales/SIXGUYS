window.addEventListener("DOMContentLoaded", () => {

    // class plato extends HTMLElement{
    //     constructor() {
    //         super();
    //     }
    // }

    // connectedCallback(){}

    // window.customElements.define("plato-plantilla", plato);

    let open_popup_hamburguesa = document.getElementById("open-popup-hamburguesa");
    let open_popup_lasaña = document.getElementById("open-popup-lasaña");
    let close_popup = document.getElementById("close-popup");
    let popup = document.getElementById("popup");
    open_popup_lasaña.addEventListener("click", () => {
        popup.showModal();
    });
    open_popup_hamburguesa.addEventListener("click", () => {
        popup.showModal();
    });
    close_popup.addEventListener("click", () => {
        popup.close();
    });
});






function seleccion(sel) {
    //IMAGENES DEL PRIMERO//
    let hamburguesa_img = document.getElementById("hamburgesa");
    let lasaña_img = document.getElementById("lasaña");
    let fideos_img = document.getElementById("fideos");
    let galets_img = document.getElementById("galets");

    //RECIBO Y SUS TEXTOS//
    let recibo = document.getElementById("recibo");
    let primero = document.getElementById("primero_price");

    if (sel == "hamburgesa") {
        primero.innerText = 'Hamburguesa-->9$';
        lasaña_img.classList.add('oscurecer');
        fideos_img.classList.add('oscurecer');
        galets_img.classList.add('oscurecer');
        hamburguesa_img.classList.remove('oscurecer');
    } else if ((sel == "lasaña")) {
        primero.innerText = 'Lasaña-->9$';
        hamburguesa_img.classList.add('oscurecer');
        fideos_img.classList.add('oscurecer');
        galets_img.classList.add('oscurecer');
        lasaña_img.classList.remove('oscurecer');
    } else if ((sel == "fideos")) {
        primero.innerText = 'Fideos-->9$';
        hamburguesa_img.classList.add('oscurecer');
        galets_img.classList.add('oscurecer');
        lasaña_img.classList.add('oscurecer');
        fideos_img.classList.remove('oscurecer');
    } else if ((sel == "galets")) {
        primero.innerText = 'Galets-->9$';
        hamburguesa_img.classList.add('oscurecer');
        lasaña_img.classList.add('oscurecer');
        fideos_img.classList.add('oscurecer');
        galets_img.classList.remove('oscurecer');
    }

}