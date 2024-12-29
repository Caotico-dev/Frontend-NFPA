document.addEventListener('DOMContentLoaded',function(){

    const path = window.location.pathname;

    if(path === '/index.html'){
        Layout('NFPA 704 - Inicio');
    }
    else if(path === '/Riesgo.html'){
        Layout('NFPA 704 - Riesgo');
    }
    else if(path === '/Sistema.html'){
        Layout('NFPA 704 - Sistema');
    }
    else{
        Layout('NFPA 704');
    }

});


function Layout(tittle) {    

    document.querySelector('title').innerHTML = tittle;
   
  document.querySelector('.header').innerHTML = 
  `
       <h1 class="header__title">NFPA 704</h1>
       <img src="./img/nfpa-logo.png" alt="NFPA_logo" class="header__logo">
        <nav class="header__nav">
            <ul class="header__nav-ul">
                <li class="header__nav-li"><a href="index.html" class="header__nav-a">Inicio</a></li>
                <li class="header__nav-li"><a href="Sistema.html" class="header__nav-a">Sistema</a></li>
                <li class="header__nav-li"><a href="Riesgo.html" class="header__nav-a">Riesgo</a></li>
            </ul>
        </nav>
  `;


    document.querySelector('.footer').innerHTML = 
    `
        <p class="footer__text">Todos los derechos servador.</p>    
    `;

}
