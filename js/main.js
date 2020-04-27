console.log("Mi Pagina web");

//slectores
//let iconHam = document.getElementById("mHambur");
//let submenunav = document.getElementById("submenu");

const btnNav = document.querySelector(".menu-btn");

//eventos
btnNav.addEventListener('click', mostrarOcultar);

//funcion
function mostrarOcultar(){
    
   //let iconHam = document.getElementById("mHambur");
    let submenunav = document.getElementById("submenu");
    const btnNav = document.getElementById('burger');

    if(submenunav.style.display == "none"){
        
        console.log("ingrese al if");
        mostrarNav();
        btnNav.classList.add('open');
      //  iconHam.classList.add('fa-times-circle');
      //  iconHam.classList.toggle("fa-times-circle");

    }else{
        ocultarNav();
        btnNav.classList.remove('open');

    }

     //iconHam.classList.toggle('fa-times-circle');
        
}

function mostrarNav (){
    document.getElementById('submenu').style.display = 'block';
}

function ocultarNav(){
    document.getElementById('submenu').style.display = 'none';
}


