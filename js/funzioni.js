function create() {
    //creazione header
    let navbar = document.querySelector("#navbar");
    navbar.className = "navbar navbar-expand-lg bg-black fixed-top navbar-before-scroll";

    

    window.onscroll = function() {aggiungi()};

function aggiungi() {
    let navbar = document.querySelector("#navbar");
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    navbar.classList.add("navbar-after-scroll");
  }
  else {
    navbar.classList.remove("navbar-after-scroll");
  }
}
    
    let divTagContainerXl = document.createElement("div");
    divTagContainerXl.className = "container-xl"
    navbar.appendChild(divTagContainerXl);
    let a = document.createElement("a");
    a.className = "navbar-brand";
    a.setAttribute("href", "index.html");
    divTagContainerXl.appendChild(a);
    let img = document.createElement("img");
    img.setAttribute("src", "img/logo_bianco_giallo.svg");
    a.appendChild(img);
    let buttonTag = document.createElement("button");
    buttonTag.className = "navbar-toggler";
    buttonTag.type = "button";
    buttonTag.setAttribute("data-bs-toggle", "collapse");
    buttonTag.setAttribute("data-bs-target", "#navbarSupportedContent");
    buttonTag.setAttribute("onclick", "togliTransparente()");
    divTagContainerXl.appendChild(buttonTag);
    let spanTag = document.createElement("span");
    spanTag.className = "hambugher";
    buttonTag.appendChild(spanTag);
    let imgTagHamburgher = document.createElement("img");
    imgTagHamburgher.setAttribute("src", "icone/icona_hamburgher.svg");
    spanTag.appendChild(imgTagHamburgher);
    let divTagCollapse = document.createElement("div");
    divTagCollapse.className = "collapse navbar-collapse";
    divTagCollapse.setAttribute("id", "navbarSupportedContent");
    divTagContainerXl.appendChild(divTagCollapse);
    let ulTag = document.createElement("ul");
    ulTag.className = "navbar-nav me-auto mb-2 mb-lg-0";
    ulTag.setAttribute("id", "nav-center");
    divTagCollapse.appendChild(ulTag);
    
    let indice = [
        {
            href: "index.html",
            class: "nav-link",
            textContent: "Home"
        },
        {
            href: "vini.html",
            class: "nav-link",
            textContent: "Vini",
            id: "vini"
        },
        {
            href: "degustazione.html",
            class: "nav-link",
            textContent: "Degustazione"
        },
        {
            href: "vitigni.html",
            class: "nav-link",
            textContent: "Vitigni"
        },
        {
            href: "contatti.html",
            class: "nav-link",
            textContent: "Contatti",
            id: "contatti"
        }
    ];

    for(let obj of indice) {
        let liTag = document.createElement("li");
        liTag.className = "nav-item dropdown";
        ulTag.appendChild(liTag);
        let aTag = document.createElement("a");
        liTag.appendChild(aTag);
        for(let proprieta in obj) {
            if(proprieta == "textContent") {
                aTag.textContent = obj.textContent;
            }
            else {
                aTag.setAttribute(proprieta, obj[proprieta]);
            }
        }
    }


    let pageCurrent = window.location.pathname;
    let page = document.querySelectorAll("#nav-center a");
    for(let pageSite of page) {
        if(pageCurrent == pageSite.pathname) {
            pageSite.classList.add("attivo");
        }
    }

    let ulTagIcone = document.createElement("ul");
    ulTagIcone.className = "navbar-nav mb-2 mb-lg-0";
    ulTagIcone.id = "icone";
    ulTag.after(ulTagIcone);

    let indiceIcone = [
        {
            href: "https://www.tripadvisor.it/",
            class: "nav-link",
            id: "tripadvisor",
            src: "icone/icona_tripadvisor.svg"
        },
        {
            href: "https://www.tiktok.com/",
            class: "nav-link",
            id: "tiktok",
            src: "icone/icona_tik-tok.svg"
        },
        {
            href: "https://www.facebook.com/",
            class: "nav-link",
            id: "facebook",
            src: "icone/icona_facebook.svg"
        },
        {
            href: "https://www.instagram.com/",
            class: "nav-link",
            id: "instagram",
            src: "icone/icona_insta.svg"
        },
    ];
    for(let obj of indiceIcone) {
        let liTagIcone = document.createElement("li");
        liTagIcone.className = "nav-item";
        ulTagIcone.appendChild(liTagIcone);
        let aTag = document.createElement("a");
        liTagIcone.appendChild(aTag);
        let imgTag = document.createElement("img");
        aTag.appendChild(imgTag);
        for(let proprieta in obj) {
            if(proprieta == "src" || proprieta == "id") {
                imgTag.setAttribute(proprieta, obj[proprieta]);
            }
            else {
                aTag.setAttribute(proprieta, obj[proprieta]);
            }
        }
    }
    let tripadvisor = document.querySelector("#tripadvisor");
    let tiktok = document.querySelector("#tiktok");
    let facebook = document.querySelector("#facebook");
    let instagram = document.querySelector("#instagram");
    let logo = document.querySelector(".navbar-brand img");
    let hambugher = document.querySelector(".hambugher img");
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 0) {
            tripadvisor.src = "icone/icona_tripadvisor_nera.svg";
            tiktok.src = "icone/icona_tiktok_nera.svg";
            facebook.src = "icone/icona_facebook_nera.svg";
            instagram.src = "icone/icona_insta_nera.svg";
            logo.src = "img/logo_nero_giallo.svg";
            hambugher.src = "icone/icona_hamburger_nera.svg";
        }
        else {
            tripadvisor.src = "icone/icona_tripadvisor.svg";
            tiktok.src = "icone/icona_tik-tok.svg";
            facebook.src = "icone/icona_facebook.svg";
            instagram.src = "icone/icona_insta.svg";
            logo.src = "img/logo_bianco_giallo.svg";
            hambugher.src = "icone/icona_hamburgher.svg";
        }
        })
    //footer
    let footer = document.querySelector("#footer");
    let divTagRow = document.createElement("div");
    divTagRow.className = "row mt-4 mt-sm-5 mt-xl-11 mt-lg-9 mt-md-7";
    footer.appendChild(divTagRow);
    let divTagColLogo = document.createElement("div");
    divTagColLogo.className = "col-12";
    divTagRow.appendChild(divTagColLogo);
    let divTagLogo = document.createElement("div");
    divTagLogo.className = "logo";
    divTagColLogo.appendChild(divTagLogo);
    let imgLogo = document.createElement("img");
    imgLogo.setAttribute("src", "img/logo_bianco_giallo.svg");
    divTagLogo.appendChild(imgLogo);
    let divTagColTitolo = document.createElement("div");
    divTagColTitolo.className = "col-12 row mt-2 mt-sm-4 mt-xl-7 mt-lg-5 mt-md-2rem pe-0";
    divTagRow.appendChild(divTagColTitolo);
    let pTagTitolo = document.createElement("p");
    pTagTitolo.className = "titolo text-center text-warning pe-0 titolo-footer";
    pTagTitolo.textContent = "LINK UTILI";
    divTagColTitolo.appendChild(pTagTitolo);
    let divTagColLink = document.createElement("div");
    divTagColLink.className = "col-12 row mt-2 mt-sm-4 mt-xl-7 mt-lg-5 mt-md-2rem pe-0";
    divTagRow.appendChild(divTagColLink);
    let ulTagLink = document.createElement("ul");
    ulTagLink.id = "link";
    ulTagLink.className = "text-center ul-footer";
    divTagColLink.appendChild(ulTagLink);
    let divTagColPrivacy = document.createElement("div");
    divTagColPrivacy.className = "col-12 row mt-2 mt-sm-4 mt-xl-7 mt-lg-5 mt-md-2rem pe-0 border-privacy d-flex";
    divTagRow.appendChild(divTagColPrivacy);
    let divTagPrivacyCookie = document.createElement("div");
    divTagPrivacyCookie.className = "mt-2 mt-sm-4 mt-xl-7 mt-lg-5 mt-md-2rem pe-0 mb-0 w-100 text-center d-flex";
    divTagColPrivacy.appendChild(divTagPrivacyCookie);
    let aTagPrivacy = document.createElement("a");
    aTagPrivacy.className = "testo-card text-center text-white text-decoration-none privacy-policy ms-auto";
    aTagPrivacy.textContent = "Privacy Policy";
    aTagPrivacy.href = "https://www.governo.it/it/privacy-policy";
    divTagPrivacyCookie.appendChild(aTagPrivacy);
    let pTagBarra = document.createElement("p");
    pTagBarra.className = "testo-card text-center text-white mx-2 mb-0";
    pTagBarra.textContent = "|";
    aTagPrivacy.after(pTagBarra);
    let aTagCookie = document.createElement("a");
    aTagCookie.className = "testo-card text-center text-white text-decoration-none cookie-policy me-auto";
    aTagCookie.textContent = "Cookie Policy";
    aTagCookie.href = "https://commission.europa.eu/cookies-policy_en";
    divTagPrivacyCookie.appendChild(aTagCookie);
    let divTagColCopyright = document.createElement("div");
    divTagColCopyright.className = "col-12 row mt-2 mt-sm-4 mt-xl-7 mt-lg-5 mt-md-2rem pe-0 mb-2 mb-sm-4 mb-xl-7 mb-lg-5 mb-md-2rem pe-0";
    divTagRow.appendChild(divTagColCopyright);
    let divTagCopyrightCredit = document.createElement("div");
    divTagCopyrightCredit.className = "w-100 text-center d-flex";
    divTagColCopyright.appendChild(divTagCopyrightCredit);
    let aTagCopyright = document.createElement("a");
    aTagCopyright.className = "testo-card text-center text-white-50 text-decoration-none  ms-auto";
    aTagCopyright.textContent = "Copyright @ Cantina sapori di passione";
    divTagCopyrightCredit.appendChild(aTagCopyright);
    let pTagBarra2 = document.createElement("p");
    pTagBarra2.className = "testo-card text-center text-white mx-2 mb-0 colore-copyright";
    pTagBarra2.textContent = "|";
    aTagCopyright.after(pTagBarra2);
    let aTagCredit = document.createElement("a");
    aTagCredit.className = "testo-card text-center text-white-50 text-decoration-none me-auto";
    aTagCredit.textContent = "credit: @luigimossuto";
    aTagCredit.href = "https://www.linkedin.com/in/luigi-mossuto-597758261/";
    divTagCopyrightCredit.appendChild(aTagCredit);

    let indiceLink = [
        {
            href: "index.html",
            class: "nav-link",
            textContent: "HOME"
        },
        {
            href: "vini.html",
            class: "nav-link",
            textContent: "VINI"
        },
        {
            href: "degustazione.html",
            class: "nav-link",
            textContent: "DEGUSTAZIONE"
        },
        {
            href: "vitigni.html",
            class: "nav-link",
            textContent: "VITIGNI"
        },
        {
            href: "contatti.html",
            class: "nav-link",
            textContent: "CONTATTI"
        },
    ];
    for(let obj of indiceLink) {
        let liTagLink = document.createElement("li");
        liTagLink.className = "nav-item";
        ulTagLink.appendChild(liTagLink);
        let aTagLink = document.createElement("a");
        liTagLink.appendChild(aTagLink);
        for(let proprieta in obj) {
            if(proprieta == "textContent") {
                aTagLink.textContent = obj.textContent;
            }
            else {
                aTagLink.setAttribute(proprieta, obj[proprieta]);
            }
        }
    }
}
function togliTransparente() {
    if(document.title == "Degustazione" || document.title == "Vitigni") {
    let navbar = document.querySelector("#navbar");
    navbar.classList.toggle("bg-transparent-l");
    }
}
function apriDropdown() {
    let vini = document.querySelector("#vini");
    vini.classList.add("show");
    vini.setAttribute("aria-expanded", "true");
    let ulDropdown = document.querySelector("#vini ul");
    ulDropdown.classList.add("show");
}
function chiudiDropdown() {
    let vini = document.querySelector("#vini");
    vini.classList.remove("show");
    vini.setAttribute("aria-expanded", "false");
    let ulDropdown = document.querySelector("#vini ul");
    ulDropdown.classList.remove("show");
}
function change() {
    let cuore = document.querySelector("#cuore2");
    cuore.setAttribute("src", "icone/icona_cuore-con-freccia2_hover.svg");
    cuore.TransitionEvent = "all 0.6s ease-out";
}
function change2() {
    let cuore = document.querySelector("#cuore2");
    cuore.setAttribute("src", "icone/icona_cuore-con-freccia2.svg");
}
function openModal() {
    if(getCookie('maggiorenne') != 'true') {
        document.body.classList.add("modal-open", "overflow-hidden", "pe-0");
        let box = document.querySelector("#anni");
        box.classList.add("show", "d-block");
        let divTag = document.createElement("div");
        document.body.appendChild(divTag);
        divTag.className = "modal-backdrop fade show"; 
    }
}

if(document.title == "Home") {
    setTimeout(openModal, 2000);
}

function closeModal() {
    document.body.classList.remove("modal-open", "overflow-hidden", "pe-0");
    let box = document.querySelector("#anni")
    box.classList.remove("show", "d-block");
    document.body.lastElementChild.remove();
}
function back() {
    let box = document.querySelector("#navbar");
    let aTag = document.createElement("a");
    aTag.className = "bottone-l text-decoration-none tasto-back d-lg-none tasto-back";
    aTag.href = "javascript:history.go(-1)";
    aTag.setAttribute("onMouseOver", "self.status=document.referrer;return true");
    aTag.textContent = "Torna indietro";
    aTag.id = "back";
    box.appendChild(aTag);
    let divTag = document.createElement("div");
    divTag.className = "quadrato-tasto-back";
    aTag.appendChild(divTag);
    let iTag = document.createElement("i");
    iTag.className = "fa-solid fa-arrow-left-long fa-lg";
    divTag.appendChild(iTag);
}
function bgTransparent() {
    let navbar = document.querySelector("#navbar");
    navbar.classList.add("bg-transparent-l");
}
function select() {
    //select giorno
    let giorno = document.querySelector("#giorno");
    for(let i=0; i<=31; i++) {
        let optionTag = document.createElement("option");
        optionTag.textContent = i;
        giorno.appendChild(optionTag);
        optionTag.value = i;
        if(i==0) {
            optionTag.textContent = "Scegli un giorno";
        }
    }
    //select mese
    let mese = document.querySelector("#mese");
    let listaMese = ["Scegli un mese","Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"];
    let i = 0;
    for(let element of listaMese) {
        let optionTag = document.createElement("option");
        optionTag.textContent = element;
        mese.appendChild(optionTag);
        if(i == 0) {
            optionTag.value = 0;
        }
        else {
            optionTag.value = i;
        }
        i++;
    }
    //select anno
    let anno = document.querySelector("#anno");
    let dataAnno = new Date().getFullYear();
    for(let i = dataAnno - 1; i <= dataAnno+5; i++) {
        let optionTag = document.createElement("option");
        optionTag.textContent = i;
        anno.appendChild(optionTag);
        if(i == dataAnno-1) {
            optionTag.textContent = "Scegli un anno";
            optionTag.value = 0;
        }
        else {
            optionTag.value = i;
        }
    }
}
function controlloEmailNewsletter() {
    let email = document.querySelector("#email_newsletter");
    let emailMsg = document.querySelector("#msg-email-newsletter");
    let patternEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailFlag = false;
    let btn = document.querySelector("#btn_newsletter");
    if(emailMsg.lastElementChild != null) {
        emailMsg.lastElementChild.remove();
    }
    if(patternEmail.test(email.value)) {
        console.log("Email corretta");
        emailFlag = true;
        email.classList.add("border-success");
        email.classList.remove("border-danger");
        btn.setAttribute("data-bs-toggle", "modal");
        btn.setAttribute("data-bs-target", "#exampleModal");
    }
    else {
        let pTag = document.createElement("p");
        pTag.textContent = "Email errata";
        pTag.classList.add("errore");
        emailMsg.appendChild(pTag);
        email.classList.add("border-danger");
        email.classList.remove("border-success");
        btn.setAttribute("data-bs-toggle", "#");
        btn.setAttribute("data-bs-target", "#");
    }
    return emailFlag;
}
function checkEmail() {
    let btn = document.querySelector("#btn_newsletter");
    let email = controlloEmailNewsletter();
    if(email) {
        console.log("Email_newsletter corretta");
        btn.setAttribute("data-bs-toggle", "modal");
        btn.setAttribute("data-bs-target", "#exampleModal");
    }
    else {
        btn.setAttribute("data-bs-toggle", "#");
        btn.setAttribute("data-bs-target", "#");
    }
}
function controlloNome() {
    let nome = document.querySelector("#nome");
    let patternNome = /^[a-zA-Z][a-zA-Z\s]*[a-zA-Z]$/;
    let msg = document.querySelector("#msg-nome");
    let nomeFlag = false;
    let btn = document.querySelector("#btn_form");
    if(msg.lastElementChild != null) {
        msg.lastElementChild.remove();
    }
    if(nome.value.trim() == "") {
        let pTag = document.createElement("p");
        pTag.textContent = "Inserire Il nome";
        pTag.classList.add("errore");
        msg.appendChild(pTag);
        nome.classList.add("border-danger");
        nome.classList.remove("border-success");
        btn.setAttribute("data-bs-toggle", "#");
        btn.setAttribute("data-bs-target", "#");
    }
    else {
        if(patternNome.test(nome.value)) {
            console.log("Nome corretto");
            nomeFlag = true;
            nome.classList.add("border-success");
            nome.classList.remove("border-danger");
            btn.setAttribute("data-bs-toggle", "modal");
            btn.setAttribute("data-bs-target", "#exampleModal");
        }
        else {
            let pTag = document.createElement("p");
            pTag.textContent = "Nome errato";
            pTag.classList.add("errore");
            msg.appendChild(pTag);
            nome.classList.add("border-danger");
            nome.classList.remove("border-success");
            btn.setAttribute("data-bs-toggle", "#");
            btn.setAttribute("data-bs-target", "#");
        }
    }
    return nomeFlag;
}
function controlloCognome() {
    let cognome = document.querySelector("#cognome");
    let patternCognome = /^[a-zA-Z][a-zA-Z\s]*[a-zA-Z]$/;
    let msg = document.querySelector("#msg-cognome");
    let cognomeFlag = false;
    let btn = document.querySelector("#btn_form");
    if(msg.lastElementChild != null) {
        msg.lastElementChild.remove();
    }
    if(cognome.value.trim() == "") {
        let pTag = document.createElement("p");
        pTag.textContent = "Inserire Il cognome";
        pTag.classList.add("errore");
        msg.appendChild(pTag);
        cognome.classList.add("border-danger");
        cognome.classList.remove("border-success");
        btn.setAttribute("data-bs-toggle", "#");
        btn.setAttribute("data-bs-target", "#");
    }
    else {
        if(patternCognome.test(cognome.value)) {
            console.log("Cognome corretto");
            cognomeFlag = true;
            cognome.classList.add("border-success");
            cognome.classList.remove("border-danger");
            btn.setAttribute("data-bs-toggle", "modal");
            btn.setAttribute("data-bs-target", "#exampleModal");
        }
        else {
            let pTag = document.createElement("p");
            pTag.textContent = "Cognome errato";
            pTag.classList.add("errore");
            msg.appendChild(pTag);
            cognome.classList.add("border-danger");
            cognome.classList.remove("border-success");
            btn.setAttribute("data-bs-toggle", "#");
            btn.setAttribute("data-bs-target", "#");
        }
    }
    return cognomeFlag;
}
function controlloEmail() {
    let email = document.querySelector("#email");
    let emailMsg = document.querySelector("#msg-email");
    let patternEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailFlag = false;
    let btn = document.querySelector("#btn_form");
    if(emailMsg.lastElementChild != null) {
        emailMsg.lastElementChild.remove();
    }
    if(email.value.trim() == "") {
        let pTag = document.createElement("p");
        pTag.textContent = "Inserire l'email";
        pTag.classList.add("errore");
        emailMsg.appendChild(pTag);
        email.classList.add("border-danger");
        email.classList.remove("border-success");
        btn.setAttribute("data-bs-toggle", "#");
        btn.setAttribute("data-bs-target", "#");
    }
    else {
        if(patternEmail.test(email.value)) {
            console.log("Email corretta");
            emailFlag = true;
            email.classList.add("border-success");
            email.classList.remove("border-danger");
            btn.setAttribute("data-bs-toggle", "modal");
            btn.setAttribute("data-bs-target", "#exampleModal");
        }
        else {
            let pTag = document.createElement("p");
            pTag.textContent = "Email errata";
            pTag.classList.add("errore");
            emailMsg.appendChild(pTag);
            email.classList.add("border-danger");
            email.classList.remove("border-success");
            btn.setAttribute("data-bs-toggle", "#");
            btn.setAttribute("data-bs-target", "#");
        }
    }
    return emailFlag;
}
function controlloTelefono() {
    let telefono = document.querySelector("#telefono");
    let patternTelefono = /^[0-9][0-9]{8}[0-9]$/;
    let msg = document.querySelector("#msg-telefono");
    let telefonoFlag = false;
    let btn = document.querySelector("#btn_form");
    if(msg.lastElementChild != null) {
        msg.lastElementChild.remove();
    }
    if(telefono.value.trim() == "") {
        let pTag = document.createElement("p");
        pTag.textContent = "Inserire Il tuo numero di telefono";
        pTag.classList.add("errore");
        msg.appendChild(pTag);
        telefono.classList.add("border-danger");
        telefono.classList.remove("border-success");
        btn.setAttribute("data-bs-toggle", "#");
        btn.setAttribute("data-bs-target", "#");
    }
    else {
        if(patternTelefono.test(telefono.value)) {
            console.log("Telefono corretto");
            telefonoFlag = true;
            telefono.classList.add("border-success");
            telefono.classList.remove("border-danger");
            btn.setAttribute("data-bs-toggle", "modal");
            btn.setAttribute("data-bs-target", "#exampleModal");
        }
        else {
            let pTag = document.createElement("p");
            pTag.textContent = "Numero di telefono errato";
            pTag.classList.add("errore");
            msg.appendChild(pTag);
            telefono.classList.add("border-danger");
            telefono.classList.remove("border-success");
            btn.setAttribute("data-bs-toggle", "#");
            btn.setAttribute("data-bs-target", "#");
        }
    }
    return telefonoFlag;
}
function controlloGiorno() {
    let giornoSelect = document.querySelector("#giorno");
    let msg = document.querySelector("#msg-giorno")
    let giornoFlag = false;
    let btn = document.querySelector("#btn_form");
    if(msg.lastElementChild != null) {
        msg.lastElementChild.remove();
    }
    if(giornoSelect.value == 0) {
        let pTag = document.createElement("p");
        pTag.textContent = "Scegli un giorno";
        pTag.classList.add("errore");
        msg.appendChild(pTag);
        giornoSelect.classList.add("border-danger");
        giornoSelect.classList.remove("border-success");
        btn.setAttribute("data-bs-toggle", "#");
        btn.setAttribute("data-bs-target", "#");
    }
    else {
        giornoFlag = true;
        console.log("Giorno corretto");
        giornoSelect.classList.remove("border-danger");
        giornoSelect.classList.add("border-success");
        btn.setAttribute("data-bs-toggle", "modal");
        btn.setAttribute("data-bs-target", "#exampleModal");
    }
    return giornoFlag;
}
function controlloMese() {
    let meseSelect = document.querySelector("#mese");
    let msg = document.querySelector("#msg-mese")
    let meseFlag = false;
    let btn = document.querySelector("#btn_form");
    if(msg.lastElementChild != null) {
        msg.lastElementChild.remove();
    }
    if(meseSelect.value == 0) {
        let pTag = document.createElement("p");
        pTag.textContent = "Scegli un mese";
        pTag.classList.add("errore");
        msg.appendChild(pTag);
        meseSelect.classList.add("border-danger");
        meseSelect.classList.remove("border-success");
        btn.setAttribute("data-bs-toggle", "#");
        btn.setAttribute("data-bs-target", "#");
    }
    else {
        meseFlag = true;
        console.log("Mese corretto");
        meseSelect.classList.remove("border-danger");
        meseSelect.classList.add("border-success");
        btn.setAttribute("data-bs-toggle", "modal");
        btn.setAttribute("data-bs-target", "#exampleModal");
    }
    return meseFlag;
}
function controlloAnno() {
    let annoSelect = document.querySelector("#anno");
    let msg = document.querySelector("#msg-anno")
    let annoFlag = false;
    let btn = document.querySelector("#btn_form");
    if(msg.lastElementChild != null) {
        msg.lastElementChild.remove();
    }
    if(annoSelect.value == 0) {
        let pTag = document.createElement("p");
        pTag.textContent = "Scegli un anno";
        pTag.classList.add("errore");
        msg.appendChild(pTag);
        annoSelect.classList.add("border-danger");
        annoSelect.classList.remove("border-success");
        btn.setAttribute("data-bs-toggle", "#");
        btn.setAttribute("data-bs-target", "#");
    }
    else {
        annoFlag = true;
        console.log("Anno corretto");
        annoSelect.classList.remove("border-danger");
        annoSelect.classList.add("border-success");
        btn.setAttribute("data-bs-toggle", "modal");
        btn.setAttribute("data-bs-target", "#exampleModal");
    }
    return annoFlag;
}
function trattamentoFlag() {
    let trattamento = document.querySelector("#trattamento input:checked");
    let btn = document.querySelector("#btn_form");
    let msg = document.querySelector("#msg-trattamento");
    if(msg.lastElementChild != null) {
        msg.lastElementChild.remove();
    }
    if(trattamento != null) {
        btn.removeAttribute("disabled");
    }
    else {
        btn.setAttribute("disabled", "disabled");
    }
}
function controlloForm() {
    let nome = controlloNome();
    let cognome = controlloCognome();
    let btn = document.querySelector("#btn_form");
    let email = controlloEmail();
    let telefono = controlloTelefono();
    let giorno = controlloGiorno();
    let mese = controlloMese();
    let anno = controlloAnno();
    if(cognome && nome && email && telefono && giorno && mese && anno) {
        console.log("I dati sono corretti");
        btn.setAttribute("data-bs-toggle", "modal");
        btn.setAttribute("data-bs-target", "#exampleModal");
    }
    else {
        btn.setAttribute("data-bs-toggle", "#");
        btn.setAttribute("data-bs-target", "#");
    }
}
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
      user = prompt("Please enter your name:", "");
      if (user != "" && user != null) {
        setCookie("username", user, 365);
      }
    }
  } 
  